import HeroSection from "@/components/landing/herosection";
import AboutSection from "@/components/landing/about";
import TracksSection from "@/components/landing/tracks";
import { Vortex } from "@/components/ui/vortex";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505]">

      {/* Vortex particle background */}
      <Vortex>

        {/* Global cosmic glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background: [
              "radial-gradient(ellipse 60% 45% at 50% 38%, rgba(220,38,38,.07) 0%, transparent 70%)",
              "radial-gradient(ellipse 45% 35% at 48% 44%, rgba(159,18,57,.05) 0%, transparent 60%)",
            ].join(", "),
          }}
        />

        {/* Noise texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Page sections */}
        <HeroSection />
        <AboutSection />
        <TracksSection />

      </Vortex>

    </main>
  );
}