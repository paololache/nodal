import { ArrowDown } from "lucide-react";

import ConstellationGrid from "@/components/ui/constellation-grid";

export function Portada() {
  return (
    <section id="inicio" aria-labelledby="titulo-portada">
      <ConstellationGrid className="h-svh min-h-[640px] bg-papel">
        <div className="mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 md:pb-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-senal">
            Diagnóstico e ingeniería de redes · Lima
          </p>
          <h1
            id="titulo-portada"
            className="mt-5 font-display font-extrabold uppercase leading-[0.85] text-tinta"
          >
            <span className="block text-[clamp(3.25rem,13vw,10.5rem)] [font-variation-settings:'wdth'_150]">
              New,
            </span>
            <span className="block text-[clamp(3.25rem,13vw,10.5rem)] [font-variation-settings:'wdth'_55]">
              company.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-tenue sm:text-lg">
            Medimos cómo se comporta su red en horario real de trabajo, encontramos lo que la
            frena y la dejamos estable, segmentada y monitoreada.
          </p>
          <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="rounded-full bg-tinta px-6 py-3 text-sm font-semibold text-papel transition-opacity hover:opacity-85"
            >
              Agendar diagnóstico
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-tinta transition-colors hover:text-senal"
            >
              Ver cómo trabajamos
              <ArrowDown className="size-4" aria-hidden />
            </a>
          </div>
          <p className="mt-10 font-mono text-[11px] text-tenue pointer-coarse:hidden">
            Cada punto es un equipo de su red. Mueva el cursor rápido para simular un pico de tráfico.
          </p>
        </div>
      </ConstellationGrid>
    </section>
  );
}
