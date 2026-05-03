import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Confetti from "@/components/Confetti";
import PhotoAlbum from "@/components/PhotoAlbum";
import hero from "@/assets/hero.jpg";

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
    <main className="relative min-h-screen overflow-hidden bg-gradient-soft">
      <Confetti />

      {/* HERO */}
      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
        <div className="absolute inset-0 -z-10">
          <img
            src={hero}
            alt="Romantic candlelit birthday cake with rose petals"
            className="h-full w-full object-cover opacity-30"
            width={1536}
            height={1024}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        <div className="mx-auto max-w-3xl text-center animate-fade-in-up">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-primary/80">
            A little corner of the internet · just for you
          </p>
          <h1 className="font-display text-6xl leading-[1.05] md:text-8xl">
            Happy Birthday,
            <span className="block italic text-gradient-romance">my love</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">
            Today the whole world gets to celebrate the person who makes mine
            brighter. Here are a few reasons I'm so lucky it's yours.
          </p>
          <div className="mt-10 flex items-center justify-center gap-3">
            <Heart className="h-5 w-5 fill-primary text-primary animate-pulse-heart" />
            <span className="font-display text-xl italic text-primary">
              Yours, always
            </span>
            <Heart className="h-5 w-5 fill-primary text-primary animate-pulse-heart" />
          </div>
        </div>
      </section>

      {/* LOVE NOTE */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-2xl rounded-[2rem] bg-card p-10 text-center shadow-romance md:p-16">
          <h2 className="font-display text-4xl md:text-5xl text-gradient-romance">
            A note for you
          </h2>
          <p className="mt-8 font-display text-xl italic leading-relaxed text-foreground/90 md:text-2xl">
            “From the very first day, you've felt like the answer to a question
            I'd been quietly asking my whole life. Thank you for your patience,
            your warmth, your terrible jokes, and your enormous heart. I hope
            this year brings you everything you've been dreaming of —
            and I can't wait to be there for all of it.”
          </p>
          <div className="mx-auto mt-10 h-px w-16 bg-primary/40" />
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            With all my love
          </p>
        </div>
      </section>

      <PhotoAlbum />

      {/* REASONS */}
      <section className="relative z-10 px-6 py-24">
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
                className="group rounded-3xl border border-border/60 bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-romance"
                style={{ animation: `fade-in-up 0.7s ease-out ${i * 0.08}s both` }}
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="font-display text-2xl">{r.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {r.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WISH */}
      <section className="relative z-10 px-6 pb-32 pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-5xl md:text-6xl">
            Make a <span className="italic text-gradient-romance">wish</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Close your eyes. I'll be right here when you open them — ready to
            spend every candle, every cake, every year with you.
          </p>
          <Button
            size="lg"
            className="mt-10 rounded-full bg-gradient-to-r from-primary to-accent px-10 py-7 text-base shadow-romance hover:opacity-90"
          >
            <Heart className="mr-2 h-5 w-5 fill-current" />
            I love you 🎂
          </Button>
        </div>
      </section>

      <footer className="relative z-10 border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
        Made with <Heart className="mx-1 inline h-3 w-3 fill-primary text-primary" /> just for you
      </footer>
    </main>
  );
};

export default Index;
