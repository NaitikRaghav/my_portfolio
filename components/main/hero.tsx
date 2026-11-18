
import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <section className="relative isolate min-h-screen w-full overflow-hidden">

      {/* BLACK HOLE — TOP RIGHT ATMOSPHERIC BACKGROUND */}
      <div
        className="pointer-events-none absolute -right-[260px] -top-[260px] z-0 h-[760px] w-[1050px] opacity-[0.32] md:-right-[180px] md:-top-[300px]"
        aria-hidden="true"
      >
        
        <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="h-full w-full object-cover"
  style={{
    mixBlendMode: "screen",
    maskImage:
      "radial-gradient(ellipse at center, black 20%, transparent 72%)",
    WebkitMaskImage:
      "radial-gradient(ellipse at center, black 20%, transparent 72%)",
  }}
>
  <source src="/videos/blackhole.mp4" type="video/mp4" />
  <source src="/videos/blackhole.webm" type="video/webm" />
</video>
      </div>

      {/* SUBTLE SPACE OVERLAY */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-[#030014]/10 to-[#030014]" />

      {/* HERO CONTENT */}
      <div className="relative z-10">
        <HeroContent />
      </div>

    </section>
  );
};
