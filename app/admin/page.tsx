import SheetsSetupGuide from "@/components/sheets-setup-guide"
import WhatsAppSetupGuide from "@/components/whatsapp-setup-guide"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Painel Administrativo - Ecred</h1>
          <p className="text-muted-foreground">Configure e gerencie o sistema de cadastros</p>
        </div>

        <div className="space-y-8">
          <SheetsSetupGuide />
          <WhatsAppSetupGuide />
        </div>
      </div>
    </div>
  )
}
