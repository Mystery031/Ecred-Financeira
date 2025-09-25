"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { DollarSign, Upload, Shield, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoanApplicationPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    birthDate: "",
    maritalStatus: "",

    // Address
    zipCode: "",
    address: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",

    // Loan Information
    loanAmount: "",
    loanPurpose: "",
    monthlyIncome: "",

    // Employment
    employmentStatus: "",
    companyName: "",
    workTime: "",

    // Document Type
    documentType: "cpf", // cpf or cnpj
    cpf: "",
    cnpj: "",

    // Credit Restrictions
    hasRestrictions: "",

    // Terms
    acceptTerms: false,
    acceptPrivacy: false,
  })

  const [documentFile, setDocumentFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setDocumentFile(file)
    }
  }

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/\D/g, "")
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Number.parseInt(numericValue) || 0)
    return formattedValue
  }

  const formatPhone = (value: string) => {
    const numericValue = value.replace(/\D/g, "")
    if (numericValue.length <= 11) {
      return numericValue.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
    }
    return value
  }

  const formatDocument = (value: string, type: "cpf" | "cnpj") => {
    const numericValue = value.replace(/\D/g, "")
    if (type === "cpf") {
      return numericValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    } else {
      return numericValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const submitFormData = new FormData()

      // Add all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "documentType") return // Skip, we'll handle document number separately
        if (key === "cpf" || key === "cnpj") return // Skip, we'll handle document number separately
        submitFormData.append(key, value.toString())
      })

      // Add document number based on type
      const documentNumber = formData.documentType === "cpf" ? formData.cpf : formData.cnpj
      submitFormData.append("documentNumber", documentNumber)

      // Add document file if present
      if (documentFile) {
        submitFormData.append("documentFile", documentFile)
      }

      const response = await fetch("/api/submit-loan", {
        method: "POST",
        body: submitFormData,
      })

      const result = await response.json()

      if (result.success) {
        setSubmitSuccess(true)
      } else {
        throw new Error(result.message || "Erro ao enviar solicitação")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Erro ao enviar solicitação. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-2 border-primary/20">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Solicitação Enviada com Sucesso!</CardTitle>
                <CardDescription className="text-lg">
                  Recebemos sua solicitação de empréstimo e nossa equipe irá analisá-la em até 24 horas úteis.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Você receberá um e-mail de confirmação em breve com os próximos passos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/">Voltar ao Início</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contato">Falar Conosco</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Link>
          </Button>

          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-balance mb-4">Solicitar Empréstimo</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Preencha o formulário abaixo para solicitar seu empréstimo de R$ 5.000 a R$ 125.000
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Dados Pessoais</CardTitle>
                  <CardDescription>Informe seus dados pessoais básicos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Nome Completo *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", formatPhone(e.target.value))}
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="birthDate">Data de Nascimento *</Label>
                      <Input
                        id="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={(e) => handleInputChange("birthDate", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="maritalStatus">Estado Civil *</Label>
                    <Select
                      value={formData.maritalStatus}
                      onValueChange={(value) => handleInputChange("maritalStatus", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione seu estado civil" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solteiro">Solteiro(a)</SelectItem>
                        <SelectItem value="casado">Casado(a)</SelectItem>
                        <SelectItem value="divorciado">Divorciado(a)</SelectItem>
                        <SelectItem value="viuvo">Viúvo(a)</SelectItem>
                        <SelectItem value="uniao-estavel">União Estável</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              <Card>
                <CardHeader>
                  <CardTitle>Endereço</CardTitle>
                  <CardDescription>Informe seu endereço completo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="zipCode">CEP *</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange("zipCode", e.target.value)}
                        placeholder="00000-000"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="address">Endereço *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="Rua, Avenida, etc."
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="number">Número *</Label>
                      <Input
                        id="number"
                        value={formData.number}
                        onChange={(e) => handleInputChange("number", e.target.value)}
                        placeholder="123"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="complement">Complemento</Label>
                      <Input
                        id="complement"
                        value={formData.complement}
                        onChange={(e) => handleInputChange("complement", e.target.value)}
                        placeholder="Apto, Casa, etc."
                      />
                    </div>
                    <div>
                      <Label htmlFor="neighborhood">Bairro *</Label>
                      <Input
                        id="neighborhood"
                        value={formData.neighborhood}
                        onChange={(e) => handleInputChange("neighborhood", e.target.value)}
                        placeholder="Nome do bairro"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">Cidade *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="Nome da cidade"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">Estado *</Label>
                      <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o estado" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="SP">São Paulo</SelectItem>
                          <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                          <SelectItem value="MG">Minas Gerais</SelectItem>
                          <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                          <SelectItem value="PR">Paraná</SelectItem>
                          <SelectItem value="SC">Santa Catarina</SelectItem>
                          <SelectItem value="BA">Bahia</SelectItem>
                          <SelectItem value="GO">Goiás</SelectItem>
                          <SelectItem value="PE">Pernambuco</SelectItem>
                          <SelectItem value="CE">Ceará</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Loan Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Informações do Empréstimo</CardTitle>
                  <CardDescription>Detalhes sobre o empréstimo solicitado</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="loanAmount">Valor Solicitado *</Label>
                      <Input
                        id="loanAmount"
                        value={formData.loanAmount}
                        onChange={(e) => handleInputChange("loanAmount", formatCurrency(e.target.value))}
                        placeholder="R$ 5.000"
                        required
                      />
                      <p className="text-sm text-muted-foreground mt-1">Mínimo: R$ 5.000 | Máximo: R$ 125.000</p>
                    </div>
                    <div>
                      <Label htmlFor="monthlyIncome">Renda Mensal *</Label>
                      <Input
                        id="monthlyIncome"
                        value={formData.monthlyIncome}
                        onChange={(e) => handleInputChange("monthlyIncome", formatCurrency(e.target.value))}
                        placeholder="R$ 3.000"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="loanPurpose">Finalidade do Empréstimo *</Label>
                    <Textarea
                      id="loanPurpose"
                      value={formData.loanPurpose}
                      onChange={(e) => handleInputChange("loanPurpose", e.target.value)}
                      placeholder="Descreva para que você utilizará o empréstimo..."
                      rows={3}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Employment */}
              <Card>
                <CardHeader>
                  <CardTitle>Informações Profissionais</CardTitle>
                  <CardDescription>Dados sobre sua situação profissional</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="employmentStatus">Situação Profissional *</Label>
                    <Select
                      value={formData.employmentStatus}
                      onValueChange={(value) => handleInputChange("employmentStatus", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione sua situação" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clt">CLT</SelectItem>
                        <SelectItem value="autonomo">Autônomo</SelectItem>
                        <SelectItem value="empresario">Empresário</SelectItem>
                        <SelectItem value="funcionario-publico">Funcionário Público</SelectItem>
                        <SelectItem value="aposentado">Aposentado</SelectItem>
                        <SelectItem value="pensionista">Pensionista</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName">Nome da Empresa/Atividade *</Label>
                      <Input
                        id="companyName"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                        placeholder="Nome da empresa ou atividade"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="workTime">Tempo de Trabalho *</Label>
                      <Select value={formData.workTime} onValueChange={(value) => handleInputChange("workTime", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o tempo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="menos-6-meses">Menos de 6 meses</SelectItem>
                          <SelectItem value="6-12-meses">6 a 12 meses</SelectItem>
                          <SelectItem value="1-2-anos">1 a 2 anos</SelectItem>
                          <SelectItem value="2-5-anos">2 a 5 anos</SelectItem>
                          <SelectItem value="mais-5-anos">Mais de 5 anos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Document and Restrictions */}
              <Card>
                <CardHeader>
                  <CardTitle>Documentação e Restrições</CardTitle>
                  <CardDescription>Informações sobre documentos e situação creditícia</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Document Type */}
                  <div>
                    <Label>Tipo de Documento *</Label>
                    <RadioGroup
                      value={formData.documentType}
                      onValueChange={(value) => handleInputChange("documentType", value)}
                      className="flex flex-row space-x-6 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cpf" id="cpf" />
                        <Label htmlFor="cpf">CPF (Pessoa Física)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="cnpj" id="cnpj" />
                        <Label htmlFor="cnpj">CNPJ (Pessoa Jurídica)</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Document Number */}
                  <div>
                    <Label htmlFor="document">{formData.documentType === "cpf" ? "CPF *" : "CNPJ *"}</Label>
                    <Input
                      id="document"
                      value={formData.documentType === "cpf" ? formData.cpf : formData.cnpj}
                      onChange={(e) => {
                        const field = formData.documentType === "cpf" ? "cpf" : "cnpj"
                        handleInputChange(field, formatDocument(e.target.value, formData.documentType))
                      }}
                      placeholder={formData.documentType === "cpf" ? "000.000.000-00" : "00.000.000/0000-00"}
                      required
                    />
                  </div>

                  {/* Document Upload */}
                  <div>
                    <Label htmlFor="documentFile">Upload do {formData.documentType === "cpf" ? "CPF" : "CNPJ"} *</Label>
                    <div className="mt-2">
                      <label
                        htmlFor="documentFile"
                        className="flex items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:border-primary/50 transition-colors"
                      >
                        <div className="text-center">
                          <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            {documentFile ? documentFile.name : "Clique para fazer upload ou arraste o arquivo"}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">PDF, JPG, PNG (máx. 5MB)</p>
                        </div>
                      </label>
                      <input
                        id="documentFile"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileUpload}
                        className="hidden"
                        required
                      />
                    </div>
                  </div>

                  {/* Credit Restrictions */}
                  <div>
                    <Label>Você possui restrições no {formData.documentType === "cpf" ? "CPF" : "CNPJ"}? *</Label>
                    <RadioGroup
                      value={formData.hasRestrictions}
                      onValueChange={(value) => handleInputChange("hasRestrictions", value)}
                      className="flex flex-row space-x-6 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sim" id="restrictions-yes" />
                        <Label htmlFor="restrictions-yes">Sim</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="nao" id="restrictions-no" />
                        <Label htmlFor="restrictions-no">Não</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
              </Card>

              {/* Terms and Conditions */}
              <Card>
                <CardHeader>
                  <CardTitle>Termos e Condições</CardTitle>
                  <CardDescription>Leia e aceite os termos para continuar</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="acceptTerms"
                      checked={formData.acceptTerms}
                      onCheckedChange={(checked) => handleInputChange("acceptTerms", checked)}
                    />
                    <Label htmlFor="acceptTerms" className="text-sm leading-relaxed">
                      Li e aceito os{" "}
                      <Link href="/termos" className="text-primary hover:underline" target="_blank">
                        Termos de Uso
                      </Link>{" "}
                      da Ecred *
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="acceptPrivacy"
                      checked={formData.acceptPrivacy}
                      onCheckedChange={(checked) => handleInputChange("acceptPrivacy", checked)}
                    />
                    <Label htmlFor="acceptPrivacy" className="text-sm leading-relaxed">
                      Li e aceito a{" "}
                      <Link href="/privacidade" className="text-primary hover:underline" target="_blank">
                        Política de Privacidade
                      </Link>{" "}
                      da Ecred *
                    </Label>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-primary" />
                    Informações Importantes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Análise em até 24 horas úteis</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Empréstimos de R$ 5.000 a R$ 125.000</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Aceita pessoas com restrições</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Processo 100% digital</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Dados protegidos e seguros</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Precisa de Ajuda?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">Nossa equipe está pronta para ajudar você.</p>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="/contato">Falar Conosco</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-primary hover:bg-primary/90 px-12 py-6 text-lg"
              disabled={isSubmitting || !formData.acceptTerms || !formData.acceptPrivacy}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                  Enviando Solicitação...
                </>
              ) : (
                <>
                  Solicitar Empréstimo
                  <DollarSign className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
