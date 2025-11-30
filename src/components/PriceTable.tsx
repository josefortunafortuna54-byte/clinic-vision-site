import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Product {
  code: string;
  description: string;
  unitPrice: string;
  bulkPrice: string;
  retailPrice: string;
}

const PriceTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const products: Product[] = [
    { code: "ZN0001", description: "MUKIKU", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0002", description: "MAXIMIZER", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0003", description: "PROSTATE", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0004", description: "BLOOD SUGAR", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0005", description: "ZAIN WOMAN HORMONE IMBALANCE", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0006", description: "IMBALANCE", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0007", description: "ZAIN HEMORROIDES", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0008", description: "STROKE", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0009", description: "MAUMIVU", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0010", description: "UTI", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0011", description: "BUCHA", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0012", description: "MED FERT", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0013", description: "ZAIN THAUMU", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0014", description: "NASAL CURE", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0015", description: "CIGARRO", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0016", description: "GO BIG", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0017", description: "ARTRITE", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0018", description: "JOINT PAIN", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0019", description: "SPERM POWER", unitPrice: "18 000,00 Kz", bulkPrice: "15 000,00 Kz", retailPrice: "20 000,00 Kz" },
    { code: "ZN0020", description: "CD4", unitPrice: "18 000,00 Kz", bulkPrice: "15 000,00 Kz", retailPrice: "20 000,00 Kz" },
    { code: "ZN0021", description: "AFYA UBONGO", unitPrice: "18 000,00 Kz", bulkPrice: "15 000,00 Kz", retailPrice: "20 000,00 Kz" },
    { code: "ZN0022", description: "OLEO DE BABA LAO", unitPrice: "3 000,00 Kz", bulkPrice: "2 000,00 Kz", retailPrice: "5 000,00 Kz" },
    { code: "ZN0023", description: "ZAIN SYRUP", unitPrice: "3 000,00 Kz", bulkPrice: "2 000,00 Kz", retailPrice: "5 000,00 Kz" },
    { code: "ZN0024", description: "YA BONGO", unitPrice: "18 000,00 Kz", bulkPrice: "15 000,00 Kz", retailPrice: "20 000,00 Kz" },
    { code: "ZN0025", description: "BODY SLIMMING", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0026", description: "HEPATITES", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0027", description: "LOVE KINGDON", unitPrice: "18 000,00 Kz", bulkPrice: "12 000,00 Kz", retailPrice: "15 000,00 Kz" },
    { code: "ZN0028", description: "ALOE VERA", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0029", description: "STOMACH", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0030", description: "ULCERA", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0031", description: "PID", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0032", description: "MWENDO KASI", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0033", description: "BABA PLUS", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0034", description: "COLD SYRUP", unitPrice: "3 000,00 Kz", bulkPrice: "2 000,00 Kz", retailPrice: "5 000,00 Kz" },
    { code: "ZN0035", description: "CANGURU", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0036", description: "NONI", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0037", description: "Q-10", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0038", description: "SINKO", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0039", description: "ALOI", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0040", description: "ESPIRULINA", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0041", description: "KIDNG", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0042", description: "CELEBRO", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0043", description: "VITAMINAS", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0044", description: "PROPOLIS", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0045", description: "BALSAMO", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0046", description: "LIVINS", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0047", description: "FEINLY", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0048", description: "PROSTIO", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0049", description: "OMEGA 3", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0050", description: "OLHO DE COCO", unitPrice: "15 000,00 Kz", bulkPrice: "18 000,00 Kz", retailPrice: "20 000,00 Kz" },
    { code: "ZN0051", description: "GINOVERA", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0052", description: "BABALAO", unitPrice: "18 000,00 Kz", bulkPrice: "15 000,00 Kz", retailPrice: "20 000,00 Kz" },
    { code: "ZN0053", description: "ZAIN 77", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0054", description: "MSADA", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0055", description: "RAIZ", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0056", description: "HERNIA", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0057", description: "UTI PO", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
    { code: "ZN0058", description: "MWENDO MDUNDO", unitPrice: "10 000,00 Kz", bulkPrice: "7 000,00 Kz", retailPrice: "12 000,00 Kz" },
  ];

  const filteredProducts = products.filter(product =>
    product.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleWhatsAppOrder = (productName: string) => {
    const message = `Olá! Gostaria de encomendar o produto: ${productName}`;
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
    <div className="w-full space-y-6">
      <Card className="p-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">Tabela de Preços</h2>
          <p className="text-muted-foreground mb-4">Lista completa de produtos e valores</p>
          
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Pesquisar por código ou produto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="rounded-lg border overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/10">
                  <TableHead className="font-bold">Código</TableHead>
                  <TableHead className="font-bold">Produto</TableHead>
                  <TableHead className="font-bold text-right">Preço Unitário</TableHead>
                  <TableHead className="font-bold text-right">Qtd. 10+ unidades</TableHead>
                  <TableHead className="font-bold text-right">Preço de Venda</TableHead>
                  <TableHead className="font-bold text-center">Ação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.code} className="hover:bg-muted/50">
                    <TableCell className="font-medium">{product.code}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-md bg-muted flex items-center justify-center text-xs font-semibold">
                          {product.description.slice(0, 2)}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold">{product.description}</span>
                          <span className="text-xs text-muted-foreground">Suplemento natural</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">{product.unitPrice}</TableCell>
                    <TableCell className="text-right text-accent font-semibold">{product.bulkPrice}</TableCell>
                    <TableCell className="text-right text-primary font-bold">{product.retailPrice}</TableCell>
                    <TableCell className="text-center">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleWhatsAppOrder(product.description)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Encomendar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            Nenhum produto encontrado.
          </div>
        )}

        <div className="mt-6 p-4 bg-muted/30 rounded-lg">
          <h3 className="font-semibold mb-2">Informação sobre Preços:</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• <strong>Preço Unitário:</strong> Preço para compra de 1-9 unidades</li>
            <li>• <strong>Qtd. 10+ unidades:</strong> Preço especial para compras acima de 10 unidades</li>
            <li>• <strong>Preço de Venda:</strong> Preço sugerido ao público</li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default PriceTable;
