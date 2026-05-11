import { Section, SectionTitle } from "./Section";
import { CtaButton } from "./CtaButton";
import tesla from "@/assets/partners/tesla.png";
import tsea from "@/assets/partners/tsea.png";
import arcelor from "@/assets/partners/arcelor.png";
import craRs from "@/assets/partners/cra-rs.png";
import solistica from "@/assets/partners/solistica.png";
import trombini from "@/assets/partners/trombini.png";
import isla from "@/assets/partners/isla.png";
import dorfKetal from "@/assets/partners/dorf-ketal.png";
import unimed from "@/assets/partners/unimed.png";
import madesa from "@/assets/partners/madesa.png";

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
      <ul className="mt-12 mx-auto grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
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

      <div className="mt-10 text-center">
        <CtaButton size="lg" />
      </div>

      <PartnersCarousel />
    </Section>
  );
}

function PartnersCarousel() {
  const items = [
    { name: "Tesla", src: tesla },
    { name: "TSEA Energia", src: tsea },
    { name: "ArcelorMittal / Gonvarri", src: arcelor },
    { name: "CRA-RS", src: craRs },
    { name: "Solistica", src: solistica },
    { name: "Trombini", src: trombini },
    { name: "Isla", src: isla },
    { name: "Dorf Ketal", src: dorfKetal },
    { name: "Unimed Porto Alegre", src: unimed },
    { name: "Madesa", src: madesa },
  ];
  const loop = [...items, ...items];
  return (
    <div className="mt-16">
      <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Alguns de nossos parceiros
      </p>
      <div className="mt-6 overflow-hidden">
        <div className="flex gap-10 animate-[marquee_30s_linear_infinite] w-max">
          {loop.map((p, i) => (
            <div
              key={i}
              className="flex h-20 w-40 shrink-0 items-center justify-center rounded-lg border border-border bg-card p-3"
            >
              <img
                src={p.src}
                alt={p.name}
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}