import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Extract form fields
    const data = {
      // Personal Information
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      birthDate: formData.get("birthDate") as string,
      maritalStatus: formData.get("maritalStatus") as string,

      // Address
      zipCode: formData.get("zipCode") as string,
      address: formData.get("address") as string,
      number: formData.get("number") as string,
      complement: formData.get("complement") as string,
      neighborhood: formData.get("neighborhood") as string,
      city: formData.get("city") as string,
      state: formData.get("state") as string,

      // Loan Information
      loanAmount: formData.get("loanAmount") as string,
      loanPurpose: formData.get("loanPurpose") as string,
      monthlyIncome: formData.get("monthlyIncome") as string,

      // Employment
      employmentStatus: formData.get("employmentStatus") as string,
      companyName: formData.get("companyName") as string,
      workTime: formData.get("workTime") as string,

      // Document
      documentType: formData.get("documentType") as string,
      documentNumber: formData.get("documentNumber") as string,
      hasRestrictions: formData.get("hasRestrictions") as string,
    }

    const documentFile = formData.get("documentFile") as File

    // Create email content
    const emailContent = createEmailContent(data, documentFile)

    // Send emails to both recipients
    const emailPromises = [
      sendEmail("solucoesfinanceirasecred.com", "Nova Solicitação de Empréstimo - Ecred", emailContent, documentFile),
      sendEmail("josimaryrodrigues2@gmail.com", "Nova Solicitação de Empréstimo - Ecred", emailContent, documentFile),
    ]

    await Promise.all(emailPromises)

    return NextResponse.json({
      success: true,
      message: "Solicitação enviada com sucesso!",
    })
  } catch (error) {
    console.error("Error processing loan application:", error)
    return NextResponse.json(
      { success: false, message: "Erro ao processar solicitação. Tente novamente." },
      { status: 500 },
    )
  }
}

function createEmailContent(data: any, documentFile: File | null): string {
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Nova Solicitação de Empréstimo - Ecred</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2d5a27; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .section { margin-bottom: 20px; }
        .section h3 { color: #2d5a27; border-bottom: 2px solid #2d5a27; padding-bottom: 5px; }
        .field { margin-bottom: 10px; }
        .field strong { display: inline-block; width: 150px; }
        .footer { background: #2d5a27; color: white; padding: 15px; text-align: center; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🛡️ Ecred - Nova Solicitação de Empréstimo</h1>
        </div>
        
        <div class="content">
            <div class="section">
                <h3>📋 Dados Pessoais</h3>
                <div class="field"><strong>Nome:</strong> ${data.fullName}</div>
                <div class="field"><strong>E-mail:</strong> ${data.email}</div>
                <div class="field"><strong>Telefone:</strong> ${data.phone}</div>
                <div class="field"><strong>Data Nascimento:</strong> ${data.birthDate}</div>
                <div class="field"><strong>Estado Civil:</strong> ${data.maritalStatus}</div>
            </div>

            <div class="section">
                <h3>📍 Endereço</h3>
                <div class="field"><strong>CEP:</strong> ${data.zipCode}</div>
                <div class="field"><strong>Endereço:</strong> ${data.address}, ${data.number}</div>
                <div class="field"><strong>Complemento:</strong> ${data.complement || "N/A"}</div>
                <div class="field"><strong>Bairro:</strong> ${data.neighborhood}</div>
                <div class="field"><strong>Cidade:</strong> ${data.city}</div>
                <div class="field"><strong>Estado:</strong> ${data.state}</div>
            </div>

            <div class="section">
                <h3>💰 Informações do Empréstimo</h3>
                <div class="field"><strong>Valor Solicitado:</strong> ${data.loanAmount}</div>
                <div class="field"><strong>Renda Mensal:</strong> ${data.monthlyIncome}</div>
                <div class="field"><strong>Finalidade:</strong> ${data.loanPurpose}</div>
            </div>

            <div class="section">
                <h3>💼 Informações Profissionais</h3>
                <div class="field"><strong>Situação:</strong> ${data.employmentStatus}</div>
                <div class="field"><strong>Empresa:</strong> ${data.companyName}</div>
                <div class="field"><strong>Tempo Trabalho:</strong> ${data.workTime}</div>
            </div>

            <div class="section">
                <h3>📄 Documentação</h3>
                <div class="field"><strong>Tipo Documento:</strong> ${data.documentType.toUpperCase()}</div>
                <div class="field"><strong>Número:</strong> ${data.documentNumber}</div>
                <div class="field"><strong>Possui Restrições:</strong> ${data.hasRestrictions}</div>
                <div class="field"><strong>Documento Anexo:</strong> ${documentFile ? documentFile.name : "Não enviado"}</div>
            </div>
        </div>

        <div class="footer">
            <p><strong>Ecred - Crédito ao seu alcance, mesmo com restrições</strong></p>
            <p>Alameda dos Quinimuras, 187 - Planalto Paulista - SP</p>
            <p>CNPJ: 62.173.620/0001-80</p>
        </div>
    </div>
</body>
</html>
  `
}

async function sendEmail(to: string, subject: string, htmlContent: string, attachment?: File): Promise<void> {
  // In a real implementation, you would use a service like:
  // - Resend (recommended for Vercel)
  // - SendGrid
  // - Nodemailer with SMTP
  // - AWS SES

  // Example with Resend (you would need to install and configure):
  /*
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  const attachments = attachment ? [{
    filename: attachment.name,
    content: Buffer.from(await attachment.arrayBuffer())
  }] : []

  await resend.emails.send({
    from: 'noreply@ecred.com',
    to: [to],
    subject: subject,
    html: htmlContent,
    attachments: attachments
  })
  */

  // For now, we'll simulate the email sending
  console.log(`📧 Email would be sent to: ${to}`)
  console.log(`📧 Subject: ${subject}`)
  console.log(`📧 Attachment: ${attachment?.name || "None"}`)

  // Simulate async operation
  await new Promise((resolve) => setTimeout(resolve, 1000))
}
