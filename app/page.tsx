import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  DollarSign,
  Clock,
  Users,
  CheckCircle,
  Mail,
  MapPin,
  Award,
  TrendingUp,
  FileText,
  Star,
  Building,
  Phone,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import QuickLoanForm from "@/components/quick-loan-form"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image src="/images/ecred-logo.png" alt="Ecred Logo" width={40} height={40} className="rounded-lg" />
              <span className="text-2xl font-bold text-foreground">Ecred</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">
                Serviços
              </Link>
              <Link href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </Link>
              <Link href="#depoimentos" className="text-muted-foreground hover:text-primary transition-colors">
                Depoimentos
              </Link>
              <Link href="#contato" className="text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
            </nav>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/solicitar">Solicitar Empréstimo</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
                <Shield className="w-4 h-4 mr-2" />
                Empresa Registrada - CNPJ: 62.173.620/0001-80
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
                Crédito ao seu alcance, <span className="text-primary">mesmo com restrições</span>
              </h1>

              <p className="text-xl text-muted-foreground text-pretty mb-8">
                Há mais de 5 anos no mercado financeiro, oferecemos empréstimos de R$ 5.000 a R$ 125.000 com aprovação
                rápida e condições especiais para pessoas físicas e jurídicas.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Aprovação em 24h</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">100% Seguro</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">+15.000 Clientes</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">5 Anos no Mercado</span>
                </div>
              </div>
            </div>

            {/* Right Column - Quick Form */}
            <div className="bg-white p-8 rounded-2xl shadow-2xl border">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Solicite seu Empréstimo</h3>
                <p className="text-muted-foreground">Preencha os dados e receba uma proposta</p>
              </div>

              <QuickLoanForm />
            </div>
          </div>
        </div>
      </section>

      <section className="stats-bg py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">R$ 50M+</div>
              <div className="text-muted-foreground">Emprestado</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">15.000+</div>
              <div className="text-muted-foreground">Clientes Atendidos</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Taxa de Aprovação</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Nossos Serviços</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Soluções financeiras completas para pessoas físicas e jurídicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Empréstimo Pessoal</CardTitle>
                <CardDescription>
                  De R$ 5.000 a R$ 125.000 para pessoas físicas. Ideal para realizar sonhos, quitar dívidas ou investir
                  em projetos pessoais.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Empréstimo Empresarial</CardTitle>
                <CardDescription>
                  Capital de giro para empresas de todos os portes. Financiamento para expansão, equipamentos e
                  necessidades operacionais.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Crédito com Restrições</CardTitle>
                <CardDescription>
                  Especialistas em aprovar crédito mesmo com CPF/CNPJ negativado. Análise personalizada para cada
                  situação.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Consultoria Financeira</CardTitle>
                <CardDescription>
                  Orientação especializada para organizar suas finanças e escolher a melhor opção de crédito para seu
                  perfil.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Renegociação de Dívidas</CardTitle>
                <CardDescription>
                  Ajudamos você a renegociar dívidas em atraso e limpar seu nome com condições especiais de pagamento.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Aprovação Expressa</CardTitle>
                <CardDescription>
                  Para clientes com bom histórico, oferecemos aprovação em até 2 horas com processo 100% digital.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="sobre" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Nossa História</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Mais de 5 anos transformando vidas através do crédito responsável
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Fundada em 2019</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A Ecred nasceu com o propósito de democratizar o acesso ao crédito no Brasil. Fundada por
                  especialistas do mercado financeiro, nossa missão é oferecer soluções de crédito justas e acessíveis
                  para todos os brasileiros.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Ao longo dos anos, desenvolvemos uma metodologia própria de análise de crédito que nos permite aprovar
                  empréstimos mesmo para pessoas com restrições no CPF/CNPJ, sempre com responsabilidade e
                  transparência.
                </p>
                <div className="flex items-center space-x-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    <Award className="w-4 h-4 mr-2" />
                    Empresa Certificada
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    <Shield className="w-4 h-4 mr-2" />
                    100% Segura
                  </Badge>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="text-xl font-bold mb-4">Nossos Valores</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Transparência</div>
                      <div className="text-sm text-muted-foreground">Condições claras sem pegadinhas</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Agilidade</div>
                      <div className="text-sm text-muted-foreground">Processo rápido e eficiente</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Inclusão</div>
                      <div className="text-sm text-muted-foreground">Crédito para todos os perfis</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Responsabilidade</div>
                      <div className="text-sm text-muted-foreground">Empréstimo consciente e sustentável</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Histórias reais de pessoas que realizaram seus sonhos com a Ecred
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/20 transition-all">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <CardDescription className="text-base leading-relaxed">
                  "Consegui o empréstimo mesmo com o nome sujo. A equipe da Ecred foi super atenciosa e o dinheiro caiu
                  na minha conta em menos de 24 horas. Recomendo!"
                </CardDescription>
                <div className="mt-4">
                  <div className="font-semibold">Maria Silva</div>
                  <div className="text-sm text-muted-foreground">São Paulo, SP</div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-all">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <CardDescription className="text-base leading-relaxed">
                  "Precisava de capital de giro para minha empresa e a Ecred foi a única que aprovou. Processo rápido,
                  sem burocracia. Meu negócio voltou a crescer!"
                </CardDescription>
                <div className="mt-4">
                  <div className="font-semibold">João Santos</div>
                  <div className="text-sm text-muted-foreground">Rio de Janeiro, RJ</div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary/20 transition-all">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <CardDescription className="text-base leading-relaxed">
                  "Excelente atendimento! Me ajudaram a renegociar minhas dívidas e ainda consegui um empréstimo para
                  reformar minha casa. Muito obrigada, Ecred!"
                </CardDescription>
                <div className="mt-4">
                  <div className="font-semibold">Ana Costa</div>
                  <div className="text-sm text-muted-foreground">Belo Horizonte, MG</div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Como funciona</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Processo simples e 100% digital em apenas 3 passos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary-foreground">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4">Preencha o Formulário</h3>
              <p className="text-muted-foreground">
                Informe seus dados pessoais, renda e valor desejado. Leva apenas 5 minutos.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary-foreground">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4">Análise Especializada</h3>
              <p className="text-muted-foreground">
                Nossa equipe de especialistas analisa sua solicitação em até 24 horas úteis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary-foreground">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4">Dinheiro na Conta</h3>
              <p className="text-muted-foreground">
                Aprovado? O dinheiro é depositado diretamente na sua conta bancária.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <Link href="/solicitar">Começar Agora</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="trust-gradient py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Pronto para realizar seus sonhos?</h2>
          <p className="text-xl text-white/80 text-pretty mb-8 max-w-2xl mx-auto">
            Não deixe as restrições te impedirem. Com mais de 5 anos de experiência e milhares de clientes satisfeitos,
            a Ecred é sua parceira financeira de confiança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
            >
              <Link href="/solicitar">
                Solicitar Empréstimo
                <DollarSign className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <div className="flex items-center space-x-2 text-white/80">
              <Shield className="w-5 h-5" />
              <span>Processo 100% seguro e confidencial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/images/ecred-logo.png" alt="Ecred Logo" width={32} height={32} className="rounded-lg" />
                <span className="text-xl font-bold">Ecred</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Crédito ao seu alcance, mesmo com restrições. Mais de 5 anos transformando vidas.
              </p>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Award className="w-4 h-4" />
                <span className="text-sm">CNPJ: 62.173.620/0001-80</span>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <div className="space-y-2 text-muted-foreground text-sm">
                <div>Empréstimo Pessoal</div>
                <div>Empréstimo Empresarial</div>
                <div>Crédito com Restrições</div>
                <div>Consultoria Financeira</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-muted-foreground text-sm">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>ecred@solucoesfinanceirasecred.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>Atendimento 24h</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Endereço</h3>
              <div className="flex items-start space-x-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  Alameda dos Quinimuras, 187
                  <br />
                  Planalto Paulista - SP
                  <br />
                  CEP: 04068-020
                </span>
              </div>
            </div>
          </div>

          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">© 2025 Ecred. Todos os direitos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/termos" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/contato" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
