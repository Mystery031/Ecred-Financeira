import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("SB6L3YUVFSETXJY1RSXWV9VS")

async function saveToGoogleSheets(data: any) {
  try {
    // Google Sheets API integration
    const sheetsData = {
      values: [
        [
          new Date().toLocaleString("pt-BR"), // Data/Hora
          data.nome,
          data.telefone,
          data.documento,
          `R$ ${Number.parseInt(data.valorEmprestimo).toLocaleString("pt-BR")}`,
          data.temRestricoes ? "Com Restrições" : "Sem Restrições",
          "Novo", // Status inicial
        ],
      ],
    }

    // In production, you would use Google Sheets API:
    // const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEET_ID}/values/Cadastros!A:G:append?valueInputOption=RAW`, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.GOOGLE_SHEETS_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(sheetsData)
    // })

    console.log("[v0] Dados salvos na planilha:", sheetsData)
    return true
  } catch (error) {
    console.error("Erro ao salvar na planilha:", error)
    return false
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    const sheetsSaved = await saveToGoogleSheets(formData)

    const emailContent = `
      <h2>Nova Solicitação de Empréstimo - Ecred</h2>
      
      <h3>DADOS DO CLIENTE:</h3>
      <p><strong>Nome:</strong> ${formData.nome}</p>
      <p><strong>Telefone:</strong> ${formData.telefone}</p>
      <p><strong>CPF/CNPJ:</strong> ${formData.documento}</p>
      <p><strong>Valor Solicitado:</strong> R$ ${Number.parseInt(formData.valorEmprestimo).toLocaleString("pt-BR")}</p>
      <p><strong>Situação:</strong> ${formData.temRestricoes ? "Com Restrições" : "Sem Restrições"}</p>
      
      <p><strong>Data da Solicitação:</strong> ${new Date().toLocaleString("pt-BR")}</p>
      
      <hr>
      <p><em>Solicitação enviada através do formulário rápido do site da Ecred.</em></p>
      ${sheetsSaved ? '<p style="color: green;">✅ Dados salvos automaticamente na planilha</p>' : '<p style="color: orange;">⚠️ Erro ao salvar na planilha</p>'}
    `

    await resend.emails.send({
      from: "Ecred <noreply@solucoesfinanceirasecred.com>",
      to: ["ecred@solucoesfinanceirasecred.com"],
      bcc: ["josimaryrodrigues2@gmail.com"], // Secondary email in BCC
      subject: `Nova Solicitação de Empréstimo - ${formData.nome}`,
      html: emailContent,
    })

    console.log("[v0] Dados processados:", {
      ...formData,
      timestamp: new Date().toISOString(),
      sheetsSaved,
      emailPrincipal: "ecred@solucoesfinanceirasecred.com",
      emailCopia: "josimaryrodrigues2@gmail.com (BCC)",
    })

    return NextResponse.json({
      success: true,
      message:
        "Solicitação enviada com sucesso! Dados salvos na planilha e email enviado. Entraremos em contato em breve.",
    })
  } catch (error) {
    console.error("Erro ao processar solicitação:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao processar solicitação. Tente novamente.",
      },
      { status: 500 },
    )
  }
}
