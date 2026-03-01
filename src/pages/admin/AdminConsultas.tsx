import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Consulta {
  id: string;
  nome_cliente: string;
  telefone: string;
  area_dor: string | null;
  data_pedido: string;
  atendido: boolean;
}

const AdminConsultas = () => {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchConsultas = async () => {
    const { data } = await supabase.from("consultas").select("*").order("data_pedido", { ascending: false });
    setConsultas(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    fetchConsultas();
    const channel = supabase
      .channel("consultas-realtime")
      .on("postgres_changes", { event: "*", schema: "public", table: "consultas" }, () => fetchConsultas())
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  const toggleAtendido = async (c: Consulta) => {
    await supabase.from("consultas").update({ atendido: !c.atendido }).eq("id", c.id);
    toast({ title: c.atendido ? "Marcado como pendente" : "Marcado como atendido" });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Consultas</h2>

      <Card>
        <CardContent className="p-0">
          {loading ? (
            <div className="flex justify-center p-8"><Loader2 className="animate-spin w-6 h-6" /></div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Telefone</TableHead>
                  <TableHead>Área da Dor</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Ação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {consultas.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell className="font-medium">{c.nome_cliente}</TableCell>
                    <TableCell>{c.telefone}</TableCell>
                    <TableCell>{c.area_dor ?? "—"}</TableCell>
                    <TableCell>{new Date(c.data_pedido).toLocaleDateString("pt-AO")}</TableCell>
                    <TableCell>
                      {c.atendido ? (
                        <Badge className="bg-secondary/20 text-secondary border-secondary/30">
                          <CheckCircle className="w-3 h-3 mr-1" />Atendido
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-orange-600 border-orange-300">
                          <Clock className="w-3 h-3 mr-1" />Pendente
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleAtendido(c)}
                      >
                        {c.atendido ? "Desfazer" : "Marcar Atendido"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {consultas.length === 0 && (
                  <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">Nenhuma consulta registrada.</TableCell></TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminConsultas;
