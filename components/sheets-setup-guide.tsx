import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SheetsSetupGuide() {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          📊 Configuração do Google Sheets
          <Badge variant="secondary">Guia de Setup</Badge>
        </CardTitle>
        <CardDescription>
          Configure a integração com Google Sheets para armazenar automaticamente os cadastros
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">1. Criar Planilha</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Acesse Google Sheets e crie uma nova planilha</li>
              <li>• Nomeie a aba como "Cadastros"</li>
              <li>• Adicione os cabeçalhos na primeira linha:</li>
            </ul>
            <div className="bg-muted p-3 rounded text-xs font-mono">
              Data/Hora | Nome | Telefone | CPF/CNPJ | Valor | Situação | Status | Origem
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">2. Configurar API</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Acesse Google Cloud Console</li>
              <li>• Ative a Google Sheets API</li>
              <li>• Crie uma API Key</li>
              <li>• Torne a planilha pública (visualização)</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-semibold text-lg mb-3">3. Variáveis de Ambiente</h3>
          <div className="bg-muted p-4 rounded font-mono text-sm">
            <div>GOOGLE_SHEET_ID=seu_sheet_id_aqui</div>
            <div>GOOGLE_SHEETS_API_KEY=sua_api_key_aqui</div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            O Sheet ID está na URL da planilha: docs.google.com/spreadsheets/d/<strong>SHEET_ID</strong>/edit
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h4 className="font-semibold text-green-800 mb-2">✅ Status Atual</h4>
          <p className="text-sm text-green-700">
            Sistema configurado com Resend API, WhatsApp via Twilio e pronto para Google Sheets. Email principal +
            WhatsApp + Planilha para máxima organização.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
