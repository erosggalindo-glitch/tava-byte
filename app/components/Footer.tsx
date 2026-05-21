export default function Footer() {
  return (
    <>
      {/* CTA BANNER */}
      <section className="bg-yellow-400 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-zinc-950/50 text-xs font-semibold tracking-widest uppercase mb-2">Diagnóstico antes de solução</p>
            <h2 className="text-zinc-950 font-black text-3xl md:text-4xl leading-tight tracking-tight">
              Seu PC merece análise.<br />Não chute.
            </h2>
          </div>
          <a
            href="https://wa.me/5575998942040"
            className="shrink-0 inline-flex items-center gap-2 bg-zinc-950 text-yellow-400 font-semibold text-sm px-8 py-4 rounded-sm hover:bg-zinc-800 transition-colors"
          >
            Falar agora no WhatsApp
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 border-t border-white/[0.04] py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-black text-white tracking-widest uppercase text-sm">
              Tava<span className="text-yellow-400">Byte</span>
            </span>
            <p className="text-zinc-600 text-xs mt-1">Santo Antônio de Jesus — BA · Atendimento local e remoto</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-zinc-600 text-xs">
            <span>(75) 99894-2040</span>
            <span className="hidden md:block">·</span>
            <a href="https://wa.me/5575998942040" className="hover:text-yellow-400 transition-colors">WhatsApp</a>
            <span className="hidden md:block">·</span>
            <span>Diagnóstico técnico · Performance consciente</span>
          </div>
        </div>
      </footer>
    </>
  );
}
