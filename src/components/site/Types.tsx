import { Section, SectionTitle } from "./Section";
import { CtaButton } from "./CtaButton";

const items = [
  {
    title: "Linha de Vida Flexível Horizontal",
    text: "Sistema com cabo de aço aplicado em telhados e estruturas horizontais. Permite mobilidade contínua com segurança durante deslocamentos em altura — ideal para manutenções e inspeções frequentes.",
  },
  {
    title: "Linha de Vida Horizontal (Overhead)",
    text: "Instalada acima da cabeça, em cabo de aço ou trilho rígido. Indicada para operações industriais como carga, descarga e manutenção, com uso de trava-quedas retrátil.",
  },
  {
    title: "Linha de Vida Vertical",
    text: "Cabo de aço vertical e trava-quedas deslizante, aplicado em escadas tipo marinheiro. Garante segurança no acesso vertical e deslocamento contínuo.",
  },
  {
    title: "Pontos de Ancoragem",
    text: "Dispositivos fixados na estrutura com alta resistência, projetados para suportar cargas em caso de queda. Essenciais para garantir segurança em diversas aplicações.",
  },
];

export function Types() {
  return (
    <section id="projeto" className="relative isolate overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary to-primary/90" />
      <div className="absolute inset-0 -z-10 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, hsl(var(--accent)/0.4), transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--accent)/0.3), transparent 50%)" }} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="inline-block rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            Tipos de Linha de Vida
          </p>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
            Soluções completas em sistemas de proteção contra quedas
          </h2>
          <div className="mt-6 mx-auto h-1 w-24 rounded bg-accent" />
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <article
              key={it.title}
              className="group relative rounded-2xl bg-card p-7 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-accent"
            >
              <div className="absolute -top-5 left-7 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground font-bold text-lg shadow-lg">
                0{i + 1}
              </div>
              <h3 className="mt-6 text-lg font-bold text-primary">{it.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.text}</p>
              <div className="mt-5 h-1 w-10 rounded bg-accent group-hover:w-full transition-all duration-500" />
            </article>
          ))}
        </div>
        <div className="mt-16 text-center">
          <CtaButton size="lg" />
        </div>
      </div>
    </section>
  );
}