const services = [
  { title: "Diagnóstico completo", text: "Investigação técnica para encontrar a origem de travamentos, lentidão, aquecimento e falhas." },
  { title: "Otimização gamer", text: "Ajustes responsáveis para melhorar estabilidade, temperatura, latência e aproveitamento do hardware." },
  { title: "Formatação profissional", text: "Sistema limpo, drivers corretos, atualizações e configuração pronta para o seu uso." },
  { title: "Suporte remoto", text: "Atendimento para problemas de software, configurações, erros e orientação sem sair de casa." },
  { title: "Upgrade consciente", text: "Recomendação de peças compatíveis com seu computador, objetivo e orçamento." },
  { title: "Manutenção preventiva", text: "Limpeza, revisão térmica e testes para reduzir riscos e prolongar a vida útil do equipamento." },
];

export default function Services() {
  return (
    <section id="servicos" className="scroll-mt-6 bg-amber-50 px-6 py-24 text-zinc-950 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-700">Serviços</p>
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">Soluções para o problema real.</h2>
          <p className="mt-5 leading-7 text-zinc-600">Cada serviço começa com uma análise clara. Você entende o que será feito e por quê.</p>
        </div>

        <div className="grid border-l border-t border-zinc-950/15 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="border-b border-r border-zinc-950/15 bg-white/40 p-7 transition-colors hover:bg-yellow-400/15">
              <span className="font-mono text-xs font-bold text-amber-700">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mb-3 mt-8 text-xl font-bold">{service.title}</h3>
              <p className="text-sm leading-6 text-zinc-600">{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

