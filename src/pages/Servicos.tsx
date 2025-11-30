import { Heart, Stethoscope, Video, Microscope, Leaf, Users, Baby, Brain, Droplet, TestTube, ScanLine, Apple, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Servicos = () => {
  const consultations = [
    { name: "Naturopatia", icon: Leaf },
    { name: "Ginecologia", icon: Heart },
    { name: "Urologia", icon: Droplet },
    { name: "Nutrição", icon: Apple },
    { name: "Endocrinologia", icon: Brain },
    { name: "Dermatologia", icon: Users },
    { name: "Gastroenterologia", icon: Stethoscope },
    { name: "Infertilidade Conjugal", icon: Baby },
  ];

  const therapies = [
    { name: "Sauna", price: "15.000 Kz", description: "Desintoxicação, melhora da circulação, relaxamento profundo" },
    { name: "Ventosaterapia", price: "25.000 Kz", description: "Aumento da circulação local, redução de dores musculares" },
    { name: "Massoterapia", price: "15.000 Kz", description: "Relaxamento muscular, melhora da circulação linfática" },
    { name: "Geoterapia", price: "15.000 Kz", description: "Desinflamação natural com argilas terapêuticas" },
    { name: "Hidroterapia", price: "15.000 Kz", description: "Estimula circulação, aumenta imunidade" },
    { name: "Hidroconterapia", price: "15.000 Kz", description: "Desintoxicação profunda do cólon" },
    { name: "Lavagem Peniana", price: "Consultar", description: "Higiene e tratamento urológico especializado" },
    { name: "Lavagem Uterina", price: "Consultar", description: "Limpeza terapêutica ginecológica" },
    { name: "Aquecimento do Útero", price: "Consultar", description: "Terapia para saúde reprodutiva feminina" },
    { name: "Alargamento do Útero", price: "Consultar", description: "Tratamento especializado ginecológico" },
  ];

  const analyses = [
    "Colesterol HDL/LDL", "Urina I e II", "Espermograma", "Teste de Gravidez",
    "Exudado Vaginal/Uretral", "Progesterona", "Testosterona", "Grupo Sanguíneo",
    "Falciformação", "Glicemia", "Reação de Widal", "P.P", "HIV", "VDRL",
    "PSA", "H. Pylori"
  ];

  const ultrasounds = [
    "Ecografia Abdominal", "Ecografia Pélvica", "Ecografia Endovaginal",
    "Ecografia Testicular", "Ecografia Mamária", "Ecografia Renal"
  ];

  const phytopharmacy = [
    "Chás Medicinais", "Suplementos Naturais", "Cosméticos Naturais",
    "Produtos de Higiene Naturais", "Alimentos Funcionais",
    "Produtos para Ganho e Perda de Peso"
  ];

  const menDiseases = [
    "Doenças Renais", "Cistite (inflamação da bexiga)", "Infecção Urinária (ITU/UTI)",
    "Incontinência Urinária", "Uretrite", "Doenças da Próstata", "Disfunção Erétil",
    "Ejaculação Precoce", "Varicocele", "Infertilidade Masculina"
  ];

  const womenDiseases = [
    "Miomas", "Endometriose", "Câncer do Colo do Útero",
    "Síndrome dos Ovários Policísticos (SOP)", "Vaginites (Candidíase, Vaginose Bacteriana)",
    "Câncer e Cistos Mamários", "Dismenorreia (dor menstrual)",
    "Amenorreia (ausência de menstruação)", "TPM Acentuada",
    "Corrimento e Frigidez", "Infertilidade Feminina"
  ];

  const freeServices = [
    "Prioridade para Idosos, Grávidas e Crianças",
    "Medição de Peso",
    "Medição de Pressão Arterial"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="hero-gradient text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              Nossos Serviços
            </h1>
            <p className="text-xl text-white/90">
              Tratamentos 100% naturais com excelência em saúde reprodutiva
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="section-spacing">
        <div className="container-custom">
          <Tabs defaultValue="consultations" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-12">
              <TabsTrigger value="consultations">Consultas</TabsTrigger>
              <TabsTrigger value="therapies">Terapias</TabsTrigger>
              <TabsTrigger value="analyses">Análises</TabsTrigger>
              <TabsTrigger value="ultrasounds">Ecografias</TabsTrigger>
              <TabsTrigger value="phytopharmacy">Fitofarmácia</TabsTrigger>
              <TabsTrigger value="diseases">Doenças Tratadas</TabsTrigger>
              <TabsTrigger value="free">Grátis</TabsTrigger>
            </TabsList>

            {/* Consultations */}
            <TabsContent value="consultations">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {consultations.map((consultation, index) => {
                  const Icon = consultation.icon;
                  return (
                    <Card key={index} className="card-hover">
                      <CardContent className="p-6 text-center">
                        <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="font-semibold text-lg">{consultation.name}</h3>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* Therapies */}
            <TabsContent value="therapies">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {therapies.map((therapy, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-xl">{therapy.name}</h3>
                        <span className="text-primary font-bold">{therapy.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm">{therapy.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Analyses */}
            <TabsContent value="analyses">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {analyses.map((analysis, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-4 text-center">
                      <TestTube className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium">{analysis}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Ultrasounds */}
            <TabsContent value="ultrasounds">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ultrasounds.map((ultrasound, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6 text-center">
                      <ScanLine className="h-12 w-12 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold">{ultrasound}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Phytopharmacy */}
            <TabsContent value="phytopharmacy">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {phytopharmacy.map((item, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6 text-center">
                      <Leaf className="h-12 w-12 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold">{item}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Diseases Treated */}
            <TabsContent value="diseases">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="card-hover">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-primary">Doenças Urológicas (Homens)</h3>
                    <ul className="space-y-3">
                      {menDiseases.map((disease, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                          <span>{disease}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="card-hover">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-primary">Doenças Ginecológicas (Mulheres)</h3>
                    <ul className="space-y-3">
                      {womenDiseases.map((disease, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></span>
                          <span>{disease}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Free Services */}
            <TabsContent value="free">
              <Card className="card-hover max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <Gift className="h-16 w-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-6 text-center">Serviços Gratuitos</h3>
                  <ul className="space-y-4">
                    {freeServices.map((service, index) => (
                      <li key={index} className="flex items-start text-lg">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-3"></span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-section-bg">
        <div className="container-custom">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Pronto para Cuidar da Sua Saúde?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Marque sua consulta hoje e experimente tratamentos 100% naturais
            </p>
            <button 
               onClick={() => {
                 const url = 'https://wa.me/244973003455';
                 const link = document.createElement("a");
                 link.href = url;
                 link.target = "_blank";
                 link.rel = "noopener noreferrer";
                 document.body.appendChild(link);
                 link.click();
                 document.body.removeChild(link);
               }}
               className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105"
             >
              Marcar Consulta Agora
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicos;
