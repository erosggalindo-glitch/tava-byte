"use client";
import { useEffect, useState } from "react";

const terminal = [
  { delay: 1200, type: "cmd",    text: "iniciar diagnóstico --completo" },
  { delay: 1800, type: "info",   text: "→ analisando temperatura da CPU..." },
  { delay: 2400, type: "warn",   text: "⚠ CPU 94°C — pasta térmica degradada" },
  { delay: 3000, type: "info",   text: "→ verificando memória RAM..." },
  { delay: 3600, type: "ok",     text: "✓ RAM estável — XMP desabilitado" },
  { delay: 4200, type: "info",   text: "→ checando drivers de GPU..." },
  { delay: 4800, type: "warn",   text: "⚠ driver desatualizado — v3.1 → 4.0" },
  { delay: 5400, type: "ok",     text: "✓ diagnóstico concluído" },
];

export default function Hero() {
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    terminal.forEach((line, i) => {
      const t = setTimeout(() => setVisible(v => [...v, i]), line.delay);
      return () => clearTimeout(t);
    });
  }, []);

  const color = (type: string) => {
    if (type === "warn") return "text-yellow-400";
    if (type === "ok")   return "text-green-400";
    if (type === "cmd")  return "text-white";
    return "text-zinc-500";
  };

  return (
    <section className="relative min-h-screen bg-zinc-950 overflow-hidden">

      {/* grid overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,196,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(245,196,0,0.03) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* NAV */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <span className="font-black text-white tracking-widest uppercase text-sm">
          Tava<span className="text-yellow-400">Byte</span>
        </span>
        <a
          href="https://wa.me/5575998942040"
          className="text-xs font-semibold tracking-widest uppercase bg-yellow-400 text-zinc-950 px-4 py-2 rounded-sm hover:bg-yellow-300 transition-colors"
        >
          Agendar diagnóstico
        </a>
      </nav>

      {/* CONTENT */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center px-6 md:px-12 pb-20 pt-8 max-w-7xl mx-auto">

        {/* LEFT */}
        <div className="flex flex-col">
          <span className="flex items-center gap-2 text-yellow-400 text-xs font-medium tracking-widest uppercase mb-7">
            <span className="block w-5 h-px bg-yellow-400" />
            Santo Antônio de Jesus — BA
          </span>

          <h1 className="font-black text-white leading-[1.07] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.4rem,4.5vw,3.8rem)" }}>
            Seu PC não precisa<br />
            de gambiarra.<br />
            <span className="text-yellow-400">Precisa de diagnóstico.</span>
          </h1>

          <p className="text-zinc-400 text-base leading-relaxed max-w-md mb-10">
            A maioria das assistências troca peça sem investigar.<br />
            A Tava Byte descobre a causa real — e resolve de vez.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="https://wa.me/5575998942040"
              className="inline-flex items-center gap-2 bg-yellow-400 text-zinc-950 font-semibold text-sm px-6 py-3 rounded-sm hover:bg-yellow-300 transition-all hover:-translate-y-0.5"
            >
              Agendar diagnóstico
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#servicos" className="text-zinc-500 text-sm font-medium hover:text-white transition-colors flex items-center gap-1">
              Ver serviços
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="flex gap-8 mt-12 pt-8 border-t border-white/[0.06]">
            {[
              { num: "24h",  label: "Suporte emergencial" },
              { num: "100%", label: "Diagnóstico real"    },
              { num: "0",    label: "Gambiarras"          },
            ].map(s => (
              <div key={s.label}>
                <div className="text-white font-black text-2xl leading-none mb-1">
                  {s.num.replace(/[^0-9]/g, "")}
                  <span className="text-yellow-400 text-xl">{s.num.replace(/[0-9]/g, "")}</span>
                </div>
                <div className="text-zinc-600 text-xs tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — terminal */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[420px] bg-zinc-900 border border-yellow-400/10 rounded-md overflow-hidden">
            <div className="bg-zinc-800/60 px-4 py-2.5 flex items-center gap-1.5 border-b border-white/5">
              {["bg-zinc-700","bg-zinc-600","bg-zinc-700"].map((c,i) => (
                <span key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
              ))}
              <span className="ml-auto text-zinc-600 text-[10px] tracking-widest">tavabyte — diagnóstico.sh</span>
            </div>

            <div className="p-5 font-mono text-[0.75rem] leading-[2] space-y-0.5">
              {terminal.map((line, i) => (
                <div
                  key={i}
                  className={`flex gap-3 transition-opacity duration-300 ${visible.includes(i) ? "opacity-100" : "opacity-0"} ${color(line.type)}`}
                >
                  {line.type === "cmd" && <span className="text-yellow-400 select-none">$</span>}
                  {line.type !== "cmd" && <span className="text-zinc-700 select-none pl-4"> </span>}
                  <span>{line.text}</span>
                </div>
              ))}

              {/* blinking cursor */}
              <div className="flex gap-3 text-yellow-400 mt-1">
                <span className="select-none">$</span>
                <span className="inline-block w-2 h-3.5 bg-yellow-400 animate-pulse mt-1" />
              </div>

              <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/5">
                {["Diagnóstico","Otimização","Formatação","Suporte remoto","Upgrade"].map((b, i) => (
                  <span
                    key={b}
                    className={`text-[10px] font-medium tracking-widest uppercase px-2 py-1 rounded-sm border ${
                      i < 2
                        ? "text-yellow-400 border-yellow-400/25 bg-yellow-400/5"
                        : "text-zinc-600 border-white/8"
                    }`}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
