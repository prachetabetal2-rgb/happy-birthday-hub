import { Heart } from "lucide-react";

const moments = [
  { tag: "Chapter 01", title: "The first hello", text: "A simple smile that quietly rewrote everything." },
  { tag: "Chapter 02", title: "Our first coffee", text: "Two cups, heart-shaped cookies, endless conversation." },
  { tag: "Chapter 03", title: "The first 'us'", text: "When 'me' became 'we' — and nothing was ever the same." },
  { tag: "Chapter 04", title: "Today", text: "Celebrating you — the best chapter I've ever lived." },
];

const Timeline = () => {
  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-20 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-primary/80">Our story</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">
            Chapters of <span className="italic text-gradient-romance">us</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:-translate-x-1/2" />
          {moments.map((m, i) => {
            const right = i % 2 === 1;
            return (
              <div
                key={i}
                className={`relative mb-16 flex md:items-center ${right ? "md:flex-row-reverse" : "md:flex-row"}`}
                style={{ animation: `fade-in-up 0.8s ease-out ${i * 0.15}s both` }}
              >
                <div className="md:w-1/2 pl-12 md:px-10">
                  <div className="rounded-2xl bg-card p-6 shadow-soft hover:shadow-romance transition-shadow">
                    <p className="text-xs uppercase tracking-[0.3em] text-primary/70">{m.tag}</p>
                    <h3 className="mt-2 font-display text-3xl">{m.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{m.text}</p>
                  </div>
                </div>
                <span className="absolute left-4 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-romance">
                  <Heart className="h-4 w-4 fill-primary-foreground text-primary-foreground" />
                </span>
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
