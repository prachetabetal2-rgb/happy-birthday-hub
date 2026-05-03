import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const IntroOverlay = () => {
  const [stage, setStage] = useState<"idle" | "opening" | "gone">("idle");

  useEffect(() => {
    if (stage === "opening") {
      const t = setTimeout(() => setStage("gone"), 1800);
      return () => clearTimeout(t);
    }
  }, [stage]);

  if (stage === "gone") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[hsl(350_40%_8%)] transition-opacity duration-1000 ${
        stage === "opening" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Curtain split */}
      <div
        className={`absolute inset-y-0 left-0 w-1/2 bg-[hsl(348_55%_18%)] transition-transform duration-[1600ms] ease-[cubic-bezier(.7,0,.3,1)] ${
          stage === "opening" ? "-translate-x-full" : "translate-x-0"
        }`}
      />
      <div
        className={`absolute inset-y-0 right-0 w-1/2 bg-[hsl(348_55%_18%)] transition-transform duration-[1600ms] ease-[cubic-bezier(.7,0,.3,1)] ${
          stage === "opening" ? "translate-x-full" : "translate-x-0"
        }`}
      />

      <button
        onClick={() => setStage("opening")}
        className="relative z-10 group flex flex-col items-center gap-6 text-center px-8"
      >
        <div className="relative">
          <Heart className="h-16 w-16 fill-[hsl(348_70%_60%)] text-[hsl(348_70%_60%)] animate-pulse-heart" />
          <span className="absolute inset-0 -z-10 blur-2xl bg-[hsl(348_70%_60%)] opacity-60 rounded-full" />
        </div>
        <p className="font-display text-5xl md:text-7xl text-[hsl(36_50%_95%)] italic">
          For you, my love
        </p>
        <span className="mt-4 inline-flex items-center gap-3 rounded-full border border-[hsl(38_70%_60%)]/40 px-8 py-3 text-sm uppercase tracking-[0.35em] text-[hsl(38_70%_70%)] transition-all group-hover:bg-[hsl(38_70%_60%)] group-hover:text-[hsl(350_40%_8%)]">
          Tap to open
        </span>
      </button>
    </div>
  );
};

export default IntroOverlay;
