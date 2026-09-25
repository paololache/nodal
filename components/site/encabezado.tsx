const enlaces = [
  { href: "#servicios", texto: "Servicios" },
  { href: "#metodo", texto: "Método" },
  { href: "#caso", texto: "Caso" },
  { href: "#preguntas", texto: "Preguntas" },
];

export function Encabezado() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-5 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-tinta">
          <span aria-hidden className="size-2.5 rounded-full bg-senal" />
          Nodal
        </a>
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8 text-sm text-tenue">
            {enlaces.map((e) => (
              <li key={e.href}>
                <a href={e.href} className="transition-colors hover:text-tinta">
                  {e.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contacto"
          className="rounded-full border border-linea px-4 py-2 text-sm font-medium text-tinta transition-colors hover:border-senal hover:text-senal"
        >
          Agendar diagnóstico
        </a>
      </div>
    </header>
  );
}
