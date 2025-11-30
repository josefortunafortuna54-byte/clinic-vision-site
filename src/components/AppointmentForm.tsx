import { useState } from "react";
import { Calendar, Phone, User, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "Ginecologia",
    date: "",
    time: "",
    message: "",
  });
  const { toast } = useToast();

  const serviceTypes = [
    "Ginecologia",
    "Naturopatia",
    "Urologia",
    "Nutrição",
    "Consulta Geral",
    "Teleconsulta",
    "Endocrinologia",
    "Dermatologia",
  ];

  const availableTimes = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Salvar no localStorage
    const appointments = JSON.parse(localStorage.getItem("appointments") || "[]");
    const newAppointment = {
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      status: "pending",
    };
    appointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(appointments));

    // Preparar mensagem para WhatsApp
    const message = `*Novo Agendamento - Clínica QUICEP*%0A%0A` +
      `*Nome:* ${formData.name}%0A` +
      `*Telefone:* ${formData.phone}%0A` +
      `*Tipo de Consulta:* ${formData.type}%0A` +
      `*Data:* ${new Date(formData.date).toLocaleDateString('pt-BR')}%0A` +
      `*Horário:* ${formData.time}%0A` +
      `${formData.message ? `*Mensagem:* ${formData.message}` : ''}`;

    const url = `https://wa.me/244973003455?text=${message}`;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast({
      title: "Agendamento enviado!",
      description: "Entraremos em contacto em breve para confirmar.",
    });

    // Limpar formulário
    setFormData({
      name: "",
      phone: "",
      type: "Ginecologia",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <Card className="p-8">
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <User className="h-4 w-4 text-primary" />
              Nome Completo *
            </label>
            <Input 
              placeholder="Digite seu nome" 
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Phone className="h-4 w-4 text-primary" />
              Telefone *
            </label>
            <Input 
              placeholder="+244" 
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <FileText className="h-4 w-4 text-primary" />
              Tipo de Consulta *
            </label>
            <select 
              className="w-full p-2 border rounded-lg bg-background"
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              required
            >
              {serviceTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Calendar className="h-4 w-4 text-primary" />
              Data Preferida *
            </label>
            <Input 
              type="date" 
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Clock className="h-4 w-4 text-primary" />
              Horário Preferido *
            </label>
            <select 
              className="w-full p-2 border rounded-lg bg-background"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              required
            >
              <option value="">Selecione um horário</option>
              {availableTimes.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-2">
              Mensagem (Opcional)
            </label>
            <Textarea 
              placeholder="Descreva brevemente o motivo da consulta" 
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <Button type="submit" className="flex-1">
            Confirmar Agendamento via WhatsApp
          </Button>
        </div>

        <p className="text-xs text-muted-foreground mt-4 text-center">
          Após submeter, entraremos em contacto para confirmar o agendamento
        </p>
      </form>
    </Card>
  );
};

export default AppointmentForm;
