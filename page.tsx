
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function FormularioOrcamento() {
  const [formData, setFormData] = useState({
    nome: "",
    celular: "",
    whatsapp: "",
    email: "",
    data: "",
    hora: "",
    endereco: "",
    formacao: [],
    outroFormacao: "",
    estilos: [],
    servicos: [],
    observacoes: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleCheckbox = (field, value) => {
    const arr = formData[field];
    if (arr.includes(value)) {
      handleChange(field, arr.filter((v) => v !== value));
    } else {
      handleChange(field, [...arr, value]);
    }
  };

  const enviarWhatsApp = () => {
    if (!formData.nome || !formData.whatsapp || !formData.data || !formData.endereco) {
      alert("⚠️ Preencha os campos obrigatórios: Nome, WhatsApp, Data e Endereço!");
      return;
    }
    const message = `
🎶 *Solicitação de Orçamento Musical*

👤 Nome: ${formData.nome}
📱 Celular: ${formData.celular}
💬 WhatsApp: ${formData.whatsapp}
✉️ Email: ${formData.email}

📅 Data: ${formData.data}
⏰ Hora: ${formData.hora}
📍 Endereço: ${formData.endereco}

🎵 Formação: ${formData.formacao.join(", ")} ${formData.outroFormacao}
🎶 Estilos: ${formData.estilos.join(", ")}
✨ Serviços: ${formData.servicos.join(", ")}

📝 Observações: ${formData.observacoes}
`.trim();
    const url = `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const enviarEmail = () => {
    const subject = "Orçamento Musical";
    const body = `
Nome: ${formData.nome}
Celular: ${formData.celular}
WhatsApp: ${formData.whatsapp}
Email: ${formData.email}

Data: ${formData.data}
Hora: ${formData.hora}
Endereço: ${formData.endereco}

Formação: ${formData.formacao.join(", ")} ${formData.outroFormacao}
Estilos: ${formData.estilos.join(", ")}
Serviços: ${formData.servicos.join(", ")}

Observações: ${formData.observacoes}
    `;
    window.open(`mailto:jaynunes@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <Card>
        <CardContent className="space-y-4 p-4">
          <h1 className="text-xl font-bold">📋 Formulário de Orçamento Musical</h1>
          {/* O formulário continua aqui, conforme discutido */}
        </CardContent>
      </Card>
      <div className="flex gap-4 mt-4">
        <Button onClick={enviarWhatsApp}>Enviar por WhatsApp</Button>
        <Button onClick={enviarEmail}>Enviar por E-mail</Button>
      </div>
    </div>
  );
}
