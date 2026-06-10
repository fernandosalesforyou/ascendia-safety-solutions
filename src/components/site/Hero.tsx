import heroBg from "@/assets/hero-bg.jpg";
import { CtaButton } from "./CtaButton";
import heroInstall from "@/assets/hero-install.jpg.asset.json";

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/70" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="max-w-3xl">
            <p className="inline-block rounded-full border border-primary-foreground/30 bg-primary-foreground/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground/90">
              Engenhar+ Soluções
            </p>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
              Projeto, Instalação e Inspeção de Linha de Vida para Adequação à NR-35
            </h1>
            <p className="mt-5 text-lg text-primary-foreground/85 max-w-2xl">
              Proteja sua equipe, evite multas e mantenha sua empresa em conformidade com a NR-35 com sistemas de proteção contra quedas projetados e instalados por especialistas.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Atenda às exigências da NR-35 e normas técnicas vigentes",
                "Reduza riscos de acidentes e passivos trabalhistas",
                "Receba um projeto personalizado para sua operação",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-primary-foreground/95">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Imagem visível apenas no mobile, entre bullets e CTA */}
            <div className="relative mt-8 lg:hidden">
              <div className="relative overflow-hidden rounded-3xl border-4 border-primary-foreground/20 shadow-2xl">
                <img
                  src={heroInstall.url}
                  alt="Instalação de linha de vida em telhado industrial"
                  className="h-full w-full object-cover aspect-[4/5]"
                />
              </div>
              <div className="absolute -top-4 -right-2 rounded-xl bg-card px-3 py-2 shadow-xl border border-border max-w-[160px]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-accent-foreground font-bold text-sm">★</span>
                  <div>
                    <p className="text-[10px] text-muted-foreground leading-tight">Projetos</p>
                    <p className="text-xs font-bold text-primary leading-tight">Personalizados</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-2 rounded-xl bg-card px-3 py-2 shadow-xl border border-border max-w-[180px]">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-sm">✓</span>
                  <div>
                    <p className="text-[10px] text-muted-foreground leading-tight">Atendimento</p>
                    <p className="text-xs font-bold text-primary leading-tight">Nacional</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-9">
              <CtaButton size="lg" />
            </div>

            <p className="mt-8 text-sm text-primary-foreground/70">
              Referência no RS • Atendimento nacional • Projetos personalizados
            </p>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative overflow-hidden rounded-3xl border-4 border-primary-foreground/20 shadow-2xl">
              <img
                src={heroInstall.url}
                alt="Instalação de linha de vida em telhado industrial"
                className="h-full w-full object-cover aspect-[4/5]"
              />
            </div>
            <div className="absolute -top-4 -right-4 rounded-xl bg-card px-4 py-3 shadow-xl border border-border max-w-[180px]">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-accent-foreground font-bold">★</span>
                <div>
                  <p className="text-xs text-muted-foreground leading-tight">Projetos</p>
                  <p className="text-sm font-bold text-primary leading-tight">Personalizados</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-card px-4 py-3 shadow-xl border border-border max-w-[200px]">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">✓</span>
                <div>
                  <p className="text-xs text-muted-foreground leading-tight">Atendimento</p>
                  <p className="text-sm font-bold text-primary leading-tight">Nacional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}