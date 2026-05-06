import { Section, SectionTitle } from "./Section";
import diagram from "@/assets/diagram-truck.png";

const services = [
  "Projeto técnico 2D e 3D",
  "Instalação completa dos sistemas",
  "Inspeções iniciais e periódicas",
  "Relatórios técnicos e documentação",
  "Avaliação de risco no local",
  "Consultoria especializada",
];

export function Services() {
  return (
    <Section tone="gray">
      <SectionTitle
        eyebrow="Serviços"
        title="Solução completa do projeto à execução"
        subtitle="Oferecemos um conjunto completo de serviços técnicos para garantir segurança, conformidade e eficiência."
      />
      <div className="mt-12 grid gap-10 lg:grid-cols-2 items-center">
        <ul className="grid gap-3 sm:grid-cols-2">
          {services.map((s) => (
            <li
              key={s}
              className="flex items-start gap-3 rounded-lg bg-card p-4 shadow-sm border border-border"
            >
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">✓</span>
              <span className="text-sm font-medium text-foreground">{s}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-2xl bg-card p-6 shadow-md border border-border">
          <img src={diagram} alt="Projeto 3D de linha de vida em caminhão" className="w-full h-auto" />
        </div>
      </div>

      <PartnersCarousel />
    </Section>
  );
}

function PartnersCarousel() {
  const items = Array.from({ length: 10 }, (_, i) => `Parceiro ${i + 1}`);
  const loop = [...items, ...items];
  return (
    <div className="mt-16">
      <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Parceiros e clientes
      </p>
      <div className="mt-6 overflow-hidden">
        <div className="flex gap-10 animate-[marquee_30s_linear_infinite] w-max">
          {loop.map((name, i) => (
            <div
              key={i}
              className="flex h-20 w-40 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-sm font-semibold text-muted-foreground"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}