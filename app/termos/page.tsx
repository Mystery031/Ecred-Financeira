import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Shield, DollarSign } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
            <h1 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Termos de Uso</h1>
            <p className="text-lg text-muted-foreground">Última atualização: Janeiro de 2025</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-primary" />
                Termos e Condições de Uso
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceitação dos Termos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ao utilizar os serviços da Ecred, você concorda em cumprir e ficar vinculado aos presentes Termos de
                    Uso. Se você não concordar com qualquer parte destes termos, não deve utilizar nossos serviços.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">2. Sobre a Ecred</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A Ecred é uma empresa especializada em soluções financeiras, registrada sob o CNPJ
                    62.173.620/0001-80, com sede na Alameda dos Quinimuras, 187, Planalto Paulista, São Paulo - SP.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Oferecemos serviços de intermediação para empréstimos pessoais e empresariais, conectando clientes a
                    instituições financeiras parceiras.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">3. Serviços Oferecidos</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Intermediação de empréstimos pessoais de R$ 5.000 a R$ 125.000</li>
                    <li>Empréstimos para pessoas físicas e jurídicas</li>
                    <li>Análise de crédito personalizada</li>
                    <li>Atendimento especializado para pessoas com restrições creditícias</li>
                    <li>Consultoria financeira</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">4. Elegibilidade</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Para utilizar nossos serviços, você deve:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Ser maior de 18 anos</li>
                    <li>Possuir CPF ou CNPJ válido</li>
                    <li>Fornecer informações verdadeiras e atualizadas</li>
                    <li>Ter renda comprovável</li>
                    <li>Residir no Brasil</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">5. Processo de Solicitação</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    O processo de solicitação de empréstimo inclui:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Preenchimento completo do formulário online</li>
                    <li>Envio de documentação comprobatória</li>
                    <li>Análise de crédito em até 24 horas úteis</li>
                    <li>Comunicação do resultado via e-mail ou telefone</li>
                    <li>Assinatura de contrato (se aprovado)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">6. Taxas e Custos</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A Ecred pode cobrar taxas pelos seguintes serviços:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Taxa de análise de crédito</li>
                    <li>Taxa de intermediação (percentual sobre o valor aprovado)</li>
                    <li>Taxas administrativas conforme contrato</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Todas as taxas serão informadas claramente antes da contratação do serviço.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">7. Responsabilidades do Cliente</h2>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Fornecer informações verdadeiras e atualizadas</li>
                    <li>Manter seus dados de contato atualizados</li>
                    <li>Cumprir com os termos do contrato de empréstimo</li>
                    <li>Comunicar mudanças em sua situação financeira</li>
                    <li>Utilizar os recursos de forma responsável</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">8. Limitações de Responsabilidade</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    A Ecred atua como intermediadora e não é responsável por:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Decisões de aprovação ou reprovação das instituições financeiras</li>
                    <li>Alterações nas condições de mercado</li>
                    <li>Problemas técnicos de terceiros</li>
                    <li>Uso inadequado dos recursos obtidos</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">9. Proteção de Dados</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Seus dados pessoais são protegidos conforme nossa Política de Privacidade e a Lei Geral de Proteção
                    de Dados (LGPD). Utilizamos suas informações exclusivamente para análise de crédito e prestação de
                    nossos serviços.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">10. Cancelamento e Rescisão</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Você pode cancelar sua solicitação a qualquer momento antes da aprovação final. Após a aprovação e
                    assinatura do contrato, aplicam-se as regras específicas do contrato de empréstimo.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    A Ecred reserva-se o direito de recusar ou cancelar solicitações que não atendam aos critérios
                    estabelecidos.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">11. Alterações nos Termos</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Estes termos podem ser atualizados periodicamente. As alterações serão comunicadas através do nosso
                    site e por e-mail. O uso continuado dos serviços após as alterações constitui aceitação dos novos
                    termos.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">12. Lei Aplicável</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida no foro da comarca
                    de São Paulo - SP.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contato</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Para dúvidas sobre estes termos, entre em contato:
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
