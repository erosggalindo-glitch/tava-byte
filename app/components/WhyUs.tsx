const diferenciais = [
  {
    num: "01",
    title: "Diagnóstico antes de solução",
    desc: "Nunca trocamos peça sem entender o problema. Investigamos causa raiz: BIOS, drivers, temperatura, memória, rede.",
  },
  {
    num: "02",
    title: "Você entende tudo",
    desc: "Explicamos o problema em linguagem simples. Você decide com informação — sem pressão, sem enrolação.",
  },
  {
    num: "03",
    title: "Zero placebo técnico",
    desc: "Sem tweaks inúteis, sem software milagroso, sem promessa de +200% de FPS. Só o que tem evidência.",
  },
  {
    num: "04",
    title: "Atendimento híbrido",
    desc: "Presencial, domiciliar ou remoto. Suporte emergencial 24h para quando não pode esperar.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-zinc-900 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <span className="flex items-center gap-2 text-yellow-400 text-xs font-medium tracking-widest uppercase mb-4">
            <span className="block w-5 h-px bg-yellow-400" />
            Por que a Tava Byte
          </span>
          <h2 className="text-white font-black text-4xl md:text-5xl leading-tight tracking-tight mb-6">
            Menos gambiarra.<br />
            <span className="text-yellow-400">Mais inteligência.</span>
          </h2>
          <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-md">
            O mercado vive de tentativa e erro. Troca peça, cobra, problema volta.
            A Tava Byte nasceu pra mudar isso — diagnóstico real, explicação clara, resolução de vez.
          </p>
          <a
            href="https://wa.me/5575998942040"
            className="inline-flex items-center gap-2 border border-yellow-400/40 text-yellow-400 text-sm font-semibold px-6 py-3 rounded-sm hover:bg-yellow-400/10 transition-colors"
          >
            Agendar diagnóstico
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6">
          {diferenciais.map((d) => (
            <div key={d.num} className="flex gap-5 group">
              <span className="text-yellow-400/30 font-black text-2xl leading-none pt-0.5 select-none group-hover:text-yellow-400/60 transition-colors">
                {d.num}
              </span>
              <div>
                <h3 className="text-white font-bold text-base mb-1.5">{d.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
