const services = [
  {
    title: "Diagnóstico Técnico",
    desc: "Identificamos a causa real do problema antes de qualquer solução. Nada de tentativa e erro.",
  },
  {
    title: "Formatação Profissional",
    desc: "Instalação limpa do Windows com drivers, programas essenciais e configuração correta do sistema.",
  },
  {
    title: "Otimização Gamer",
    desc: "Ajustes profissionais para melhorar FPS, reduzir travamentos e diminuir input lag.",
  },
  {
    title: "Suporte Remoto 24h",
    desc: "Atendimento remoto rápido para problemas de Windows, internet, programas e desempenho.",
  },
  {
    title: "Notebook Gamer",
    desc: "Limpeza interna, troca de pasta térmica, thermal pads e controle de temperatura.",
  },
  {
    title: "Upgrade Inteligente",
    desc: "Indicação de upgrades com foco em desempenho real e custo-benefício.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <p className="text-yellow-500 font-bold uppercase tracking-widest">
          Tava Byte
        </p>

        <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
          Seu PC não precisa de gambiarra.
          <span className="text-yellow-500"> Precisa de diagnóstico.</span>
        </h1>

        <p className="mt-8 text-xl text-zinc-700 max-w-3xl">
          Diagnóstico técnico, otimização profissional e suporte especializado
          para computadores e notebooks.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://wa.me/5575998942040"
            className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-2xl font-black transition"
          >
            WhatsApp • (75) 99894-2040
          </a>

          <a
            href="#servicos"
            className="border border-zinc-300 px-8 py-4 rounded-2xl font-semibold hover:border-yellow-400 transition"
          >
            Ver serviços
          </a>
        </div>
      </section>

      <section className="px-6 py-20 bg-zinc-50 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black">Como funciona o atendimento</h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              "Você explica o problema",
              "A Tava Byte identifica a causa",
              "Você entende o que está acontecendo",
              "O problema é resolvido",
            ].map((item, index) => (
              <div
                key={item}
                className="bg-white border border-zinc-200 rounded-3xl p-8 shadow-sm"
              >
                <div className="text-yellow-500 text-4xl font-black">
                  0{index + 1}
                </div>
                <p className="mt-5 text-zinc-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="servicos" className="px-6 py-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black">Serviços especializados</h2>

        <p className="text-zinc-600 mt-4 text-lg">
          Soluções profissionais para desempenho, estabilidade e manutenção.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-14">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-zinc-200 hover:border-yellow-400 transition rounded-3xl p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-zinc-900">
                {service.title}
              </h3>

              <p className="mt-4 text-zinc-700 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-yellow-400 uppercase tracking-widest font-bold">
              Diferenciais
            </p>

            <h2 className="text-5xl font-black mt-4">
              Informática explicada de forma simples.
            </h2>

            <p className="text-zinc-300 text-lg mt-8">
              A Tava Byte não trabalha apenas trocando peças. O foco é entender
              a causa real do problema, explicar de forma clara e entregar uma
              solução consciente.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Diagnóstico real sem enrolação",
              "Atendimento remoto 24 horas",
              "Explicação clara para o cliente",
              "Otimização consciente e sem placebo",
              "Suporte gamer e profissional",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/10 border border-white/10 rounded-2xl px-6 py-5"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-6 py-12 border-t border-zinc-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black">
              Tava <span className="text-yellow-500">Byte</span>
            </h3>
            <p className="text-zinc-600 mt-2">
              Santo Antônio de Jesus - BA
            </p>
            <p className="text-zinc-500">Atendimento local e remoto</p>
          </div>

          <div>
            <p className="text-zinc-500 uppercase text-sm tracking-widest">
              Contato
            </p>
            <p className="text-zinc-900 text-xl font-bold mt-2">
              (75) 99894-2040
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}