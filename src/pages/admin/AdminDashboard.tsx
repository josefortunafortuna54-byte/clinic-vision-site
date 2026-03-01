import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Video, ClipboardList, CheckCircle } from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({ produtos: 0, videos: 0, consultas: 0, atendidos: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const [p, v, c, a] = await Promise.all([
        supabase.from("produtos").select("id", { count: "exact", head: true }),
        supabase.from("videos").select("id", { count: "exact", head: true }),
        supabase.from("consultas").select("id", { count: "exact", head: true }),
        supabase.from("consultas").select("id", { count: "exact", head: true }).eq("atendido", true),
      ]);
      setStats({
        produtos: p.count ?? 0,
        videos: v.count ?? 0,
        consultas: c.count ?? 0,
        atendidos: a.count ?? 0,
      });
    };
    fetchStats();
  }, []);

  const cards = [
    { title: "Produtos", value: stats.produtos, icon: Package, color: "text-primary" },
    { title: "Vídeos", value: stats.videos, icon: Video, color: "text-secondary" },
    { title: "Consultas", value: stats.consultas, icon: ClipboardList, color: "text-accent" },
    { title: "Atendidos", value: stats.atendidos, icon: CheckCircle, color: "text-secondary" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((c) => (
          <Card key={c.title} className="card-hover">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{c.title}</CardTitle>
              <c.icon className={`h-5 w-5 ${c.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{c.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
