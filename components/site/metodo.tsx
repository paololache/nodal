const pasos = [
  {
    titulo: "Relevamiento",
    plazo: "Semana 1",
    texto: "Conversamos con su equipo, inventariamos los equipos y recorremos cada sede.",
  },
  {
    titulo: "Medición",
    plazo: "Semanas 2 y 3",
    texto: "Dejamos sondas que registran tráfico, latencia y cobertura durante diez días hábiles.",
  },
  {
    titulo: "Informe",
    plazo: "Semana 4",
    texto: "Presentamos los hallazgos a su área técnica y a gerencia, con costo y prioridad de cada mejora.",
  },
  {
    titulo: "Implementación",
    plazo: "Según alcance",
    texto: "Ejecutamos por fases y en horario nocturno, sin detener la operación.",
  },
];

export function Metodo() {
  return (
    <section
      id="metodo"
      aria-labelledby="titulo-metodo"
      className="scroll-mt-8 border-y border-linea bg-panel px-4 py-24 sm:px-6 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="titulo-metodo" className="font-display text-3xl font-bold tracking-tight text-tinta sm:text-4xl">
          Del primer recorrido al informe en cuatro semanas
        </h2>

        <ol className="mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {pasos.map((paso, i) => (
            <li key={paso.titulo} className="relative md:pt-8">
              {/* Timeline rail: dot per step joined by a line on desktop */}
              <span aria-hidden className="absolute left-0 top-0 hidden size-3 rounded-full bg-senal md:block" />
              {i < pasos.length - 1 && (
                <span aria-hidden className="absolute left-5 right-0 top-[5px] hidden h-px bg-linea md:block" />
              )}
              <p className="font-mono text-xs uppercase tracking-widest text-senal">{paso.plazo}</p>
              <h3 className="mt-2 font-display text-xl font-bold text-tinta">{paso.titulo}</h3>
              <p className="mt-3 text-tenue">{paso.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
