import { Plus } from "lucide-react";

const preguntas = [
  {
    p: "¿Hay que detener la operación para medir?",
    r: "No. Las sondas se conectan en paralelo y solo observan el tráfico. Su equipo sigue trabajando con normalidad.",
  },
  {
    p: "¿Trabajan con cualquier marca de equipos?",
    r: "Sí. No vendemos equipos de un fabricante en particular, así que las recomendaciones parten de lo que ya tiene instalado.",
  },
  {
    p: "¿Cuánto cuesta el diagnóstico?",
    r: "Depende del número de sedes y de puntos de red. Para una sede de hasta 80 usuarios parte desde S/ 4 800. Le enviamos una cotización cerrada después de la primera llamada.",
  },
  {
    p: "¿Atienden fuera de Lima?",
    r: "Sí. Hemos trabajado en Arequipa, Trujillo, Piura y Cusco. El relevamiento se hace en sitio y el monitoreo, de forma remota.",
  },
  {
    p: "¿Qué pasa con la información de nuestra red?",
    r: "Firmamos un acuerdo de confidencialidad antes de empezar. Las capturas de tráfico se eliminan al entregar el informe.",
  },
];

export function Preguntas() {
  return (
    <section
      id="preguntas"
      aria-labelledby="titulo-preguntas"
      className="scroll-mt-8 border-t border-linea px-4 py-24 sm:px-6 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_2fr]">
        <h2 id="titulo-preguntas" className="font-display text-3xl font-bold tracking-tight text-tinta sm:text-4xl">
          Preguntas frecuentes
        </h2>
        <div className="divide-y divide-linea border-y border-linea">
          {preguntas.map(({ p, r }) => (
            <details key={p} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium text-tinta [&::-webkit-details-marker]:hidden">
                {p}
                <Plus className="size-5 shrink-0 text-senal transition-transform group-open:rotate-45" aria-hidden />
              </summary>
              <p className="mt-3 max-w-2xl text-tenue">{r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
