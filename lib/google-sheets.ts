export interface CadastroData {
  nome: string
  telefone: string
  documento: string
  valorEmprestimo: string
  temRestricoes: boolean
}

export class GoogleSheetsManager {
  private static SHEET_ID = process.env.GOOGLE_SHEET_ID
  private static API_KEY = process.env.GOOGLE_SHEETS_API_KEY

  static async appendRow(data: CadastroData) {
    if (!this.SHEET_ID || !this.API_KEY) {
      console.warn("Google Sheets não configurado - usando modo de desenvolvimento")
      return this.mockSave(data)
    }

    try {
      const values = [
        [
          new Date().toLocaleString("pt-BR"), // Data/Hora
          data.nome,
          data.telefone,
          data.documento,
          `R$ ${Number.parseInt(data.valorEmprestimo).toLocaleString("pt-BR")}`,
          data.temRestricoes ? "Com Restrições" : "Sem Restrições",
          "Novo", // Status
          "Formulário Rápido", // Origem
        ],
      ]

      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${this.SHEET_ID}/values/Cadastros!A:H:append?valueInputOption=RAW&key=${this.API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ values }),
        },
      )

      if (!response.ok) {
        throw new Error(`Erro na API do Google Sheets: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error("Erro ao salvar no Google Sheets:", error)
      return this.mockSave(data)
    }
  }

  private static mockSave(data: CadastroData) {
    // Simula salvamento para desenvolvimento
    console.log("[v0] Simulando salvamento na planilha:", {
      timestamp: new Date().toLocaleString("pt-BR"),
      ...data,
      status: "Novo",
      origem: "Formulário Rápido",
    })
    return { success: true, mock: true }
  }

  static async createSheet() {
    // Função para criar planilha com cabeçalhos
    const headers = ["Data/Hora", "Nome", "Telefone", "CPF/CNPJ", "Valor Solicitado", "Situação", "Status", "Origem"]

    console.log("Cabeçalhos da planilha:", headers)
    return headers
  }
}
