import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Loader2, Plus, Trash2, Save, BookOpen, Users, Settings, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// ─── Sobre Conteúdo ───
function ConteudoTab() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["sobre_conteudo"],
    queryFn: async () => {
      const { data, error } = await supabase.from("sobre_conteudo").select("*").limit(1).single();
      if (error) throw error;
      return data;
    },
  });

  const [historia, setHistoria] = useState("");
  const [jornada, setJornada] = useState("");
  const [initialized, setInitialized] = useState(false);

  if (data && !initialized) {
    setHistoria(data.historia);
    setJornada(data.jornada);
    setInitialized(true);
  }

  const mutation = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from("sobre_conteudo")
        .update({ historia, jornada, atualizado_em: new Date().toISOString() })
        .eq("id", data?.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sobre_conteudo"] });
      toast.success("Conteúdo atualizado com sucesso!");
    },
    onError: () => toast.error("Erro ao atualizar conteúdo"),
  });

  if (isLoading) return <Loader2 className="animate-spin mx-auto mt-8 text-primary" />;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <BookOpen className="h-5 w-5" /> A Nossa História
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={historia}
            onChange={(e) => setHistoria(e.target.value)}
            rows={10}
            placeholder="Escreva a história da clínica..."
            className="resize-y"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <MapPin className="h-5 w-5" /> A Nossa Jornada
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={jornada}
            onChange={(e) => setJornada(e.target.value)}
            rows={8}
            placeholder="Formato: ANO - Evento (uma linha por evento)"
            className="resize-y"
          />
          <p className="text-xs text-muted-foreground mt-2">Formato: 2015 - Fundação da Clínica (uma entrada por linha)</p>
        </CardContent>
      </Card>

      <Button onClick={() => mutation.mutate()} disabled={mutation.isPending} className="bg-primary hover:bg-primary/90">
        {mutation.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
        Guardar Alterações
      </Button>
    </div>
  );
}

// ─── Equipa ───
function EquipaTab() {
  const queryClient = useQueryClient();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [form, setForm] = useState({ nome: "", cargo: "", especialidade: "", descricao: "", foto_url: "", ordem: 0 });

  const { data: equipa, isLoading } = useQuery({
    queryKey: ["equipa"],
    queryFn: async () => {
      const { data, error } = await supabase.from("equipa").select("*").order("ordem");
      if (error) throw error;
      return data;
    },
  });

  const saveMutation = useMutation({
    mutationFn: async () => {
      if (editing) {
        const { error } = await supabase.from("equipa").update(form).eq("id", editing.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("equipa").insert(form);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["equipa"] });
      toast.success(editing ? "Membro atualizado!" : "Membro adicionado!");
      setDialogOpen(false);
      resetForm();
    },
    onError: () => toast.error("Erro ao guardar membro"),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("equipa").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["equipa"] });
      toast.success("Membro removido!");
    },
  });

  const resetForm = () => {
    setForm({ nome: "", cargo: "", especialidade: "", descricao: "", foto_url: "", ordem: 0 });
    setEditing(null);
  };

  const openEdit = (member: any) => {
    setEditing(member);
    setForm({
      nome: member.nome,
      cargo: member.cargo,
      especialidade: member.especialidade,
      descricao: member.descricao,
      foto_url: member.foto_url || "",
      ordem: member.ordem,
    });
    setDialogOpen(true);
  };

  if (isLoading) return <Loader2 className="animate-spin mx-auto mt-8 text-primary" />;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Membros da Equipa ({equipa?.length || 0})</h3>
        <Dialog open={dialogOpen} onOpenChange={(o) => { setDialogOpen(o); if (!o) resetForm(); }}>
          <DialogTrigger asChild>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="h-4 w-4 mr-2" /> Adicionar Membro
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg">
            <DialogHeader>
              <DialogTitle>{editing ? "Editar Membro" : "Novo Membro"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              <Input placeholder="Nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
              <Input placeholder="Cargo" value={form.cargo} onChange={(e) => setForm({ ...form, cargo: e.target.value })} />
              <Input placeholder="Especialidade" value={form.especialidade} onChange={(e) => setForm({ ...form, especialidade: e.target.value })} />
              <Textarea placeholder="Descrição" value={form.descricao} onChange={(e) => setForm({ ...form, descricao: e.target.value })} rows={3} />
              <Input placeholder="URL da Foto" value={form.foto_url} onChange={(e) => setForm({ ...form, foto_url: e.target.value })} />
              <Input type="number" placeholder="Ordem" value={form.ordem} onChange={(e) => setForm({ ...form, ordem: parseInt(e.target.value) || 0 })} />
              <Button onClick={() => saveMutation.mutate()} disabled={saveMutation.isPending} className="w-full bg-primary hover:bg-primary/90">
                {saveMutation.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
                {editing ? "Atualizar" : "Adicionar"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {equipa?.map((m) => (
          <Card key={m.id} className="overflow-hidden">
            <div className="flex">
              {m.foto_url && (
                <img src={m.foto_url} alt={m.nome} className="w-24 h-24 object-cover flex-shrink-0" />
              )}
              <CardContent className="p-4 flex-1">
                <h4 className="font-bold">{m.nome}</h4>
                <p className="text-sm text-primary">{m.cargo}</p>
                <p className="text-xs text-muted-foreground">{m.especialidade}</p>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" variant="outline" onClick={() => openEdit(m)}>Editar</Button>
                  <Button size="sm" variant="destructive" onClick={() => deleteMutation.mutate(m.id)}>
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

// ─── Configurações ───
function ConfigTab() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["configuracoes_clinica"],
    queryFn: async () => {
      const { data, error } = await supabase.from("configuracoes_clinica").select("*").limit(1).single();
      if (error) throw error;
      return data;
    },
  });

  const [form, setForm] = useState({ telefone: "", email: "", endereco: "", horario: "" });
  const [initialized, setInitialized] = useState(false);

  if (data && !initialized) {
    setForm({ telefone: data.telefone, email: data.email, endereco: data.endereco, horario: data.horario });
    setInitialized(true);
  }

  const mutation = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from("configuracoes_clinica")
        .update({ ...form, updated_at: new Date().toISOString() })
        .eq("id", data?.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["configuracoes_clinica"] });
      toast.success("Configurações atualizadas!");
    },
    onError: () => toast.error("Erro ao atualizar configurações"),
  });

  if (isLoading) return <Loader2 className="animate-spin mx-auto mt-8 text-primary" />;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Settings className="h-5 w-5" /> Contactos e Horários
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium">Telefone</label>
          <Input value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label className="text-sm font-medium">Endereço</label>
          <Input value={form.endereco} onChange={(e) => setForm({ ...form, endereco: e.target.value })} />
        </div>
        <div>
          <label className="text-sm font-medium">Horário</label>
          <Textarea value={form.horario} onChange={(e) => setForm({ ...form, horario: e.target.value })} rows={3} />
        </div>
        <Button onClick={() => mutation.mutate()} disabled={mutation.isPending} className="bg-primary hover:bg-primary/90">
          {mutation.isPending ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Save className="h-4 w-4 mr-2" />}
          Guardar Configurações
        </Button>
      </CardContent>
    </Card>
  );
}

// ─── Main Admin Sobre Page ───
const AdminSobre = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-primary">Página Sobre</h2>
      <Tabs defaultValue="conteudo" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="conteudo" className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" /> Conteúdo
          </TabsTrigger>
          <TabsTrigger value="equipa" className="flex items-center gap-1">
            <Users className="h-4 w-4" /> Equipa
          </TabsTrigger>
          <TabsTrigger value="config" className="flex items-center gap-1">
            <Settings className="h-4 w-4" /> Configurações
          </TabsTrigger>
        </TabsList>
        <TabsContent value="conteudo"><ConteudoTab /></TabsContent>
        <TabsContent value="equipa"><EquipaTab /></TabsContent>
        <TabsContent value="config"><ConfigTab /></TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminSobre;
