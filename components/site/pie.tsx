export function Pie() {
  return (
    <footer className="border-t border-linea px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-tenue sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2">
          <span aria-hidden className="size-2 rounded-full bg-senal" />
          <span className="font-display font-extrabold text-tinta">Nodal</span>
          <span>© 2026</span>
        </p>
        <p className="font-mono text-xs">
          Sitio de demostración. La empresa, sus clientes y las cifras son ficticios.
        </p>
      </div>
    </footer>
  );
}
