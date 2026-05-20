export default function TavaByte() {
  const services = [
    { title: "Diagnóstico Técnico", desc: "Identificamos a causa real do problema antes de qualquer solução. Nada de tentativa e erro." },
    { title: "Formatação Profissional", desc: "Instalação limpa do Windows com drivers, programas essenciais e configuração correta." },
    { title: "Otimização Gamer", desc: "Ajustes para melhorar FPS, reduzir travamentos e diminuir input lag." },
    { title: "Suporte Remoto 24h", desc: "Atendimento remoto rápido para Windows, internet, programas e desempenho." },
    { title: "Notebook Gamer", desc: "Limpeza interna, pasta térmica, thermal pads e controle de temperatura." },
    { title: "Upgrade Inteligente", desc: "Indicação de peças com foco em desempenho real e custo-benefício." },
    { title: "Rede e Internet", desc: "Correção de ping alto, Wi-Fi instável, DNS e problemas de conexão." },
    { title: "Atualização de BIOS", desc: "Atualização segura para melhorar estabilidade, compatibilidade e desempenho." },
    { title: "Backup de Dados", desc: "Backup e organização de arquivos importantes antes da manutenção." },
    { title: "Configuração de RAM e XMP", desc: "Ajuste de memória RAM para melhor desempenho e estabilidade." },
    { title: "Tela Azul do Windows", desc: "Análise de erros críticos, travamentos e reinicializações." },
    { title: "PC Não Dá Vídeo", desc: "Diagnóstico de RAM, placa de vídeo, BIOS e falhas de inicialização." },
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="relative overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.28),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <span className="text-sm font-bold uppercase tracking-[0.35em] text-yellow-500">
            Tava Byte
          </span>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Seu PC não precisa de gambiarra.
            <span className="text-yellow-500"> Precisa de diagnóstico.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-700">
            Diagnóstico técnico, otimização profissional e suporte especializado
            para computadores e notebooks.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
  href="https://wa.me/5575998942040"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-2xl bg-yellow-400 px-8 py-4 text-lg font-black text-black shadow-lg shadow-yellow-400/30"
>
  WhatsApp • (75) 99894-2040
</a>

            <a
  href="#servicos"
  className="rounded-2xl border border-zinc-300 px-8 py-4 font-bold text-zinc-800 hover:border-yellow-400"
>
  Ver serviços
</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl font-black">Como funciona o atendimento</h2>
        <p className="mt-4 text-lg text-zinc-700">
          Atendimento transparente, direto e focado em resolver a causa real.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {[
            "Você explica o problema",
            "A Tava Byte identifica a causa",
            "Você entende o que está acontecendo",
            "O problema é resolvido",
          ].map((item, index) => (
            <div key={item} className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm">
              <div className="text-4xl font-black text-yellow-500">0{index + 1}</div>
              <p className="mt-6 text-lg font-semibold text-zinc-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="servicos" className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="text-4xl font-black">Serviços especializados</h2>
          <p className="mt-4 text-lg text-zinc-700">
            Soluções para desempenho, estabilidade, manutenção e suporte técnico.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:border-yellow-400 hover:shadow-lg"
              >
                <h3 className="text-2xl font-black text-zinc-950">{service.title}</h3>
                <p className="mt-4 leading-relaxed text-zinc-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-yellow-500">
              Diferenciais
            </span>

            <h2 className="mt-4 text-5xl font-black leading-tight">
              Informática explicada de forma simples.
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-zinc-700">
              A Tava Byte não trabalha apenas trocando peças. O foco é entender
              a causa real, explicar com clareza e entregar uma solução consciente.
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
              <div key={item} className="rounded-2xl border border-zinc-200 bg-white p-5 font-semibold text-zinc-800 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-10 md:flex-row">
          <div>
            <h3 className="text-2xl font-black text-yellow-500">Tava Byte</h3>
            <p className="mt-2 text-zinc-700">Santo Antônio de Jesus - BA</p>
            <p className="mt-1 text-zinc-600">Atendimento local e remoto</p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">
              Contato
            </p>
            <p className="mt-2 text-xl font-black text-zinc-950">
              (75) 99894-2040
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
