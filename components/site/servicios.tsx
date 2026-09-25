import { Activity, Network, Radar, Wifi } from "lucide-react";

const servicios = [
  {
    icono: Radar,
    titulo: "Diagnóstico de red",
    texto:
      "Medimos cableado, Wi-Fi y enlaces entre sedes durante la jornada real, no en una prueba de cinco minutos.",
    entregable: "Informe con hallazgos ordenados por impacto",
  },
  {
    icono: Network,
    titulo: "Diseño y segmentación",
    texto:
      "Separamos invitados, cámaras, cajas y equipos críticos para que una falla en un sector no tumbe a los demás.",
    entregable: "Topología y plan de direccionamiento",
  },
  {
    icono: Wifi,
    titulo: "Wi-Fi para espacios exigentes",
    texto:
      "Estudios de cobertura en almacenes, clínicas, colegios y oficinas con muros gruesos o mucha gente conectada.",
    entregable: "Mapa de cobertura y ubicación de cada antena",
  },
  {
    icono: Activity,
    titulo: "Monitoreo continuo",
    texto:
      "Recibimos la alerta cuando un enlace se degrada y actuamos antes de que su equipo note la lentitud.",
    entregable: "Panel en vivo y reporte mensual",
  },
];

export function Servicios() {
  return (
    <section id="servicios" aria-labelledby="titulo-servicios" className="scroll-mt-8 px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 id="titulo-servicios" className="font-display text-3xl font-bold tracking-tight text-tinta sm:text-4xl">
            Lo que hacemos por su red
          </h2>
          <p className="mt-4 text-lg text-tenue">
            Somos independientes de fabricante: trabajamos con los equipos que ya tiene y solo
            recomendamos reemplazar lo que de verdad limita la operación.
          </p>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {servicios.map(({ icono: Icono, titulo, texto, entregable }) => (
            <li key={titulo} className="flex flex-col rounded-2xl border border-linea bg-panel p-6 sm:p-8">
              <Icono className="size-6 text-senal" aria-hidden />
              <h3 className="mt-6 font-display text-xl font-bold text-tinta">{titulo}</h3>
              <p className="mt-3 text-tenue">{texto}</p>
              <p className="mt-6 border-t border-linea pt-4 font-mono text-xs text-tinta">
                <span className="text-tenue">Entregable: </span>
                {entregable}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
