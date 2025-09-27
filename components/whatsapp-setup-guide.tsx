import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function WhatsAppSetupGuide() {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          📱 Configuração do WhatsApp
          <Badge variant="secondary">Integração Twilio</Badge>
        </CardTitle>
        <CardDescription>
          Configure notificações automáticas via WhatsApp para receber cópias das solicitações
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">1. Conta Twilio</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Crie uma conta em twilio.com</li>
              <li>• Acesse o Console Dashboard</li>
              <li>• Copie Account SID e Auth Token</li>
              <li>• Configure WhatsApp Sandbox ou número oficial</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">2. WhatsApp Sandbox</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Acesse WhatsApp Sandbox no Twilio</li>
              <li>• Envie mensagem para o número sandbox</li>
              <li>• Use o código fornecido para ativar</li>
              <li>• Configure seu número de destino</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-semibold text-lg mb-3">3. Variáveis de Ambiente</h3>
          <div className="bg-muted p-4 rounded font-mono text-sm space-y-1">
            <div>TWILIO_ACCOUNT_SID=seu_account_sid_aqui</div>
            <div>TWILIO_AUTH_TOKEN=seu_auth_token_aqui</div>
            <div>TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886</div>
            <div>WHATSAPP_DESTINATION=whatsapp:+5511999999999</div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Substitua o número de destino pelo seu WhatsApp com código do país (+55 para Brasil)
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h4 className="font-semibold text-blue-800 mb-2">📱 Como Funciona</h4>
          <p className="text-sm text-blue-700">
            Cada nova solicitação enviará automaticamente uma mensagem formatada para o WhatsApp configurado,
            substituindo o email secundário por uma notificação instantânea.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
