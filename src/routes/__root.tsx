import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Engenhar+ | Linha de Vida e Proteção Contra Quedas no RS" },
      { name: "description", content: "Projeto, instalação e inspeção de Linhas de Vida conforme NR-35. Soluções completas em proteção contra quedas para empresas no RS e Brasil." },
      { name: "author", content: "Engenhar+ Soluções" },
      { property: "og:title", content: "Engenhar+ | Linha de Vida e Proteção Contra Quedas no RS" },
      { property: "og:description", content: "Projeto, instalação e inspeção de Linhas de Vida conforme NR-35. Soluções completas em proteção contra quedas para empresas no RS e Brasil." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Engenhar+ | Linha de Vida e Proteção Contra Quedas no RS" },
      { name: "twitter:description", content: "Projeto, instalação e inspeção de Linhas de Vida conforme NR-35. Soluções completas em proteção contra quedas para empresas no RS e Brasil." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4e6fa083-c7e7-46eb-8749-b2e7bcbf72b8/id-preview-cbf7b973--6c03737c-babe-40ff-ade7-4067c63d62c0.lovable.app-1778086838899.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4e6fa083-c7e7-46eb-8749-b2e7bcbf72b8/id-preview-cbf7b973--6c03737c-babe-40ff-ade7-4067c63d62c0.lovable.app-1778086838899.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      { src: "https://www.googletagmanager.com/gtag/js?id=AW-11447457929", async: true },
      {
        children:
          "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-11447457929');function gtag_report_conversion(url){var callback=function(){if(typeof(url)!='undefined'){window.location=url;}};gtag('event','conversion',{'send_to':'AW-11447457929/rnm1CPPAlqkcEImxydIq','value':1.0,'currency':'BRL','event_callback':callback});return false;}",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
