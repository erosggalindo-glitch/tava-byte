const reasons = [
  "Explicação clara, sem linguagem complicada",
  "Orçamento apresentado antes da execução",
  "Recomendação baseada no seu uso e orçamento",
  "Atendimento local e suporte remoto",
];

export default function WhyUs() {
  return (
    <section className="bg-yellow-400 px-6 py-24 text-zinc-950 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em]">Por que a Tava Byte</p>
          <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight md:text-5xl">Tecnologia bem cuidada começa com transparência.</h2>
        </div>
        <ul className="grid gap-3">
          {reasons.map((reason) => (
            <li key={reason} className="flex items-center gap-4 border-b border-zinc-950/20 py-4 font-semibold">
              <span aria-hidden="true" className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-zinc-950 text-sm text-yellow-400">✓</span>
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

