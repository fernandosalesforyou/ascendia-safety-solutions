import { useState, type FormEvent } from "react";
import { Section, SectionTitle } from "./Section";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", descricao: "" });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const msg = `Olá! Sou ${form.nome}.%0A%0AE-mail: ${form.email}%0ATelefone: ${form.telefone}%0A%0A${form.descricao}`;
    window.open(`https://api.whatsapp.com/send?phone=5551989036374&text=${msg}`, "_blank");
    setSent(true);
  }

  return (
    <Section id="contato" tone="gray">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          eyebrow="Formulário"
          title="Quer saber mais?"
          subtitle="Deixe seus dados e nossa equipe entra em contato rapidamente para entender sua necessidade e apresentar a melhor solução."
        />
        <form
          onSubmit={onSubmit}
          className="mt-10 grid gap-4 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-md"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Nome" value={form.nome} onChange={(v) => setForm({ ...form, nome: v })} required />
            <Input label="E-mail" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
          </div>
          <Input label="Telefone" type="tel" value={form.telefone} onChange={(v) => setForm({ ...form, telefone: v })} required />
          <div>
            <label className="text-sm font-medium text-foreground">Descrição</label>
            <textarea
              required
              rows={4}
              value={form.descricao}
              onChange={(e) => setForm({ ...form, descricao: e.target.value })}
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-md border border-white bg-accent px-6 py-3 font-semibold text-accent-foreground hover:bg-accent-hover transition-colors"
          >
            Enviar agora
          </button>
          {sent && (
            <p className="text-sm text-accent-hover font-medium">
              Abrimos o WhatsApp com sua mensagem. Em instantes nossa equipe responde!
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}