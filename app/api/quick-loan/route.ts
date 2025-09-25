import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json()

    const emailContent = `
      Nova Solicitação de Empréstimo - Ecred
      
      DADOS DO CLIENTE:
      Nome: ${formData.nome}
      Telefone: ${formData.telefone}
      CPF/CNPJ: ${formData.documento}
      Valor Solicitado: R$ ${Number.parseInt(formData.valorEmprestimo).toLocaleString("pt-BR")}
      Situação: ${formData.temRestricoes ? "Com Restrições" : "Sem Restrições"}
      
      Data da Solicitação: ${new Date().toLocaleString("pt-BR")}
      
      ---
      Solicitação enviada através do formulário rápido do site da Ecred.
    `

    console.log("Nova solicitação de empréstimo:", {
      ...formData,
      timestamp: new Date().toISOString(),
      emailPrincipal: "ecred@solucoesfinanceirasecred.com",
      emailCopia: "josimaryrodrigues2@gmail.com", // Nos bastidores
    })

    // In a real application with Resend or similar service:
    // await resend.emails.send({
    //   from: 'noreply@solucoesfinanceirasecred.com',
    //   to: ['ecred@solucoesfinanceirasecred.com'],
    //   bcc: ['josimaryrodrigues2@gmail.com'], // Cópia nos bastidores
    //   subject: 'Nova Solicitação de Empréstimo - Ecred',
    //   html: emailContent
    // })

    return NextResponse.json({
      success: true,
      message: "Solicitação enviada com sucesso! Entraremos em contato em breve.",
    })
  } catch (error) {
    console.error("Erro ao processar solicitação:", error)
    return NextResponse.json({ success: false, message: "Erro interno do servidor" }, { status: 500 })
  }
}
