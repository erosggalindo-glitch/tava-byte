const whatsappUrl =
  "https://wa.me/5575998942040?text=Olá!%20Gostaria%20de%20agendar%20um%20diagnóstico.";

export default function Footer() {
  return (
    <footer className="bg-white px-6 pb-8 pt-20 text-zinc-950 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-yellow-400">Seu computador precisa de ajuda?</p>
            <h2 className="max-w-2xl text-4xl font-black tracking-tight md:text-6xl">Vamos descobrir o que está acontecendo.</h2>
          </div>
          <a href={whatsappUrl} className="shrink-0 rounded-sm bg-yellow-400 px-6 py-3 font-bold text-zinc-950 transition-colors hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400">
            Falar no WhatsApp
          </a>
        </div>

        <div className="flex flex-col gap-3 border-t border-zinc-950/10 pt-6 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p><span className="font-black uppercase tracking-widest text-zinc-950">Tava<span className="text-amber-600">Byte</span></span> · Santo Antônio de Jesus — BA</p>
          <p>© {new Date().getFullYear()} Tava Byte. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

