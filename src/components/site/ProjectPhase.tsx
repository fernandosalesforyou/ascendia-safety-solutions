import { Section, SectionTitle } from "./Section";

const steps = [
  "Análise de risco detalhada",
  "Croqui inicial do sistema",
  "Aprovação do cliente",
  "Desenvolvimento do projeto executivo",
  "Entrega do databook técnico",
];

export function ProjectPhase() {
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Fase de projeto"
        title="Etapas do desenvolvimento técnico"
        subtitle="Antes da execução, estruturamos todo o projeto para garantir precisão, segurança e eficiência."
      />
      <ol className="mt-12 grid gap-4 md:grid-cols-5">
        {steps.map((s, i) => (
          <li
            key={s}
            className="relative rounded-xl border border-border bg-card p-6 text-center shadow-sm"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground text-lg font-bold">
              {i + 1}
            </div>
            <p className="mt-4 text-sm font-semibold text-primary">{s}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}