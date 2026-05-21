import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tava Byte — Diagnóstico Técnico e Performance Consciente",
  description:
    "Diagnóstico técnico real para computadores e notebooks em Santo Antônio de Jesus — BA. Suporte remoto 24h, otimização gamer, formatação profissional.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Services />
      <WhyUs />
      <Footer />
    </main>
  );
}
