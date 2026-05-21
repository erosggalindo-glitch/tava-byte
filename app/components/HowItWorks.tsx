const steps = [
  {
    num: "01",
    title: "Você explica o problema",
    desc: "Travamento, lentidão, tela azul, superaquecimento. Qualquer que seja — sem julgamento, sem pergunta técnica difícil.",
  },
  {
    num: "02",
    title: "A Tava Byte investiga",
    desc: "Diagnóstico profundo: temperatura, memória, drivers, BIOS, rede. Buscamos a causa, não o sintoma.",
  },
  {
    num: "03",
    title: "Você entende o que está acontecendo",
    desc: "Explicamos em linguagem simples. O que está errado, por quê, e o que precisa ser feito — sem enrolação.",
  },
  {
    num: "04",
    title: "O problema é resolvido",
    desc: "Solução aplicada com técnica e transparência. Você sai sabendo o que foi feito e por quê funcionou.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-zinc-950 py-24 px-6 md:px-12 border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto">

        <div className="mb-14">
          <span className="flex items-center gap-2 text-yellow-400 text-xs font-medium tracking-widest uppercase mb-4">
            <span className="block w-5 h-px bg-yellow-400" />
            Como funciona
          </span>
          <h2 className="text-white font-black text-4xl md:text-5xl leading-tight tracking-tight">
            Atendimento transparente,<br />
            <span className="text-yellow-400">do início ao fim.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.04]">
          {steps.map((s, i) => (
            <div key={s.num} className="bg-zinc-950 p-8 relative group hover:bg-yellow-400/[0.03] transition-colors">
              {/* connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-px h-6 bg-yellow-400/10" />
              )}
              <span className="block text-yellow-400/20 font-black text-5xl leading-none mb-6 select-none group-hover:text-yellow-400/40 transition-colors">
                {s.num}
              </span>
              <h3 className="text-white font-bold text-base mb-3 leading-snug">{s.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
