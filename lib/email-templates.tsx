export interface LoanApplicationData {
  fullName: string
  email: string
  phone: string
  birthDate: string
  maritalStatus: string
  zipCode: string
  address: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
  loanAmount: string
  loanPurpose: string
  monthlyIncome: string
  employmentStatus: string
  companyName: string
  workTime: string
  documentType: string
  documentNumber: string
  hasRestrictions: string
}

export function createConfirmationEmail(data: LoanApplicationData): string {
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Confirmação de Solicitação - Ecred</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2d5a27; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .highlight { background: #e8f5e8; padding: 15px; border-left: 4px solid #2d5a27; margin: 20px 0; }
        .footer { background: #2d5a27; color: white; padding: 15px; text-align: center; font-size: 12px; }
        .button { background: #2d5a27; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 10px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🛡️ Ecred</h1>
            <h2>Solicitação Recebida com Sucesso!</h2>
        </div>
        
        <div class="content">
            <p>Olá <strong>${data.fullName}</strong>,</p>
            
            <p>Recebemos sua solicitação de empréstimo no valor de <strong>${data.loanAmount}</strong> e nossa equipe já iniciou a análise.</p>
            
            <div class="highlight">
                <h3>📋 Próximos Passos:</h3>
                <ul>
                    <li>✅ Solicitação recebida e registrada</li>
                    <li>🔍 Análise em andamento (até 24 horas úteis)</li>
                    <li>📞 Entraremos em contato via telefone: ${data.phone}</li>
                    <li>📧 Atualizações serão enviadas para: ${data.email}</li>
                </ul>
            </div>
            
            <p><strong>Informações da sua solicitação:</strong></p>
            <ul>
                <li><strong>Valor solicitado:</strong> ${data.loanAmount}</li>
                <li><strong>Finalidade:</strong> ${data.loanPurpose}</li>
                <li><strong>Documento:</strong> ${data.documentType.toUpperCase()} - ${data.documentNumber}</li>
                <li><strong>Possui restrições:</strong> ${data.hasRestrictions}</li>
            </ul>
            
            <p>Se tiver alguma dúvida, entre em contato conosco:</p>
            <ul>
                <li>📧 solucoesfinanceirasecred.com</li>
                <li>📧 josimaryrodrigues2@gmail.com</li>
            </ul>
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

export function createInternalNotificationEmail(data: LoanApplicationData, documentFileName?: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>🚨 NOVA SOLICITAÇÃO DE EMPRÉSTIMO - ECRED</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { background: #dc2626; color: white; padding: 20px; text-align: center; }
        .urgent { background: #fef2f2; border: 2px solid #dc2626; padding: 15px; margin: 20px 0; border-radius: 5px; }
        .content { background: #f9f9f9; padding: 20px; }
        .section { margin-bottom: 25px; background: white; padding: 15px; border-radius: 5px; }
        .section h3 { color: #2d5a27; border-bottom: 2px solid #2d5a27; padding-bottom: 5px; margin-top: 0; }
        .field { margin-bottom: 8px; }
        .field strong { display: inline-block; width: 180px; color: #1f2937; }
        .highlight { background: #e8f5e8; padding: 10px; border-radius: 3px; }
        .footer { background: #2d5a27; color: white; padding: 15px; text-align: center; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚨 NOVA SOLICITAÇÃO DE EMPRÉSTIMO</h1>
            <h2>Ecred - Ação Necessária</h2>
        </div>
        
        <div class="urgent">
            <h3>⚡ SOLICITAÇÃO URGENTE - ANÁLISE NECESSÁRIA</h3>
            <p><strong>Cliente:</strong> ${data.fullName}</p>
            <p><strong>Valor:</strong> ${data.loanAmount}</p>
            <p><strong>Restrições:</strong> ${data.hasRestrictions}</p>
            <p><strong>Data/Hora:</strong> ${new Date().toLocaleString("pt-BR")}</p>
        </div>
        
        <div class="content">
            <div class="section">
                <h3>👤 Dados Pessoais</h3>
                <div class="field"><strong>Nome Completo:</strong> ${data.fullName}</div>
                <div class="field"><strong>E-mail:</strong> ${data.email}</div>
                <div class="field"><strong>Telefone:</strong> ${data.phone}</div>
                <div class="field"><strong>Data Nascimento:</strong> ${new Date(data.birthDate).toLocaleDateString("pt-BR")}</div>
                <div class="field"><strong>Estado Civil:</strong> ${data.maritalStatus}</div>
            </div>

            <div class="section">
                <h3>📍 Endereço Completo</h3>
                <div class="field"><strong>CEP:</strong> ${data.zipCode}</div>
                <div class="field"><strong>Endereço:</strong> ${data.address}, ${data.number}</div>
                <div class="field"><strong>Complemento:</strong> ${data.complement || "N/A"}</div>
                <div class="field"><strong>Bairro:</strong> ${data.neighborhood}</div>
                <div class="field"><strong>Cidade/Estado:</strong> ${data.city} - ${data.state}</div>
            </div>

            <div class="section">
                <h3>💰 Detalhes do Empréstimo</h3>
                <div class="highlight">
                    <div class="field"><strong>💵 Valor Solicitado:</strong> ${data.loanAmount}</div>
                    <div class="field"><strong>💼 Renda Mensal:</strong> ${data.monthlyIncome}</div>
                </div>
                <div class="field"><strong>Finalidade:</strong> ${data.loanPurpose}</div>
            </div>

            <div class="section">
                <h3>🏢 Informações Profissionais</h3>
                <div class="field"><strong>Situação Profissional:</strong> ${data.employmentStatus}</div>
                <div class="field"><strong>Empresa/Atividade:</strong> ${data.companyName}</div>
                <div class="field"><strong>Tempo de Trabalho:</strong> ${data.workTime}</div>
            </div>

            <div class="section">
                <h3>📄 Documentação e Restrições</h3>
                <div class="field"><strong>Tipo de Documento:</strong> ${data.documentType.toUpperCase()}</div>
                <div class="field"><strong>Número:</strong> ${data.documentNumber}</div>
                <div class="field"><strong>Documento Anexo:</strong> ${documentFileName || "Não enviado"}</div>
                <div class="highlight">
                    <div class="field"><strong>🚨 Possui Restrições:</strong> ${data.hasRestrictions.toUpperCase()}</div>
                </div>
            </div>

            <div class="section">
                <h3>📞 Ações Necessárias</h3>
                <ul>
                    <li>✅ Verificar documentação anexa</li>
                    <li>🔍 Consultar CPF/CNPJ nos órgãos de proteção</li>
                    <li>📊 Analisar capacidade de pagamento</li>
                    <li>📞 Entrar em contato com o cliente em até 24h</li>
                    <li>📧 Enviar resposta da análise</li>
                </ul>
            </div>
        </div>

        <div class="footer">
            <p><strong>Sistema Ecred - Gestão de Empréstimos</strong></p>
            <p>Este e-mail foi gerado automaticamente pelo sistema</p>
            <p>Alameda dos Quinimuras, 187 - Planalto Paulista - SP | CNPJ: 62.173.620/0001-80</p>
        </div>
    </div>
</body>
</html>
  `
}
