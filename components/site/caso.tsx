const metricas = [
  { nombre: "Latencia al sistema clínico", antes: 184, despues: 22, formato: (v: number) => `${v} ms` },
  { nombre: "Pérdida de paquetes en hora punta", antes: 3.8, despues: 0.1, formato: (v: number) => `${v.toLocaleString("es-PE")} %` },
  { nombre: "Cortes no planificados al mes", antes: 7, despues: 0, formato: (v: number) => `${v}` },
  { nombre: "Tiempo para detectar una falla", antes: 160, despues: 4, formato: (v: number) => (v >= 60 ? `${Math.floor(v / 60)} h ${v % 60} min` : `${v} min`) },
];

export function Caso() {
  return (
    <section id="caso" aria-labelledby="titulo-caso" className="scroll-mt-8 px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-senal">Caso · Salud</p>
          <h2 id="titulo-caso" className="mt-4 font-display text-3xl font-bold tracking-tight text-tinta sm:text-4xl">
            Seis sedes, una historia clínica que ya no se congela
          </h2>
          <div className="mt-6 space-y-4 text-tenue">
            <p>
              Una red de clínicas en Arequipa perdía la conexión al sistema de historias clínicas
              cada mañana, justo cuando se abrían las consultas. El proveedor de internet no
              encontraba fallas en su lado.
            </p>
            <p>
              La medición mostró que las cámaras de seguridad y el Wi-Fi de pacientes compartían
              la misma red que los equipos médicos. Separamos el tráfico, priorizamos el sistema
              clínico y dejamos monitoreo en las seis sedes.
            </p>
          </div>
        </div>

        {/* Telemetry readout: before/after bars scaled to the "antes" value */}
        <figure className="rounded-2xl border border-linea bg-panel p-6 font-mono sm:p-8">
          <figcaption className="flex items-center justify-between text-xs text-tenue">
            <span>Lectura de red · 90 días después</span>
            <span className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><span aria-hidden className="size-2 rounded-full bg-alerta" />Antes</span>
              <span className="flex items-center gap-1.5"><span aria-hidden className="size-2 rounded-full bg-senal" />Después</span>
            </span>
          </figcaption>
          <dl className="mt-8 space-y-7">
            {metricas.map((m) => (
              <div key={m.nombre}>
                <dt className="text-xs text-tinta">{m.nombre}</dt>
                <dd className="mt-3 space-y-1.5 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 flex-1 rounded-full bg-linea">
                      <span className="block h-full w-full rounded-full bg-alerta" />
                    </span>
                    <span className="w-24 text-right text-alerta">
                      <span className="sr-only">Antes: </span>{m.formato(m.antes)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 flex-1 rounded-full bg-linea">
                      <span
                        className="block h-full min-w-1.5 rounded-full bg-senal"
                        style={{ width: `${(m.despues / m.antes) * 100}%` }}
                      />
                    </span>
                    <span className="w-24 text-right text-senal">
                      <span className="sr-only">Después: </span>{m.formato(m.despues)}
                    </span>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </figure>
      </div>
    </section>
  );
}
