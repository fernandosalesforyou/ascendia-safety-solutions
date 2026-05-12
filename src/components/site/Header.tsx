import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { useContactDialog } from "./ContactDialog";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { open: openDialog } = useContactDialog();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Projeto", href: "#projeto" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#home" className="flex items-center">
            <img src={logo} alt="Engenhar+ Soluções" className="h-14 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base font-semibold text-primary-foreground/90 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={openDialog}
            className="hidden md:inline-flex items-center justify-center rounded-md border border-primary-foreground/90 bg-accent px-6 py-3 text-base font-semibold text-accent-foreground hover:bg-accent-hover transition-colors"
          >
            Quero solicitar um orçamento
          </button>

          <button
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-primary-foreground"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded px-3 py-2 text-primary-foreground/90 hover:bg-primary-foreground/10"
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => { setOpen(false); openDialog(); }}
              className="block w-full rounded-md border border-primary-foreground/90 bg-accent px-3 py-2 text-center text-sm font-semibold text-accent-foreground"
            >
              Quero solicitar um orçamento
            </button>
          </div>
        )}
      </div>
    </header>
  );
}