"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, DollarSign, AlertCircle } from "lucide-react"
import { toast } from "sonner"

export default function QuickLoanForm() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    documento: "",
    valorEmprestimo: "",
    temRestricoes: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
    }
    return value
  }

  const formatDocument = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 11) {
      // CPF format
      return numbers.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    } else {
      // CNPJ format
      return numbers.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
    }
  }

  const formatCurrency = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (!numbers) return ""
    const amount = Number.parseInt(numbers)
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const valorNumerico = formData.valorEmprestimo.replace(/\D/g, "")
    const valor = Number.parseInt(valorNumerico) || 5000

    if (valor < 5000) {
      toast.error("O valor mínimo é R$ 5.000")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/quick-loan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          valorEmprestimo: valor.toString(),
        }),
      })

      if (response.ok) {
        toast.success("Solicitação enviada com sucesso! Entraremos em contato em breve.")
        setFormData({
          nome: "",
          telefone: "",
          documento: "",
          valorEmprestimo: "",
          temRestricoes: false,
        })
      } else {
        throw new Error("Erro ao enviar solicitação")
      }
    } catch (error) {
      toast.error("Erro ao enviar solicitação. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="nome">Nome Completo</Label>
          <Input
            id="nome"
            type="text"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            placeholder="Digite seu nome completo"
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="telefone">Telefone</Label>
          <Input
            id="telefone"
            type="tel"
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: formatPhone(e.target.value) })}
            placeholder="(11) 99999-9999"
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="documento">CPF ou CNPJ</Label>
          <Input
            id="documento"
            type="text"
            value={formData.documento}
            onChange={(e) => setFormData({ ...formData, documento: formatDocument(e.target.value) })}
            placeholder="000.000.000-00 ou 00.000.000/0000-00"
            required
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="valor">Valor do Empréstimo</Label>
          <Input
            id="valor"
            type="text"
            value={formData.valorEmprestimo}
            onChange={(e) => {
              const formatted = formatCurrency(e.target.value)
              setFormData({ ...formData, valorEmprestimo: formatted })
            }}
            placeholder="R$ 5.000 (mínimo)"
            required
            className="mt-1 text-lg font-medium"
          />
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-muted-foreground">Mínimo: R$ 5.000</p>
            <p className="text-xs text-muted-foreground">Máximo: R$ 125.000</p>
          </div>
        </div>

        <div>
          <Label className="text-sm font-medium">Situação do CPF/CNPJ</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            <Card
              className={`p-4 cursor-pointer transition-all border-2 ${
                !formData.temRestricoes ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
              }`}
              onClick={() => setFormData({ ...formData, temRestricoes: false })}
            >
              <div className="flex items-center space-x-3">
                <CheckCircle
                  className={`w-5 h-5 flex-shrink-0 ${!formData.temRestricoes ? "text-primary" : "text-muted-foreground"}`}
                />
                <div>
                  <div className="font-medium text-sm">Sem Restrições</div>
                  <div className="text-xs text-muted-foreground">CPF/CNPJ limpo</div>
                </div>
              </div>
            </Card>

            <Card
              className={`p-4 cursor-pointer transition-all border-2 ${
                formData.temRestricoes ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
              }`}
              onClick={() => setFormData({ ...formData, temRestricoes: true })}
            >
              <div className="flex items-center space-x-3">
                <AlertCircle
                  className={`w-5 h-5 flex-shrink-0 ${formData.temRestricoes ? "text-primary" : "text-muted-foreground"}`}
                />
                <div>
                  <div className="font-medium text-sm">Com Restrições</div>
                  <div className="text-xs text-muted-foreground">CPF/CNPJ negativado</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6" disabled={isSubmitting}>
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            Solicitar Empréstimo
            <DollarSign className="ml-2 w-5 h-5" />
          </>
        )}
      </Button>

      <div className="text-center">
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          <CheckCircle className="w-4 h-4 mr-2" />
          Resposta em até 24 horas
        </Badge>
      </div>
    </form>
  )
}
