import { Caso } from "@/components/site/caso";
import { Contacto } from "@/components/site/contacto";
import { Encabezado } from "@/components/site/encabezado";
import { Metodo } from "@/components/site/metodo";
import { Pie } from "@/components/site/pie";
import { Portada } from "@/components/site/portada";
import { Preguntas } from "@/components/site/preguntas";
import { Servicios } from "@/components/site/servicios";

export default function Home() {
  return (
    <>
      <Encabezado />
      <main>
        <Portada />
        <Servicios />
        <Metodo />
        <Caso />
        <Preguntas />
        <Contacto />
      </main>
      <Pie />
    </>
  );
}
