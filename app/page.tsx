export default function TavaByte() {
  const services = [
    {
      title: 'Diagnóstico Técnico',
      desc: 'Identificamos a causa real do problema antes de qualquer solução. Nada de tentativa e erro.'
    },
    {
      title: 'Formatação Profissional',
      desc: 'Instalação limpa do Windows com drivers, programas essenciais e configuração correta do sistema.'
    },
    {
      title: 'Otimização Gamer',
      desc: 'Ajustes profissionais para melhorar FPS, reduzir travamentos e diminuir input lag.'
    },
    {
      title: 'Suporte Remoto 24h',
      desc: 'Atendimento remoto rápido para problemas de Windows, internet, programas e desempenho.'
    },
    {
      title: 'Notebook Gamer',
      desc: 'Limpeza interna, troca de pasta térmica, thermal pads e controle de temperatura.'
    },
    {
      title: 'Upgrade Inteligente',
      desc: 'Indicação de upgrades com foco em desempenho real e custo-benefício.'
    },
    {
      title: 'Rede e Internet',
      desc: 'Correção de ping alto, Wi‑Fi instável, DNS e problemas de conexão.'
    },
    {
      title: 'Troca de Pasta Térmica',
      desc: 'Aplicação de pasta térmica premium para melhorar refrigeração e estabilidade.'
    },
    {
      title: 'Troca de Thermal Pads',
      desc: 'Substituição de thermal pads para melhorar dissipação térmica em notebooks e GPUs.'
    },
    {
      title: 'Limpeza Completa',
      desc: 'Desmontagem e limpeza interna do equipamento para remover poeira e melhorar temperaturas.'
    },
    {
      title: 'Limpeza de Ventoinhas',
      desc: 'Limpeza e lubrificação de fans para reduzir ruído e melhorar refrigeração.'
    },
    {
      title: 'Atualização de BIOS',
      desc: 'Atualização segura da BIOS para melhorar estabilidade, compatibilidade e desempenho.'
    },
    {
      title: 'Backup de Dados',
      desc: 'Backup e organização de arquivos importantes antes de manutenção ou formatação.'
    },
    {
      title: 'Configuração de SSD',
      desc: 'Otimização e instalação correta de SSD para melhorar velocidade e estabilidade do sistema.'
    },
    {
      title: 'Configuração de RAM e XMP',
      desc: 'Configuração de memória RAM e ativação de XMP para melhor desempenho.'
    },
    {
      title: 'Diagnóstico de Temperatura',
      desc: 'Análise de superaquecimento, thermal throttling e estabilidade do equipamento.'
    },
    {
      title: 'Instalação de Drivers',
      desc: 'Instalação e atualização de drivers essenciais para estabilidade e desempenho.'
    },
    {
      title: 'Recuperação de Arquivos',
      desc: 'Tentativa de recuperação de arquivos apagados ou sistemas com falhas.'
    },
    {
      title: 'Diagnóstico de Tela Azul',
      desc: 'Análise de erros críticos do Windows, travamentos e reinicializações.'
    },
    {
      title: 'PC Não Dá Vídeo',
      desc: 'Diagnóstico de memória RAM, placa de vídeo, BIOS e falhas de inicialização.'
    },
    {
      title: 'Instalação de SSD',
      desc: 'Upgrade para SSD com instalação correta e migração segura do sistema.'
    },
    {
      title: 'Dual Channel e RAM',
      desc: 'Configuração correta de memória RAM para melhor desempenho e estabilidade.'
    },
    {
      title: 'Configuração de Áudio',
      desc: 'Configuração de headset, microfone e múltiplas saídas de som no Windows.'
    },
    {
      title: 'Diagnóstico de Internet',
      desc: 'Análise de perda de pacote, ping alto e instabilidade de conexão.'
    },
    {
      title: 'Configuração Gamer',
      desc: 'Ajustes para reduzir input lag, melhorar estabilidade e otimizar jogos.'
    },
    {
      title: 'Monitoramento de Temperatura',
      desc: 'Análise de CPU, GPU e sistema para evitar superaquecimento e thermal throttling.'
    },
    {
      title: 'Configuração de BIOS',
      desc: 'Ajustes avançados de BIOS para estabilidade, compatibilidade e desempenho.'
    },
    {
      title: 'Limpeza de Sistema',
      desc: 'Remoção de arquivos temporários, otimização e organização do Windows.'
    },
    {
      title: 'Migração de Sistema',
      desc: 'Transferência de Windows e arquivos de HD para SSD com segurança.'
    },
    {
      title: 'Instalação de Programas',
      desc: 'Instalação de programas essenciais, drivers e utilitários importantes.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black overflow-hidden">

      <section className="relative border-b border-zinc-200">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,204,0,0.18),transparent_60%)]" />

        <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

          <div className="max-w-3xl">

            <span className="text-yellow-400 uppercase tracking-[0.3em] font-semibold text-sm">
              Tava Byte
            </span>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mt-6">
              Seu PC não precisa de gambiarra.
              <span className="text-yellow-400"> Precisa de diagnóstico.</span>
            </h1>

            <p className="mt-8 text-zinc-700 text-xl leading-relaxed">
              Diagnóstico técnico, otimização profissional e suporte especializado
              para computadores e notebooks.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-yellow-400 hover:bg-yellow-300 transition text-black px-8 py-4 rounded-2xl font-black shadow-[0_0_35px_rgba(255,204,0,0.25)]">
                WhatsApp • (75) 99894-2040
              </button>

              <button className="border border-yellow-400/30 hover:border-yellow-400 transition px-8 py-4 rounded-2xl text-zinc-800 font-semibold">
                Ver serviços
              </button>
            </div>

          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="max-w-3xl">
          <h2 className="text-4xl font-black text-zinc-900">
            Como funciona o atendimento
          </h2>

          <p className="text-zinc-700 mt-4 text-lg">
            Atendimento técnico transparente, direto e focado em resolver o problema real.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          {[
            'Você explica o problema',
            'A Tava Byte identifica a causa',
            'Você entende o que está acontecendo',
            'O problema é resolvido'
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-50 border border-zinc-200 shadow-sm rounded-3xl p-8"
            >
              <div className="text-yellow-400 text-4xl font-black text-zinc-900">
                0{index + 1}
              </div>

              <p className="mt-6 text-zinc-700 text-lg leading-relaxed">
                {item}
              </p>
            </div>
          ))}

        </div>
      </section>

      <section className="bg-zinc-50 border-y border-zinc-200">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="max-w-3xl">
            <h2 className="text-4xl font-black text-zinc-900">
              Serviços especializados
            </h2>

            <p className="text-zinc-700 mt-4 text-lg">
              Soluções profissionais para desempenho, estabilidade e manutenção.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-16">

            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white border border-zinc-200 hover:border-yellow-400 transition shadow-sm hover:shadow-lg rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold text-zinc-900">
                  {service.title}
                </h3>

                <p className="mt-5 text-zinc-700 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <span className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">
              Diferenciais
            </span>

            <h2 className="text-5xl font-black text-zinc-900 mt-4 leading-tight">
              Informática explicada de forma simples.
            </h2>

            <p className="text-zinc-700 text-lg mt-8 leading-relaxed">
              A Tava Byte não trabalha apenas trocando peças.
              O foco é entender a causa real do problema,
              explicar de forma clara e entregar uma solução consciente.
            </p>
          </div>

          <div className="space-y-5">
            {[
              'Diagnóstico real sem enrolação',
              'Atendimento remoto 24 horas',
              'Explicação clara para o cliente',
              'Otimização consciente e sem placebo',
              'Suporte gamer e profissional'
            ].map((item) => (
              <div
                key={item}
                className="bg-white border border-zinc-200 shadow-sm rounded-2xl px-6 py-5 text-zinc-700"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      <footer className="border-t border-zinc-200">

        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-6">

          <div>
            <h3 className="text-2xl font-black text-yellow-400">
              Tava Byte
            </h3>

            <p className="text-zinc-700 mt-3">
              Santo Antônio de Jesus - BA
            </p>

            <p className="text-zinc-200 mt-2">
              Atendimento local e remoto
            </p>
          </div>

          <div>
            <p className="text-zinc-200 text-sm uppercase tracking-widest">
              Contato
            </p>

            <p className="text-zinc-900 text-xl font-bold mt-3">
              (75) 99894-2040
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
