import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Upload, Loader2, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VideoItem {
  id: string;
  titulo: string;
  descricao: string | null;
  categoria: string;
  thumbnail_url: string | null;
  video_url: string | null;
}

const AdminVideos = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<VideoItem | null>(null);
  const [form, setForm] = useState({ titulo: "", descricao: "", categoria: "", video_url: "" });
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const fetchVideos = async () => {
    const { data } = await supabase.from("videos").select("*").order("created_at", { ascending: false });
    setVideos(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    fetchVideos();
    const channel = supabase
      .channel("videos-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "videos" }, () => fetchVideos())
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  const openCreate = () => {
    setEditing(null);
    setForm({ titulo: "", descricao: "", categoria: "", video_url: "" });
    setThumbnailFile(null);
    setDialogOpen(true);
  };

  const openEdit = (v: VideoItem) => {
    setEditing(v);
    setForm({ titulo: v.titulo, descricao: v.descricao ?? "", categoria: v.categoria, video_url: v.video_url ?? "" });
    setThumbnailFile(null);
    setDialogOpen(true);
  };

  const uploadThumbnail = async (file: File): Promise<string> => {
    const ext = file.name.split(".").pop();
    const path = `thumbnails/${Date.now()}.${ext}`;
    const { error } = await supabase.storage.from("videos").upload(path, file);
    if (error) throw error;
    const { data } = supabase.storage.from("videos").getPublicUrl(path);
    return data.publicUrl;
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      let thumbnail_url = editing?.thumbnail_url ?? null;
      if (thumbnailFile) {
        thumbnail_url = await uploadThumbnail(thumbnailFile);
      }
      const payload = {
        titulo: form.titulo,
        descricao: form.descricao || null,
        categoria: form.categoria,
        video_url: form.video_url || null,
        thumbnail_url,
      };

      if (editing) {
        await supabase.from("videos").update(payload).eq("id", editing.id);
        toast({ title: "Vídeo atualizado!" });
      } else {
        await supabase.from("videos").insert(payload);
        toast({ title: "Vídeo publicado!" });
      }
      setDialogOpen(false);
    } catch (err: any) {
      toast({ title: "Erro", description: err.message, variant: "destructive" });
    }
    setSaving(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este vídeo?")) return;
    await supabase.from("videos").delete().eq("id", id);
    toast({ title: "Vídeo excluído!" });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gerenciar Vídeos</h2>
        <Button onClick={openCreate}><Plus className="w-4 h-4 mr-2" />Novo Vídeo</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          {loading ? (
            <div className="flex justify-center p-8"><Loader2 className="animate-spin w-6 h-6" /></div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Thumbnail</TableHead>
                  <TableHead>Título</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead>Link</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {videos.map((v) => (
                  <TableRow key={v.id}>
                    <TableCell>
                      {v.thumbnail_url ? (
                        <img src={v.thumbnail_url} alt={v.titulo} className="w-16 h-10 rounded object-cover" />
                      ) : (
                        <div className="w-16 h-10 rounded bg-muted" />
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{v.titulo}</TableCell>
                    <TableCell>{v.categoria}</TableCell>
                    <TableCell>
                      {v.video_url && (
                        <a href={v.video_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1 text-sm">
                          <ExternalLink className="w-3 h-3" />Ver
                        </a>
                      )}
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="ghost" size="icon" onClick={() => openEdit(v)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-destructive" onClick={() => handleDelete(v.id)}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {videos.length === 0 && (
                  <TableRow><TableCell colSpan={5} className="text-center text-muted-foreground py-8">Nenhum vídeo publicado.</TableCell></TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? "Editar Vídeo" : "Novo Vídeo"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Título</label>
              <Input value={form.titulo} onChange={(e) => setForm({ ...form, titulo: e.target.value })} required />
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
                <label className="text-sm font-medium">Categoria</label>
                <Input value={form.categoria} onChange={(e) => setForm({ ...form, categoria: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">URL do Vídeo (YouTube)</label>
                <Input value={form.video_url} onChange={(e) => setForm({ ...form, video_url: e.target.value })} placeholder="https://youtube.com/..." />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Thumbnail</label>
              <label className="flex items-center gap-2 px-4 py-2 bg-muted rounded-md cursor-pointer hover:bg-muted/80 transition-colors text-sm">
                <Upload className="w-4 h-4" />
                {thumbnailFile ? thumbnailFile.name : "Escolher imagem"}
                <input type="file" accept="image/*" className="hidden" onChange={(e) => setThumbnailFile(e.target.files?.[0] ?? null)} />
              </label>
            </div>
            <Button type="submit" className="w-full" disabled={saving}>
              {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
              {editing ? "Atualizar" : "Publicar Vídeo"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminVideos;
