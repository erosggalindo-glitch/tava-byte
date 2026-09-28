"use client";

import { useEffect, useState } from "react";

const terminal = [
  { delay: 1200, type: "cmd", text: "iniciar diagnóstico --completo" },
  { delay: 1800, type: "info", text: "→ analisando temperatura da CPU..." },
  { delay: 2400, type: "warn", text: "⚠ CPU 94°C — pasta térmica degradada" },
  { delay: 3000, type: "info", text: "→ verificando memória RAM..." },
  { delay: 3600, type: "ok", text: "✓ RAM estável — XMP desabilitado" },
  { delay: 4200, type: "info", text: "→ checando drivers de GPU..." },
  { delay: 4800, type: "warn", text: "⚠ driver desatualizado — v3.1 → 4.0" },
  { delay: 5400, type: "ok", text: "✓ diagnóstico concluído" },
];

const whatsappUrl =
  "https://wa.me/5575998942040?text=Olá!%20Gostaria%20de%20agendar%20um%20diagnóstico.";

export default function Hero() {
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    const timers = terminal.map((line, index) =>
      window.setTimeout(
        () => setVisible((current) => [...current, index]),
        line.delay,
      ),
    );

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  const color = (type: string) => {
    if (type === "warn") return "text-yellow-400";
    if (type === "ok") return "text-green-400";
    if (type === "cmd") return "text-white";
    return "text-zinc-500";
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(24,24,27,0.045) 1px,transparent 1px),linear-gradient(90deg,rgba(24,24,27,0.045) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12" aria-label="Navegação principal">
        <a href="#inicio" className="text-sm font-black uppercase tracking-widest text-zinc-950">
          Tava<span className="text-amber-600">Byte</span>
        </a>
        <a
          href={whatsappUrl}
          className="rounded-sm bg-yellow-400 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-zinc-950 transition-colors hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
        >
          Agendar diagnóstico
        </a>
      </nav>

      <div id="inicio" className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-8 md:grid-cols-2 md:px-12">
        <div className="flex flex-col">
          <span className="mb-7 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700">
            <span aria-hidden="true" className="block h-px w-5 bg-amber-600" />
            Santo Antônio de Jesus — BA
          </span>

          <h1 className="mb-6 font-black leading-[1.07] tracking-tight text-zinc-950" style={{ fontSize: "clamp(2.4rem,4.5vw,3.8rem)" }}>
            Seu PC não precisa<br />
            de gambiarra.<br />
            <span className="text-amber-600">Precisa de diagnóstico.</span>
          </h1>

          <p className="mb-10 max-w-md text-base leading-relaxed text-zinc-700">
            A maioria das assistências troca peça sem investigar.<br />
            A Tava Byte descobre a causa real — e resolve de vez.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsappUrl}
              className="inline-flex items-center gap-2 rounded-sm bg-yellow-400 px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:-translate-y-0.5 hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-400"
            >
              Agendar diagnóstico
              <span aria-hidden="true">→</span>
            </a>
            <a href="#servicos" className="flex items-center gap-1 text-sm font-semibold text-zinc-600 transition-colors hover:text-zinc-950">
              Ver serviços <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="mt-12 flex gap-8 border-t border-zinc-950/10 pt-8">
            {[
              { num: "24h", label: "Suporte emergencial" },
              { num: "100%", label: "Diagnóstico real" },
              { num: "0", label: "Gambiarras" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="mb-1 text-2xl font-black leading-none text-zinc-950">
                  {stat.num.replace(/[^0-9]/g, "")}
                  <span className="text-xl text-amber-600">{stat.num.replace(/[0-9]/g, "")}</span>
                </div>
                <div className="text-xs tracking-wide text-zinc-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[420px] overflow-hidden rounded-md border border-yellow-400/10 bg-zinc-900" aria-label="Exemplo de diagnóstico técnico">
            <div className="flex items-center gap-1.5 border-b border-white/5 bg-zinc-800/60 px-4 py-2.5">
              {["bg-zinc-700", "bg-zinc-600", "bg-zinc-700"].map((item, index) => (
                <span aria-hidden="true" key={index} className={`h-2.5 w-2.5 rounded-full ${item}`} />
              ))}
              <span className="ml-auto text-[10px] tracking-widest text-zinc-600">tavabyte — diagnóstico.sh</span>
            </div>

            <div className="space-y-0.5 p-5 font-mono text-[0.75rem] leading-[2]" aria-live="polite">
              {terminal.map((line, index) => (
                <div
                  key={line.text}
                  className={`flex gap-3 transition-opacity duration-300 ${visible.includes(index) ? "opacity-100" : "opacity-0"} ${color(line.type)}`}
                >
                  {line.type === "cmd" ? <span aria-hidden="true" className="select-none text-yellow-400">$</span> : <span aria-hidden="true" className="select-none pl-4 text-zinc-700"> </span>}
                  <span>{line.text}</span>
                </div>
              ))}
              <div aria-hidden="true" className="mt-1 flex gap-3 text-yellow-400">
                <span className="select-none">$</span>
                <span className="mt-1 inline-block h-3.5 w-2 animate-pulse bg-yellow-400" />
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                {["Diagnóstico", "Otimização", "Formatação", "Suporte remoto", "Upgrade"].map((badge, index) => (
                  <span key={badge} className={`rounded-sm border px-2 py-1 text-[10px] font-medium uppercase tracking-widest ${index < 2 ? "border-yellow-400/25 bg-yellow-400/5 text-yellow-400" : "border-white/8 text-zinc-600"}`}>
                    {badge}
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

