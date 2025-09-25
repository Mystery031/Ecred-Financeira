import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, DollarSign, Lock } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Início
            </Link>
          </Button>

          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">Ecred</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Política de Privacidade</h1>
            <p className="text-lg text-muted-foreground">Última atualização: Janeiro de 2025</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="w-5 h-5 mr-2 text-primary" />
                Política de Privacidade e Proteção de Dados
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introdução</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A Ecred (CNPJ: 62.173.620/0001-80) está comprometida com a proteção da privacidade e segurança dos
                    dados pessoais de nossos clientes. Esta Política de Privacidade descreve como coletamos, usamos,
                    armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de
                    Dados (LGPD - Lei 13.709/2018).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Dados Coletados</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Coletamos os seguintes tipos de dados pessoais:
                  </p>

                  <h3 className="text-lg font-semibold text-foreground mb-3">2.1 Dados de Identificação</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li>Nome completo</li>
                    <li>CPF ou CNPJ</li>
                    <li>RG</li>
                    <li>Data de nascimento</li>
                    <li>Estado civil</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground mb-3">2.2 Dados de Contato</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li>Endereço completo</li>
                    <li>Telefone e celular</li>
                    <li>E-mail</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground mb-3">2.3 Dados Financeiros</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li>Renda mensal</li>
                    <li>Informações profissionais</li>
                    <li>Dados bancários</li>
                    <li>Histórico de crédito</li>
                    <li>Informações sobre restrições creditícias</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground mb-3">2.4 Documentos</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Cópias de documentos de identificação</li>
                    <li>Comprovantes de renda</li>
                    <li>Comprovantes de residência</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. Finalidade do Tratamento</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Utilizamos seus dados pessoais para as seguintes finalidades:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Análise de crédito e capacidade de pagamento</li>
                    <li>Intermediação de empréstimos com instituições financeiras</li>
                    <li>Comunicação sobre o andamento da solicitação</li>
                    <li>Cumprimento de obrigações legais e regulamentares</li>
                    <li>Prevenção à fraude e lavagem de dinheiro</li>
                    <li>Melhoria dos nossos serviços</li>
                    <li>Marketing direto (com seu consentimento)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Base Legal</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    O tratamento dos seus dados pessoais é baseado nas seguintes hipóteses legais:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Consentimento:</strong> Para finalidades específicas que requerem sua autorização
                    </li>
                    <li>
                      <strong>Execução de contrato:</strong> Para cumprimento de obrigações contratuais
                    </li>
                    <li>
                      <strong>Legítimo interesse:</strong> Para análise de crédito e prevenção à fraude
                    </li>
                    <li>
                      <strong>Cumprimento de obrigação legal:</strong> Para atender exigências regulamentares
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Compartilhamento de Dados</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">Seus dados podem ser compartilhados com:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Instituições financeiras parceiras para análise de crédito</li>
                    <li>Órgãos de proteção ao crédito (SPC, Serasa, etc.)</li>
                    <li>Autoridades competentes quando exigido por lei</li>
                    <li>Prestadores de serviços terceirizados (com contratos de confidencialidade)</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    <strong>Importante:</strong> Nunca vendemos seus dados pessoais para terceiros.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Segurança dos Dados</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Implementamos medidas técnicas e organizacionais para proteger seus dados:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Criptografia de dados em trânsito e em repouso</li>
                    <li>Controle de acesso restrito aos dados</li>
                    <li>Monitoramento contínuo de segurança</li>
                    <li>Treinamento regular da equipe</li>
                    <li>Backup seguro das informações</li>
                    <li>Certificados SSL para transmissão segura</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Retenção de Dados</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Mantemos seus dados pessoais pelo tempo necessário para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Prestação dos serviços contratados</li>
                    <li>Cumprimento de obrigações legais (até 5 anos após o término da relação)</li>
                    <li>Exercício regular de direitos em processos judiciais</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Após esse período, os dados são eliminados de forma segura.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Seus Direitos</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Conforme a LGPD, você tem os seguintes direitos:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>
                      <strong>Acesso:</strong> Saber quais dados temos sobre você
                    </li>
                    <li>
                      <strong>Correção:</strong> Corrigir dados incompletos ou incorretos
                    </li>
                    <li>
                      <strong>Eliminação:</strong> Solicitar a exclusão de dados desnecessários
                    </li>
                    <li>
                      <strong>Portabilidade:</strong> Receber seus dados em formato estruturado
                    </li>
                    <li>
                      <strong>Oposição:</strong> Opor-se ao tratamento em certas situações
                    </li>
                    <li>
                      <strong>Revogação:</strong> Retirar o consentimento a qualquer momento
                    </li>
                    <li>
                      <strong>Informação:</strong> Saber com quem compartilhamos seus dados
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Cookies e Tecnologias</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">Nosso site utiliza cookies para:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Melhorar a experiência de navegação</li>
                    <li>Analisar o uso do site</li>
                    <li>Personalizar conteúdo</li>
                    <li>Garantir a segurança</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Você pode gerenciar as configurações de cookies no seu navegador.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">10. Menores de Idade</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Nossos serviços são destinados apenas a maiores de 18 anos. Não coletamos intencionalmente dados de
                    menores de idade. Se identificarmos dados de menores, eles serão imediatamente excluídos.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">11. Alterações na Política</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Esta política pode ser atualizada periodicamente. Alterações significativas serão comunicadas por
                    e-mail ou através do nosso site. A data da última atualização sempre estará indicada no início deste
                    documento.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">12. Encarregado de Dados (DPO)</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato com nosso
                    Encarregado de Proteção de Dados:
                  </p>
                  <ul className="list-none space-y-2 text-muted-foreground">
                    <li>
                      <strong>E-mail:</strong> ecred@solucoesfinanceirasecred.com
                    </li>
                    <li>
                      <strong>Endereço:</strong> Alameda dos Quinimuras, 187 - Planalto Paulista - SP
                    </li>
                    <li>
                      <strong>CNPJ:</strong> 62.173.620/0001-80
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">13. Autoridade Nacional</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Se não ficar satisfeito com nossas respostas, você pode contatar a Autoridade Nacional de Proteção
                    de Dados (ANPD) através do site:
                    <a
                      href="https://www.gov.br/anpd"
                      className="text-primary hover:underline ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      www.gov.br/anpd
                    </a>
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/solicitar">Solicitar Empréstimo</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
