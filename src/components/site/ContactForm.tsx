import { Section, SectionTitle } from "./Section";
import { CtaButton } from "./CtaButton";

export function ContactForm() {
  return (
    <Section id="contato" tone="gray">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle
          eyebrow="Formulário"
          title="Fale com um especialista"
          subtitle="Receba um diagnóstico técnico para sua empresa."
        />
        <div className="mt-8">
          <CtaButton size="lg">Quero solicitar um orçamento</CtaButton>
        </div>
      </div>
    </Section>
  );
}