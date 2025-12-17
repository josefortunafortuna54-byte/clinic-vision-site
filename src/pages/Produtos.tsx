import { useState } from "react";
import { Search, ShoppingCart, Info, TableIcon, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import zainHormoneImg from "@/assets/zain-hormone.jpg";
import pidSyrupImg from "@/assets/pid-syrup.jpg";
import marion4WomanImg from "@/assets/marion-4-woman.jpg";
import energyPlusImg from "@/assets/energy-plus.jpg";
import cardioHealthImg from "@/assets/cardio-health.jpg";
import glowSkinImg from "@/assets/glow-skin.jpg";
import digestEaseImg from "@/assets/digest-ease.jpg";
import immuneBoostImg from "@/assets/immune-boost.jpg";
import spermPowerImg from "@/assets/sperm-power.jpg";
import cd4ImmuneImg from "@/assets/cd4-immune.jpg";
import afyaUbongoImg from "@/assets/afya-ubongo.jpg";
import babalaoOilImg from "@/assets/babalao-oil.jpg";
import loveKingdomImg from "@/assets/love-kingdom.jpg";
import coldSyrupImg from "@/assets/cold-syrup.jpg";
import prostateCareImg from "@/assets/prostate-care.jpg";
import fertilityPlusImg from "@/assets/fertility-plus.jpg";
import yaBongoImg from "@/assets/ya-bongo.jpg";
import kidneyCareImg from "@/assets/kidney-care.jpg";
import liverDetoxImg from "@/assets/liver-detox.jpg";
import bloodPressureImg from "@/assets/blood-pressure.jpg";
import diabetesControlImg from "@/assets/diabetes-control.jpg";
import jointReliefImg from "@/assets/joint-relief.jpg";
import stressReliefImg from "@/assets/stress-relief.jpg";
import sleepAidImg from "@/assets/sleep-aid.jpg";
import weightLossImg from "@/assets/weight-loss.jpg";
import menopauseReliefImg from "@/assets/menopause-relief.jpg";
import eyeHealthImg from "@/assets/eye-health.jpg";
import boneHealthImg from "@/assets/bone-health.jpg";
import hairGrowthImg from "@/assets/hair-growth.jpg";
import utiCareImg from "@/assets/uti-care.jpg";
import testosteroneBoostImg from "@/assets/testosterone-boost.jpg";
import libidoPlusImg from "@/assets/libido-plus.jpg";
import multivitaminImg from "@/assets/multivitamin.jpg";
import antiAgingImg from "@/assets/anti-aging.jpg";
import prenatalCareImg from "@/assets/prenatal-care.jpg";
import cholesterolCareImg from "@/assets/cholesterol-care.jpg";
import bodyDetoxImg from "@/assets/body-detox.jpg";
import allergyReliefImg from "@/assets/allergy-relief.jpg";
import coughSyrupImg from "@/assets/cough-syrup.jpg";
import ironSupplementImg from "@/assets/iron-supplement.jpg";
import omega3Img from "@/assets/omega3.jpg";
import vitaminDImg from "@/assets/vitamin-d.jpg";
import vitaminCImg from "@/assets/vitamin-c.jpg";
import zincImmunityImg from "@/assets/zinc-immunity.jpg";
import probioticImg from "@/assets/probiotic.jpg";
import magnesiumImg from "@/assets/magnesium.jpg";
import collagenImg from "@/assets/collagen.jpg";
import spirulinaImg from "@/assets/spirulina.jpg";
import gingerTurmericImg from "@/assets/ginger-turmeric.jpg";
import garlicExtractImg from "@/assets/garlic-extract.jpg";
import ginsengImg from "@/assets/ginseng.jpg";
import moringaImg from "@/assets/moringa.jpg";
import ashwagandhaImg from "@/assets/ashwagandha.jpg";
import blackSeedOilImg from "@/assets/black-seed-oil.jpg";
import aloeVeraImg from "@/assets/aloe-vera.jpg";
import echinaceaImg from "@/assets/echinacea.jpg";
import valerianRootImg from "@/assets/valerian-root.jpg";
import milkThistleImg from "@/assets/milk-thistle.jpg";
import sawPalmettoImg from "@/assets/saw-palmetto.jpg";
import cranberryImg from "@/assets/cranberry.jpg";
import macaRootImg from "@/assets/maca-root.jpg";
import biotinImg from "@/assets/biotin.jpg";
import folicAcidImg from "@/assets/folic-acid.jpg";
import greenTeaImg from "@/assets/green-tea.jpg";
import appleCiderImg from "@/assets/apple-cider.jpg";
import coq10Img from "@/assets/coq10.jpg";
import eveningPrimroseImg from "@/assets/evening-primrose.jpg";
import calciumDImg from "@/assets/calcium-d.jpg";
import melatoninImg from "@/assets/melatonin.jpg";
import elderberryImg from "@/assets/elderberry.jpg";
import bComplexImg from "@/assets/b-complex.jpg";
import glucosamineImg from "@/assets/glucosamine.jpg";
import propolisImg from "@/assets/propolis.jpg";
import royalJellyImg from "@/assets/royal-jelly.jpg";
import zainDawaImg from "@/assets/zain-dawa.jpg";
import mwendoMdundoImg from "@/assets/mwendo-mdundo.jpg";
import zainBawasirImg from "@/assets/zain-bawasir.jpg";
import bodySlimImg from "@/assets/body-slim.jpg";
import saba77Img from "@/assets/saba-77.jpg";
import msaadaTutaImg from "@/assets/msaada-tuta.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Produtos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState("Todos");

  const categories = ["Todos", "Saúde Reprodutiva", "Saúde Masculina", "Saúde Feminina", "Energia & Vitalidade", "Cardiovascular", "Beleza", "Digestão", "Imunidade", "Respiratório", "Cognitivo", "Sono & Stress", "Articulações", "Peso & Metabolismo", "Desintoxicação", "Vitaminas & Minerais"];

  const priceRanges = [
    { label: "Todos", min: 0, max: Infinity },
    { label: "Até 5.000 Kz", min: 0, max: 5000 },
    { label: "5.000 - 10.000 Kz", min: 5000, max: 10000 },
    { label: "10.000 - 15.000 Kz", min: 10000, max: 15000 },
    { label: "Acima de 15.000 Kz", min: 15000, max: Infinity },
  ];

  const getNumericPrice = (priceStr: string): number => {
    return parseInt(priceStr.replace(/\./g, "").replace(" Kz", ""));
  };

  const products = [
    // Saúde Reprodutiva
    { id: 1, name: "Marion 4 Woman", category: "Saúde Reprodutiva", description: "Suplemento natural para saúde reprodutiva feminina.", longDescription: "Marion 4 Woman é uma fórmula completa desenvolvida especialmente para apoiar a saúde reprodutiva e hormonal feminina.", image: marion4WomanImg, price: "10.000 Kz" },
    { id: 2, name: "P.I.D Syrup", category: "Saúde Reprodutiva", description: "Tratamento herbal para inflamações pélvicas.", longDescription: "P.I.D Syrup é um xarope herbal formulado para ajudar no tratamento natural de inflamações pélvicas.", image: pidSyrupImg, price: "10.000 Kz" },
    { id: 3, name: "ZAIN Hormone Imbalance", category: "Saúde Reprodutiva", description: "Regulação natural de hormonas femininas.", longDescription: "ZAIN Hormone Imbalance ajuda a regular o equilíbrio hormonal feminino de forma natural.", image: zainHormoneImg, price: "10.000 Kz" },
    { id: 4, name: "Fertility Plus", category: "Saúde Reprodutiva", description: "Apoio natural à fertilidade feminina.", longDescription: "Fertility Plus ajuda a preparar o corpo para a concepção, regulando os ciclos reprodutivos.", image: fertilityPlusImg, price: "10.000 Kz" },
    { id: 5, name: "Prenatal Care", category: "Saúde Reprodutiva", description: "Vitaminas pré-natais para gravidez saudável.", longDescription: "Prenatal Care fornece nutrientes essenciais para uma gravidez saudável e desenvolvimento do bebé.", image: prenatalCareImg, price: "10.000 Kz" },
    { id: 6, name: "Folic Acid", category: "Saúde Reprodutiva", description: "Ácido fólico para gravidez e saúde celular.", longDescription: "Ácido Fólico essencial para mulheres grávidas e saúde celular geral.", image: folicAcidImg, price: "10.000 Kz" },
    
    // Saúde Masculina
    { id: 7, name: "SPERM POWER", category: "Saúde Masculina", description: "Suplemento premium para fertilidade masculina.", longDescription: "SPERM POWER aumenta a qualidade e quantidade espermática, melhorando a fertilidade masculina.", image: spermPowerImg, price: "18.000 Kz" },
    { id: 8, name: "Prostate Care", category: "Saúde Masculina", description: "Suporte natural para saúde da próstata.", longDescription: "Prostate Care contém saw palmetto e zinco para apoiar a saúde da próstata.", image: prostateCareImg, price: "10.000 Kz" },
    { id: 9, name: "Testosterone Boost", category: "Saúde Masculina", description: "Aumento natural de testosterona.", longDescription: "Testosterone Boost ajuda a aumentar os níveis de testosterona de forma natural.", image: testosteroneBoostImg, price: "10.000 Kz" },
    { id: 10, name: "Saw Palmetto", category: "Saúde Masculina", description: "Suporte natural para próstata e sistema urinário.", longDescription: "Saw Palmetto é um suplemento natural para saúde prostática e função urinária.", image: sawPalmettoImg, price: "10.000 Kz" },
    { id: 76, name: "MWENDO MDUNDO", category: "Saúde Masculina", description: "Fármaco eficaz para impotência sexual e ejaculação precoce.", longDescription: "MWENDO MDUNDO é um fármaco eficaz para problemas masculinos como impotência sexual e ejaculação precoce.", image: mwendoMdundoImg, price: "10.000 Kz" },
    { id: 80, name: "MSAADA KWENYE TUTA", category: "Saúde Masculina", description: "Solução para prolongar o desempenho sexual de 30 a 40 minutos.", longDescription: "MSAADA KWENYE TUTA é uma solução terminal para saborear e excitar durante o sexo por 30 a 40 minutos. É um medicamento muito importante para pessoas afetadas pela masturbação.", image: msaadaTutaImg, price: "10.000 Kz" },
    
    // Saúde Feminina
    { id: 11, name: "Menopause Relief", category: "Saúde Feminina", description: "Alívio natural dos sintomas da menopausa.", longDescription: "Menopause Relief ajuda a aliviar ondas de calor, alterações de humor e outros sintomas.", image: menopauseReliefImg, price: "10.000 Kz" },
    { id: 12, name: "Evening Primrose", category: "Saúde Feminina", description: "Óleo de prímula para equilíbrio hormonal.", longDescription: "Evening Primrose Oil ajuda no equilíbrio hormonal feminino e saúde da pele.", image: eveningPrimroseImg, price: "10.000 Kz" },
    { id: 13, name: "UTI Care", category: "Saúde Feminina", description: "Suporte natural para infecções urinárias.", longDescription: "UTI Care ajuda a prevenir e tratar infecções do trato urinário naturalmente.", image: utiCareImg, price: "10.000 Kz" },
    { id: 14, name: "Cranberry", category: "Saúde Feminina", description: "Suporte natural para saúde da bexiga.", longDescription: "Cranberry ajuda a manter a saúde do trato urinário e prevenir infecções.", image: cranberryImg, price: "10.000 Kz" },
    
    // Energia & Vitalidade
    { id: 15, name: "LOVE KINGDOM", category: "Energia & Vitalidade", description: "Suplemento premium para vitalidade e intimidade.", longDescription: "LOVE KINGDOM melhora a vitalidade e qualidade da vida íntima de forma natural.", image: loveKingdomImg, price: "18.000 Kz" },
    { id: 16, name: "Energy Plus", category: "Energia & Vitalidade", description: "Suplemento energético natural para combater fadiga.", longDescription: "Energy Plus combina vitaminas do complexo B, ginseng e guaraná para energia sustentada.", image: energyPlusImg, price: "10.000 Kz" },
    { id: 17, name: "BABALAO Oil", category: "Energia & Vitalidade", description: "Óleo natural para massagem e bem-estar.", longDescription: "BABALAO Oil é um óleo herbal tradicional africano para massagens terapêuticas.", image: babalaoOilImg, price: "18.000 Kz" },
    { id: 18, name: "Ginseng", category: "Energia & Vitalidade", description: "Raiz de ginseng para energia e resistência.", longDescription: "Ginseng é um adaptógeno tradicional que aumenta energia, resistência e função cognitiva.", image: ginsengImg, price: "18.000 Kz" },
    { id: 19, name: "Maca Root", category: "Energia & Vitalidade", description: "Raiz de maca peruana para vitalidade.", longDescription: "Maca Root é um superalimento peruano que aumenta energia, libido e resistência.", image: macaRootImg, price: "10.000 Kz" },
    { id: 20, name: "Libido Plus", category: "Energia & Vitalidade", description: "Aumento natural da libido e desempenho.", longDescription: "Libido Plus ajuda a aumentar o desejo e desempenho de forma natural.", image: libidoPlusImg, price: "10.000 Kz" },
    { id: 21, name: "Royal Jelly", category: "Energia & Vitalidade", description: "Geleia real para energia e vitalidade.", longDescription: "Royal Jelly é um superalimento das abelhas rico em nutrientes para energia e longevidade.", image: royalJellyImg, price: "18.000 Kz" },
    { id: 22, name: "B Complex", category: "Energia & Vitalidade", description: "Complexo B para energia e sistema nervoso.", longDescription: "B Complex fornece todas as vitaminas B essenciais para energia e saúde nervosa.", image: bComplexImg, price: "10.000 Kz" },
    
    // Imunidade
    { id: 23, name: "CD4 Immune", category: "Imunidade", description: "Suporte premium ao sistema imunológico.", longDescription: "CD4 Immune fortalece o sistema imunológico e aumenta as defesas naturais.", image: cd4ImmuneImg, price: "18.000 Kz" },
    { id: 24, name: "ImmuneBoost", category: "Imunidade", description: "Fortalecimento natural do sistema imunológico.", longDescription: "ImmuneBoost contém vitamina C, zinco, equinácea e própolis para defesas naturais.", image: immuneBoostImg, price: "10.000 Kz" },
    { id: 25, name: "Vitamin C", category: "Imunidade", description: "Vitamina C para imunidade e antioxidantes.", longDescription: "Vitamina C é essencial para o sistema imunológico e proteção antioxidante.", image: vitaminCImg, price: "10.000 Kz" },
    { id: 26, name: "Zinc Immunity", category: "Imunidade", description: "Zinco para defesa imunológica.", longDescription: "Zinc Immunity fortalece as defesas naturais do corpo contra infecções.", image: zincImmunityImg, price: "10.000 Kz" },
    { id: 27, name: "Echinacea", category: "Imunidade", description: "Equinácea para prevenção de gripes.", longDescription: "Echinacea é um suplemento herbal que ajuda a prevenir e tratar constipações.", image: echinaceaImg, price: "10.000 Kz" },
    { id: 28, name: "Elderberry", category: "Imunidade", description: "Sabugueiro para suporte imunológico.", longDescription: "Elderberry é rico em antioxidantes e ajuda a combater gripes e constipações.", image: elderberryImg, price: "10.000 Kz" },
    { id: 29, name: "Propolis", category: "Imunidade", description: "Própolis natural antibiótico.", longDescription: "Propolis é um antibiótico natural das abelhas com propriedades antimicrobianas.", image: propolisImg, price: "10.000 Kz" },
    { id: 30, name: "Black Seed Oil", category: "Imunidade", description: "Óleo de semente preta para imunidade.", longDescription: "Black Seed Oil (Nigella Sativa) é um potente suplemento para o sistema imunológico.", image: blackSeedOilImg, price: "10.000 Kz" },
    { id: 79, name: "SABA WA SABINI 77", category: "Imunidade", description: "Fármaco de ervas naturais para tratamento de 77 doenças.", longDescription: "SABA WA SABINI 77 é um fármaco de muitas ervas naturais com finalidade de curar 77 doenças como: perda de cabelos, cura sarnas, aumento do apetite sexual, melhorar a qualidade do sono, melhora açúcar no sangue, ajuda a fortalecer o cérebro, elimina diabetes, lavagem do estômago e muito mais.", image: saba77Img, price: "18.000 Kz" },
    
    // Cognitivo
    { id: 31, name: "AFYA UBONGO", category: "Cognitivo", description: "Suplemento premium para saúde cerebral.", longDescription: "AFYA UBONGO melhora a memória, concentração e saúde cognitiva geral.", image: afyaUbongoImg, price: "18.000 Kz" },
    { id: 32, name: "YA BONGO", category: "Cognitivo", description: "Suplemento premium para função cerebral.", longDescription: "YA BONGO é uma fórmula avançada para melhorar a função cerebral e memória.", image: yaBongoImg, price: "18.000 Kz" },
    
    // Respiratório
    { id: 33, name: "Cold Syrup", category: "Respiratório", description: "Xarope natural para gripes e constipações.", longDescription: "Cold Syrup alivia sintomas de gripe, tosse e constipação naturalmente.", image: coldSyrupImg, price: "3.000 Kz" },
    { id: 34, name: "Cough Syrup", category: "Respiratório", description: "Xarope herbal para tosse.", longDescription: "Cough Syrup é um xarope natural que alivia a tosse e acalma as vias respiratórias.", image: coughSyrupImg, price: "3.000 Kz" },
    { id: 35, name: "Allergy Relief", category: "Respiratório", description: "Alívio natural de alergias.", longDescription: "Allergy Relief ajuda a aliviar sintomas de alergias respiratórias naturalmente.", image: allergyReliefImg, price: "10.000 Kz" },
    
    // Cardiovascular
    { id: 36, name: "CardioHealth", category: "Cardiovascular", description: "Suporte natural para saúde cardiovascular.", longDescription: "CardioHealth contém ômega-3, CoQ10 e antioxidantes para saúde do coração.", image: cardioHealthImg, price: "10.000 Kz" },
    { id: 37, name: "Blood Pressure", category: "Cardiovascular", description: "Suporte natural para pressão arterial.", longDescription: "Blood Pressure ajuda a manter níveis saudáveis de pressão arterial.", image: bloodPressureImg, price: "10.000 Kz" },
    { id: 38, name: "Cholesterol Care", category: "Cardiovascular", description: "Controle natural do colesterol.", longDescription: "Cholesterol Care ajuda a manter níveis saudáveis de colesterol.", image: cholesterolCareImg, price: "10.000 Kz" },
    { id: 39, name: "Omega 3", category: "Cardiovascular", description: "Óleo de peixe para saúde cardíaca.", longDescription: "Omega 3 é essencial para saúde cardiovascular, cerebral e anti-inflamatória.", image: omega3Img, price: "10.000 Kz" },
    { id: 40, name: "CoQ10", category: "Cardiovascular", description: "Coenzima Q10 para energia celular.", longDescription: "CoQ10 é essencial para produção de energia celular e saúde cardíaca.", image: coq10Img, price: "10.000 Kz" },
    { id: 41, name: "Garlic Extract", category: "Cardiovascular", description: "Extrato de alho para coração saudável.", longDescription: "Garlic Extract ajuda a manter a saúde cardiovascular e níveis de colesterol.", image: garlicExtractImg, price: "10.000 Kz" },
    
    // Digestão
    { id: 42, name: "DigestEase", category: "Digestão", description: "Apoio natural para digestão saudável.", longDescription: "DigestEase combina enzimas digestivas e probióticos para melhor digestão.", image: digestEaseImg, price: "10.000 Kz" },
    { id: 43, name: "Probiotic", category: "Digestão", description: "Probióticos para saúde intestinal.", longDescription: "Probiotic contém bilhões de CFUs para equilibrar a flora intestinal.", image: probioticImg, price: "10.000 Kz" },
    { id: 44, name: "Aloe Vera", category: "Digestão", description: "Aloe vera para saúde digestiva.", longDescription: "Aloe Vera ajuda a acalmar o sistema digestivo e promover a saúde intestinal.", image: aloeVeraImg, price: "10.000 Kz" },
    { id: 45, name: "Apple Cider", category: "Digestão", description: "Vinagre de maçã para digestão.", longDescription: "Apple Cider Vinegar ajuda na digestão, metabolismo e controle de açúcar no sangue.", image: appleCiderImg, price: "10.000 Kz" },
    { id: 77, name: "ZAIN BAWASIR", category: "Digestão", description: "Tratamento eficaz para hemorroidas.", longDescription: "ZAIN BAWASIR, também conhecido como Zain Hemorroidas, é um fármaco eficaz para o tratamento de hemorroidas.", image: zainBawasirImg, price: "10.000 Kz" },
    
    // Beleza
    { id: 46, name: "GlowSkin", category: "Beleza", description: "Suplemento para pele, cabelo e unhas saudáveis.", longDescription: "GlowSkin oferece colágeno, biotina e vitaminas para beleza de dentro para fora.", image: glowSkinImg, price: "10.000 Kz" },
    { id: 47, name: "Collagen", category: "Beleza", description: "Colágeno para pele firme e jovem.", longDescription: "Collagen ajuda a manter a elasticidade da pele e reduzir rugas.", image: collagenImg, price: "10.000 Kz" },
    { id: 48, name: "Biotin", category: "Beleza", description: "Biotina para cabelo e unhas fortes.", longDescription: "Biotin fortalece cabelos e unhas, promovendo crescimento saudável.", image: biotinImg, price: "10.000 Kz" },
    { id: 49, name: "Anti-Aging", category: "Beleza", description: "Suplemento anti-envelhecimento.", longDescription: "Anti-Aging contém antioxidantes poderosos para combater os sinais do envelhecimento.", image: antiAgingImg, price: "10.000 Kz" },
    { id: 50, name: "Hair Growth", category: "Beleza", description: "Suplemento para crescimento capilar.", longDescription: "Hair Growth estimula o crescimento de cabelos fortes e saudáveis.", image: hairGrowthImg, price: "10.000 Kz" },
    
    // Sono & Stress
    { id: 51, name: "Stress Relief", category: "Sono & Stress", description: "Alívio natural do stress e ansiedade.", longDescription: "Stress Relief ajuda a reduzir o stress e promover calma e relaxamento.", image: stressReliefImg, price: "10.000 Kz" },
    { id: 52, name: "Sleep Aid", category: "Sono & Stress", description: "Suporte natural para sono reparador.", longDescription: "Sleep Aid ajuda a melhorar a qualidade do sono de forma natural.", image: sleepAidImg, price: "10.000 Kz" },
    { id: 53, name: "Ashwagandha", category: "Sono & Stress", description: "Adaptógeno para stress e ansiedade.", longDescription: "Ashwagandha é um adaptógeno que ajuda o corpo a lidar com o stress.", image: ashwagandhaImg, price: "10.000 Kz" },
    { id: 54, name: "Valerian Root", category: "Sono & Stress", description: "Raiz de valeriana para sono natural.", longDescription: "Valerian Root é um suplemento natural que promove sono tranquilo.", image: valerianRootImg, price: "10.000 Kz" },
    { id: 55, name: "Melatonin", category: "Sono & Stress", description: "Melatonina para regular o sono.", longDescription: "Melatonin ajuda a regular o ciclo natural de sono-vigília.", image: melatoninImg, price: "10.000 Kz" },
    { id: 56, name: "Magnesium", category: "Sono & Stress", description: "Magnésio para relaxamento muscular.", longDescription: "Magnesium ajuda no relaxamento muscular, sono e função nervosa.", image: magnesiumImg, price: "10.000 Kz" },
    
    // Articulações
    { id: 57, name: "Joint Relief", category: "Articulações", description: "Alívio natural para dores articulares.", longDescription: "Joint Relief ajuda a aliviar dores e inflamações nas articulações.", image: jointReliefImg, price: "10.000 Kz" },
    { id: 58, name: "Glucosamine", category: "Articulações", description: "Glucosamina para cartilagem saudável.", longDescription: "Glucosamine ajuda a manter a saúde das articulações e cartilagens.", image: glucosamineImg, price: "10.000 Kz" },
    { id: 59, name: "Ginger Turmeric", category: "Articulações", description: "Gengibre e açafrão anti-inflamatório.", longDescription: "Ginger Turmeric combina dois poderosos anti-inflamatórios naturais.", image: gingerTurmericImg, price: "10.000 Kz" },
    { id: 75, name: "ZAIN Dawa", category: "Articulações", description: "Fármaco para dores constantes de corpo.", longDescription: "ZAIN Dawa é um fármaco para pessoas que sofrem dor constante de corpo como: Dor de joelho, Dor de coluna, Dor do peito, Coluna transparente, Quentura na coluna.", image: zainDawaImg, price: "10.000 Kz" },
    
    // Peso & Metabolismo
    { id: 60, name: "Weight Loss", category: "Peso & Metabolismo", description: "Suporte natural para perda de peso.", longDescription: "Weight Loss ajuda a acelerar o metabolismo e queimar gordura.", image: weightLossImg, price: "10.000 Kz" },
    { id: 61, name: "Green Tea", category: "Peso & Metabolismo", description: "Chá verde para metabolismo.", longDescription: "Green Tea Extract acelera o metabolismo e ajuda na perda de peso.", image: greenTeaImg, price: "10.000 Kz" },
    { id: 62, name: "Diabetes Control", category: "Peso & Metabolismo", description: "Suporte natural para açúcar no sangue.", longDescription: "Diabetes Control ajuda a manter níveis saudáveis de glicose no sangue.", image: diabetesControlImg, price: "10.000 Kz" },
    { id: 78, name: "BODY SLIM", category: "Peso & Metabolismo", description: "Fármaco eficaz para redução de peso corporal.", longDescription: "BODY SLIM é um fármaco eficaz para quem procura seu bem-estar com: Reduzir o peso do corpo de forma saudável e natural.", image: bodySlimImg, price: "10.000 Kz" },
    
    // Desintoxicação
    { id: 63, name: "Liver Detox", category: "Desintoxicação", description: "Desintoxicação natural do fígado.", longDescription: "Liver Detox ajuda a limpar e proteger o fígado de toxinas.", image: liverDetoxImg, price: "10.000 Kz" },
    { id: 64, name: "Kidney Care", category: "Desintoxicação", description: "Suporte natural para saúde renal.", longDescription: "Kidney Care ajuda a manter os rins saudáveis e funcionando bem.", image: kidneyCareImg, price: "10.000 Kz" },
    { id: 65, name: "Body Detox", category: "Desintoxicação", description: "Limpeza corporal completa.", longDescription: "Body Detox ajuda a eliminar toxinas do corpo de forma natural.", image: bodyDetoxImg, price: "10.000 Kz" },
    { id: 66, name: "Milk Thistle", category: "Desintoxicação", description: "Cardo mariano para saúde hepática.", longDescription: "Milk Thistle protege e regenera as células do fígado.", image: milkThistleImg, price: "10.000 Kz" },
    { id: 67, name: "Spirulina", category: "Desintoxicação", description: "Superalimento verde desintoxicante.", longDescription: "Spirulina é rica em nutrientes e ajuda a desintoxicar o corpo.", image: spirulinaImg, price: "10.000 Kz" },
    
    // Vitaminas & Minerais
    { id: 68, name: "Multivitamin", category: "Vitaminas & Minerais", description: "Multivitamínico completo diário.", longDescription: "Multivitamin fornece todas as vitaminas e minerais essenciais para o dia a dia.", image: multivitaminImg, price: "10.000 Kz" },
    { id: 69, name: "Vitamin D", category: "Vitaminas & Minerais", description: "Vitamina D para ossos e imunidade.", longDescription: "Vitamin D é essencial para saúde óssea e sistema imunológico.", image: vitaminDImg, price: "10.000 Kz" },
    { id: 70, name: "Iron Supplement", category: "Vitaminas & Minerais", description: "Suplemento de ferro para anemia.", longDescription: "Iron Supplement ajuda a combater anemia e aumentar energia.", image: ironSupplementImg, price: "10.000 Kz" },
    { id: 71, name: "Calcium D", category: "Vitaminas & Minerais", description: "Cálcio e vitamina D para ossos.", longDescription: "Calcium D fortalece ossos e previne osteoporose.", image: calciumDImg, price: "10.000 Kz" },
    { id: 72, name: "Bone Health", category: "Vitaminas & Minerais", description: "Suplemento completo para ossos.", longDescription: "Bone Health contém cálcio, vitamina D e magnésio para ossos fortes.", image: boneHealthImg, price: "10.000 Kz" },
    { id: 73, name: "Eye Health", category: "Vitaminas & Minerais", description: "Luteína para saúde ocular.", longDescription: "Eye Health contém luteína e zeaxantina para proteger a visão.", image: eyeHealthImg, price: "10.000 Kz" },
    { id: 74, name: "Moringa", category: "Vitaminas & Minerais", description: "Superalimento rico em nutrientes.", longDescription: "Moringa é um superalimento com vitaminas, minerais e antioxidantes.", image: moringaImg, price: "10.000 Kz" },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    
    const numericPrice = getNumericPrice(product.price);
    const priceRange = priceRanges.find(r => r.label === selectedPriceRange);
    const matchesPrice = selectedPriceRange === "Todos" || 
      (priceRange && numericPrice >= priceRange.min && numericPrice <= priceRange.max);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });


  const handleWhatsAppOrder = (productName: string) => {
    const message = `Olá! Gostaria de saber mais sobre o produto: ${productName}`;
    const url = `https://wa.me/244973003455?text=${encodeURIComponent(message)}`;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <WhatsAppButton />
      
      <main className="flex-1 pt-[88px] md:pt-[104px]">
        {/* Hero Section */}
        <section className="hero-gradient text-primary-foreground py-8 md:py-16">
          <div className="container-custom">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-6 animate-fade-in">
              Produtos Naturais
            </h1>
            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-3xl animate-fade-in mb-4">
              {products.length} suplementos e produtos naturais de alta qualidade
            </p>
            <Link to="/precario">
              <Button variant="secondary" size="sm" className="animate-fade-in md:text-base md:px-6 md:py-3">
                <TableIcon className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                Ver Tabela de Preçário
              </Button>
            </Link>
          </div>
        </section>


        {/* Filters */}
        <section className="py-4 md:py-6 bg-muted/30 sticky top-[88px] md:top-[104px] z-40 border-b border-border">
          <div className="container-custom space-y-3">
            {/* Search Input */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Pesquisar produtos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 md:pl-10 h-10 text-sm"
              />
            </div>
            
            {/* Price Filter - Horizontal Scroll */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 shrink-0">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs md:text-sm font-medium text-muted-foreground whitespace-nowrap">Preço:</span>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide -mx-1 px-1">
                {priceRanges.map((range) => (
                  <Button
                    key={range.label}
                    variant={selectedPriceRange === range.label ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedPriceRange(range.label)}
                    className="shrink-0 text-xs md:text-sm h-8 px-3"
                  >
                    {range.label}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Categories - Horizontal Scroll */}
            <div className="overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
              <div className="flex gap-2 w-max md:w-auto md:flex-wrap">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat)}
                    className="shrink-0 text-xs md:text-sm h-8 px-3 whitespace-nowrap"
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-spacing">
          <div className="container-custom">
            <p className="text-muted-foreground mb-6">{filteredProducts.length} produtos encontrados</p>
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground">Nenhum produto encontrado.</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-card rounded-lg overflow-hidden card-hover">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-6">
                      <span className="text-xs font-medium text-primary">{product.category}</span>
                      <h3 className="text-xl font-bold mt-2 mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="flex-1"
                          onClick={() => setSelectedProduct(product)}
                        >
                          <Info className="h-4 w-4 mr-2" />
                          Detalhes
                        </Button>
                        <Button 
                          size="sm" 
                          className="flex-1"
                          onClick={() => handleWhatsAppOrder(product.name)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Encomendar
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Product Details Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProduct?.name}</DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              {selectedProduct?.category}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <img 
              src={selectedProduct?.image} 
              alt={selectedProduct?.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-muted-foreground leading-relaxed">
              {selectedProduct?.longDescription}
            </p>
            <div className="flex items-center justify-between pt-4 border-t">
              <span className="text-3xl font-bold text-primary">{selectedProduct?.price}</span>
              <Button onClick={() => selectedProduct && handleWhatsAppOrder(selectedProduct.name)}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Encomendar via WhatsApp
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Produtos;
