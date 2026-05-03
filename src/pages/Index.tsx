import { Heart, Sparkles } from "lucide-react";
import Confetti from "@/components/Confetti";
import PhotoAlbum from "@/components/PhotoAlbum";
import IntroOverlay from "@/components/IntroOverlay";
import HeartCursor from "@/components/HeartCursor";
import BirthdayCake from "@/components/BirthdayCake";
import Timeline from "@/components/Timeline";
import heroBg from "@/assets/hero-bg.jpg";
import photo2 from "@/assets/photo-2.jpg";

const reasons = [
  { title: "Your laugh", text: "It turns ordinary days into the best ones." },
  { title: "Your kindness", text: "The way you care makes the world softer." },
  { title: "Your mind", text: "I love getting lost in conversations with you." },
  { title: "Your hugs", text: "Home isn't a place — it's your arms." },
  { title: "Your dreams", text: "I'll cheer for every single one of them." },
  { title: "Just you", text: "Exactly as you are. Always." },
];

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <IntroOverlay />
      <HeartCursor />
      <Confetti />

      {/* HERO — cinematic dark */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroBg}
            alt=""
            className="h-full w-full object-cover"
            width={1920}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(350_40%_8%)]/70 via-[hsl(350_40%_8%)]/60 to-background" />
        </div>

        <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-[hsl(38_70%_60%)]/40 bg-[hsl(38_70%_60%)]/10 px-5 py-2 text-xs uppercase tracking-[0.4em] text-[hsl(38_70%_75%)] backdrop-blur-md">
            <Sparkles className="h-3 w-3" /> A celebration of you
          </p>
          <h1 className="font-display text-7xl leading-[0.95] md:text-9xl text-[hsl(36_50%_98%)]">
            Happy
            <span className="block italic text-gradient-romance">Birthday</span>
            <span className="block text-5xl md:text-7xl mt-4 text-[hsl(36_50%_98%)]/90">
              my forever
            </span>
          </h1>
          <p className="mx-auto mt-10 max-w-xl text-lg text-[hsl(36_50%_98%)]/70 md:text-xl">
            Today the universe celebrates the soul who made mine come alive.
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-[hsl(38_70%_60%)]/40" />
            <Heart className="h-5 w-5 fill-[hsl(348_70%_60%)] text-[hsl(348_70%_60%)] animate-pulse-heart" />
            <span className="font-display text-xl italic text-[hsl(38_70%_75%)]">
              Yours, always
            </span>
            <Heart className="h-5 w-5 fill-[hsl(348_70%_60%)] text-[hsl(348_70%_60%)] animate-pulse-heart" />
            <span className="h-px w-16 bg-[hsl(38_70%_60%)]/40" />
          </div>

          <div className="mt-16 animate-bounce">
            <span className="text-[hsl(36_50%_98%)]/50 text-sm tracking-widest">scroll ↓</span>
          </div>
        </div>
      </section>

      {/* LOVE NOTE — magazine style */}
      <section className="relative z-10 px-6 py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-2xl" />
            <img
              src={photo2}
              alt="Us"
              loading="lazy"
              className="rounded-3xl shadow-romance w-full object-cover aspect-[4/5]"
            />
            <span className="absolute -bottom-4 -right-4 rounded-full bg-card px-6 py-3 shadow-romance font-display italic text-lg">
              you & me ♥
            </span>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-primary/80">A letter</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              For the one who <span className="italic text-gradient-romance">changed everything</span>
            </h2>
            <p className="mt-8 font-display text-xl italic leading-relaxed text-foreground/90">
              "From the very first day, you've felt like the answer to a question
              I'd been quietly asking my whole life. Thank you for your patience,
              your warmth, your terrible jokes, and your enormous heart."
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              I hope this year brings you everything you've been dreaming of —
              and I can't wait to be there for every single moment of it. Today,
              tomorrow, and every birthday after.
            </p>
            <p className="mt-8 font-display text-2xl italic text-primary">— With all my love</p>
          </div>
        </div>
      </section>

      <PhotoAlbum />

      <Timeline />

      {/* REASONS */}
      <section className="relative z-10 px-6 py-24 bg-gradient-soft">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-primary/80">
              Six of a million
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">
              Reasons I <span className="italic text-gradient-romance">adore</span> you
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r, i) => (
              <article
                key={r.title}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card p-8 shadow-soft transition-all hover:-translate-y-2 hover:shadow-romance"
                style={{ animation: `fade-in-up 0.7s ease-out ${i * 0.08}s both` }}
              >
                <span className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <span className="font-display text-5xl italic text-primary/20">0{i + 1}</span>
                  <h3 className="mt-2 font-display text-2xl">{r.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{r.text}</p>
                  <Heart className="mt-6 h-4 w-4 fill-primary text-primary" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WISH — interactive cake */}
      <section className="relative z-10 px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Time to wish</p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl">
            Make a <span className="italic text-gradient-romance">wish</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Close your eyes, picture it clearly, then blow the candles. I'll be
            right here — ready to spend every candle, every cake, every year with you.
          </p>

          <div className="mt-16 flex justify-center">
            <BirthdayCake />
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border/40 py-10 text-center">
        <p className="font-display italic text-lg text-foreground/70">
          Made with <Heart className="mx-1 inline h-4 w-4 fill-primary text-primary animate-pulse-heart" /> just for you
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Forever yours
        </p>
      </footer>
    </main>
  );
};

export default Index;
