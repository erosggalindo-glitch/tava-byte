const steps = [
  {
    number: "01",
    title: "Você explica o problema",
    text: "Conte o que está acontecendo e quando os sintomas começaram.",
  },
  {
    number: "02",
    title: "Nós investigamos",
    text: "Hardware, sistema, temperaturas e desempenho são analisados com método.",
  },
  {
    number: "03",
    title: "Você decide com clareza",
    text: "Apresentamos a causa, as opções e o valor antes de qualquer serviço.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white px-6 py-24 text-zinc-950 md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-yellow-600">Como funciona</p>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_2fr]">
          <h2 className="text-3xl font-black tracking-tight md:text-4xl">Sem chute.<br />Sem surpresa.</h2>
          <ol className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <li key={step.number} className="border-t-2 border-zinc-950 pt-5">
                <span className="font-mono text-xs font-bold text-yellow-600">{step.number}</span>
                <h3 className="mb-3 mt-4 text-lg font-bold">{step.title}</h3>
                <p className="text-sm leading-6 text-zinc-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

