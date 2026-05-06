import { Section, SectionTitle } from "./Section";
import { CtaButton } from "./CtaButton";

export function ContactForm() {
  return (
    <Section id="contato" tone="gray">
      <div className="mx-auto max-w-3xl text-center">
        <SectionTitle
          eyebrow="Formulário"
          title="Quer saber mais?"
          subtitle="Deixe seus dados e nossa equipe entra em contato rapidamente para entender sua necessidade e apresentar a melhor solução."
        />
        <div className="mt-8">
          <CtaButton size="lg">Solicitar contato</CtaButton>
        </div>
      </div>
    </Section>
  );
}