import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Upload, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Produto {
  id: string;
  nome: string;
  descricao: string | null;
  preco: number;
  categoria: string;
  imagem_url: string | null;
}

const AdminProdutos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Produto | null>(null);
  const [form, setForm] = useState({ nome: "", descricao: "", preco: "", categoria: "" });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const fetchProdutos = async () => {
    const { data } = await supabase.from("produtos").select("*").order("created_at", { ascending: false });
    setProdutos(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    fetchProdutos();
    const channel = supabase
      .channel("produtos-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "produtos" }, () => fetchProdutos())
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  const openCreate = () => {
    setEditing(null);
    setForm({ nome: "", descricao: "", preco: "", categoria: "" });
    setImageFile(null);
    setDialogOpen(true);
  };

  const openEdit = (p: Produto) => {
    setEditing(p);
    setForm({ nome: p.nome, descricao: p.descricao ?? "", preco: String(p.preco), categoria: p.categoria });
    setImageFile(null);
    setDialogOpen(true);
  };

  const uploadImage = async (file: File): Promise<string> => {
    const ext = file.name.split(".").pop();
    const path = `${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("produtos").upload(path, file);
    if (error) throw error;
    const { data } = supabase.storage.from("produtos").getPublicUrl(path);
    return data.publicUrl;
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      let imagem_url = editing?.imagem_url ?? null;
      if (imageFile) {
        imagem_url = await uploadImage(imageFile);
      }
      const payload = {
        nome: form.nome,
        descricao: form.descricao || null,
        preco: parseFloat(form.preco),
        categoria: form.categoria,
        imagem_url,
      };

      if (editing) {
        await supabase.from("produtos").update(payload).eq("id", editing.id);
        toast({ title: "Produto atualizado!" });
      } else {
        await supabase.from("produtos").insert(payload);
        toast({ title: "Produto criado!" });
      }
      setDialogOpen(false);
    } catch (err: any) {
      toast({ title: "Erro", description: err.message, variant: "destructive" });
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este produto?")) return;
    await supabase.from("produtos").delete().eq("id", id);
    toast({ title: "Produto excluído!" });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gerenciar Produtos</h2>
        <Button onClick={openCreate}><Plus className="w-4 h-4 mr-2" />Novo Produto</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          {loading ? (
            <div className="flex justify-center p-8"><Loader2 className="animate-spin w-6 h-6" /></div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Imagem</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {produtos.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell>
                      {p.imagem_url ? (
                        <img src={p.imagem_url} alt={p.nome} className="w-12 h-12 rounded object-cover" />
                      ) : (
                        <div className="w-12 h-12 rounded bg-muted" />
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{p.nome}</TableCell>
                    <TableCell>{p.categoria}</TableCell>
                    <TableCell>{Number(p.preco).toLocaleString("pt-AO")} Kz</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="ghost" size="icon" onClick={() => openEdit(p)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-destructive" onClick={() => handleDelete(p.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {produtos.length === 0 && (
                  <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">Nenhum produto cadastrado.</TableCell></TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? "Editar Produto" : "Novo Produto"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Nome</label>
              <Input value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Descrição</label>
              <textarea
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[80px]"
                value={form.descricao}
                onChange={(e) => setForm({ ...form, descricao: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Preço (Kz)</label>
                <Input type="number" step="0.01" value={form.preco} onChange={(e) => setForm({ ...form, preco: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Categoria</label>
                <Input value={form.categoria} onChange={(e) => setForm({ ...form, categoria: e.target.value })} required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Imagem</label>
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-2 px-4 py-2 bg-muted rounded-md cursor-pointer hover:bg-muted/80 transition-colors text-sm">
                  <Upload className="w-4 h-4" />
                  {imageFile ? imageFile.name : "Escolher ficheiro"}
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => setImageFile(e.target.files?.[0] ?? null)} />
                </label>
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={saving}>
              {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              {editing ? "Atualizar" : "Salvar Produto"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminProdutos;
