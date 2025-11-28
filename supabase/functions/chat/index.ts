import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    console.log("Processing chat request with messages:", messages);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { 
            role: "system", 
            content: `Você é um assistente virtual da Clínica QUICEP, especializada em Saúde Reprodutiva Natural.
            
            Informações da clínica:
            - Nome: Clínica QUICEP
            - Especialização: Saúde Reprodutiva Natural
            - Slogan: Saúde Natural com Amor
            - Telefones: 973 003 455 / 957 600 902 e 956 166 491 / 957 600 092
            - Email: quicepquicep@gmail.com
            - Endereço: Rua da Fesa, vila do gamek, município da samba, próximo ao café da vila
            
            Horários:
            - Domingo a Quinta: 08:00-17:00 (Consultas gerais e atendimento ao público)
            - Sexta-feira: 08:00-14:00 (Serviços administrativos)
            - Feriados: 08:00-14:00 (Consultas gerais e atendimento ao público)
            - Sábado: Encerrado
            
            Serviços principais:
            - Naturopatia, Ginecologia, Urologia
            - Nutrição, Endocrinologia, Dermatologia
            - Infertilidade conjugal
            - Terapias naturais (Sauna, Ventosaterapia, Massoterapia, Geoterapia, Hidroterapia)
            - Análises clínicas e Ecografias
            - Fitofarmácia
            
            Doenças tratadas (homens): Doenças renais, cistite, ITU, incontinência urinária, uretrite, doenças da próstata, disfunção erétil, ejaculação precoce, varicocele, infertilidade masculina
            
            Doenças tratadas (mulheres): Miomas, endometriose, SOP, vaginites, cistos mamários, dismenorreia, amenorreia, TPM, corrimento, frigidez, infertilidade feminina
            
            Seja prestativo, profissional e caloroso. Responda em português de forma clara e concisa.
            Se perguntarem sobre agendamentos, sugira contactar o WhatsApp ou usar o formulário online.` 
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Limite de requisições excedido. Por favor, tente novamente mais tarde." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Pagamento necessário. Por favor, adicione créditos ao seu workspace Lovable AI." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Erro ao processar sua mensagem" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
