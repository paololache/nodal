"use client";

import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";

const campo =
  "mt-2 w-full rounded-xl border border-linea bg-papel px-4 py-3 text-tinta placeholder:text-tenue/70 focus:border-senal focus:outline-none";

export function Contacto() {
  const [enviado, setEnviado] = useState(false);

  return (
    <section
      id="contacto"
      aria-labelledby="titulo-contacto"
      className="scroll-mt-8 bg-panel px-4 py-24 sm:px-6 md:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 id="titulo-contacto" className="font-display text-3xl font-bold tracking-tight text-tinta sm:text-4xl">
            Agende su diagnóstico
          </h2>
          <p className="mt-4 max-w-md text-lg text-tenue">
            Cuéntenos cuántas sedes tiene y qué problema nota. Le respondemos en un día hábil con
            una propuesta de alcance.
          </p>
          <ul className="mt-10 space-y-4 text-tinta">
            <li className="flex items-center gap-3">
              <Mail className="size-5 text-senal" aria-hidden />
              hola@nodal.demo
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-5 text-senal" aria-hidden />
              +51 1 555 0142
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-5 text-senal" aria-hidden />
              Av. Ejemplo 1234, San Isidro, Lima
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-linea bg-papel p-6 sm:p-8">
          {enviado ? (
            <div role="status" className="flex h-full flex-col items-start justify-center gap-4 py-10">
              <CheckCircle2 className="size-8 text-senal" aria-hidden />
              <p className="font-display text-2xl font-bold text-tinta">Diagnóstico agendado</p>
              <p className="text-tenue">
                Recibimos su solicitud. Le escribiremos en un día hábil para coordinar la primera visita.
              </p>
              <button
                type="button"
                onClick={() => setEnviado(false)}
                className="mt-2 text-sm font-medium text-senal underline-offset-4 hover:underline"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEnviado(true);
              }}
              className="grid gap-5 sm:grid-cols-2"
            >
              <label className="text-sm font-medium text-tinta">
                Nombre
                <input name="nombre" required autoComplete="name" className={campo} />
              </label>
              <label className="text-sm font-medium text-tinta">
                Empresa
                <input name="empresa" required autoComplete="organization" className={campo} />
              </label>
              <label className="text-sm font-medium text-tinta">
                Correo
                <input name="correo" type="email" required autoComplete="email" className={campo} />
              </label>
              <label className="text-sm font-medium text-tinta">
                Número de sedes
                <select name="sedes" defaultValue="1" className={campo}>
                  <option value="1">1</option>
                  <option value="2-5">De 2 a 5</option>
                  <option value="6+">6 o más</option>
                </select>
              </label>
              <label className="text-sm font-medium text-tinta sm:col-span-2">
                ¿Qué problema nota en su red?
                <textarea
                  name="mensaje"
                  rows={4}
                  placeholder="Por ejemplo: el sistema de ventas se vuelve lento a mediodía"
                  className={campo}
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-tinta px-6 py-3 text-sm font-semibold text-papel transition-opacity hover:opacity-85 sm:col-span-2 sm:justify-self-start"
              >
                Agendar diagnóstico
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
