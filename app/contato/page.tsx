import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, DollarSign, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
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
            <h1 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Entre em Contato</h1>
            <p className="text-lg text-muted-foreground">Nossa equipe está pronta para ajudar você</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-primary" />
                    E-mail
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="font-medium">Principal</p>
                    <p className="text-muted-foreground">ecred@solucoesfinanceirasecred.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    Endereço
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Alameda dos Quinimuras, 187
                    <br />
                    Planalto Paulista
                    <br />
                    São Paulo - SP
                    <br />
                    <strong className="text-foreground">CNPJ: 62.173.620/0001-80</strong>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Horário de Atendimento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <strong>Segunda a Sexta:</strong> 8h às 18h
                    </p>
                    <p>
                      <strong>Sábado:</strong> 8h às 12h
                    </p>
                    <p>
                      <strong>Domingo:</strong> Fechado
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Como Podemos Ajudar?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link href="/solicitar">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Solicitar Empréstimo
                      </Link>
                    </Button>

                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <a href="mailto:ecred@solucoesfinanceirasecred.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Enviar E-mail
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Perguntas Frequentes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Qual o prazo para análise?</h4>
                      <p className="text-sm text-muted-foreground">
                        Nossa equipe analisa todas as solicitações em até 24 horas úteis.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Aceita pessoas com restrições?</h4>
                      <p className="text-sm text-muted-foreground">
                        Sim! Analisamos cada caso individualmente, mesmo com CPF/CNPJ negativado.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Quais os valores disponíveis?</h4>
                      <p className="text-sm text-muted-foreground">
                        Oferecemos empréstimos de R$ 5.000 até R$ 125.000 para pessoas físicas e jurídicas.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Informações Importantes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>✅ Processo 100% digital</p>
                    <p>✅ Análise personalizada</p>
                    <p>✅ Sem burocracia desnecessária</p>
                    <p>✅ Dados protegidos e seguros</p>
                    <p>✅ Atendimento especializado</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
