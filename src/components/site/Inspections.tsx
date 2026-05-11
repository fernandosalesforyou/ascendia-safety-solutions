import { Section, SectionTitle } from "./Section";
import { CtaButton } from "./CtaButton";

const diff = ["Inspeção técnica rigorosa", "Atualização conforme normas", "Identificação de falhas e riscos"];
const scope = ["Linhas de vida", "Pontos de ancoragem"];

export function Inspections() {
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="Inspeções Linha de Vida"
        title="Inspeções técnicas especializadas"
        subtitle="Realizamos inspeções completas para garantir que os sistemas estejam seguros, funcionando corretamente e em conformidade com as normas vigentes."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-secondary p-8">
          <h3 className="text-lg font-semibold text-primary">Diferenciais</h3>
          <ul className="mt-4 space-y-3">
            {diff.map((d) => (
              <li key={d} className="flex gap-3 text-foreground">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">✓</span>
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-border bg-primary p-8 text-primary-foreground">
          <h3 className="text-lg font-semibold text-accent">Escopo</h3>
          <ul className="mt-4 space-y-3">
            {scope.map((d) => (
              <li key={d} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center">
        <CtaButton size="lg" />
      </div>
    </Section>
  );
}

export function Anchors() {
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Pontos de ancoragem"
        title="Projeto e instalação de ancoragem"
        subtitle="Projetamos e instalamos pontos de ancoragem conforme normas técnicas, garantindo segurança estrutural e proteção total para trabalhos em altura."
      />
    </Section>
  );
}

export function NR35() {
  return (
    <Section tone="white">
      <SectionTitle
        eyebrow="NR-35"
        title="Sua empresa está adequada à NR-35?"
        subtitle="Toda atividade acima de 2 metros exige sistema de proteção contra quedas."
      />
      <div className="mt-10 mx-auto max-w-3xl rounded-2xl border-l-4 border-accent bg-secondary p-8">
        <h3 className="text-lg font-semibold text-primary">Principais exigências</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Sistema adequado ao risco",
            "Projeto por profissional habilitado",
            "Resistência certificada",
            "Inspeções periódicas obrigatórias",
          ].map((e) => (
            <li key={e} className="flex gap-3 text-foreground">
              <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">✓</span>
              {e}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          A falta de adequação pode gerar multas, interdições e riscos graves à sua operação.
        </p>
      </div>
    </Section>
  );
}