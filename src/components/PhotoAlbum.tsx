import { useState } from "react";
import { Heart, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";

const photos = [
  {
    src: photo1,
    chapter: "01",
    title: "The day you stole my heart",
    caption: "That festive smile in red — my favourite kind of magic.",
    date: "A perfect afternoon",
  },
  {
    src: photo2,
    chapter: "02",
    title: "Our little world",
    caption: "Coffee for two, hands held tight, promises in silver.",
    date: "Where time stops",
  },
  {
    src: photo3,
    chapter: "03",
    title: "Lost in thought",
    caption: "Even in stillness, you take my breath away.",
    date: "Golden hour",
  },
  {
    src: photo4,
    chapter: "04",
    title: "Midnight glow",
    caption: "Neon lights and your perfect profile — pure cinema.",
    date: "After dark",
  },
];

const PhotoAlbum = () => {
  const [open, setOpen] = useState<number | null>(null);

  const next = () => setOpen((i) => (i === null ? 0 : (i + 1) % photos.length));
  const prev = () =>
    setOpen((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length));

  return (
    <section className="relative z-10 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-primary/80">
            <Sparkles className="h-4 w-4" /> Frozen moments
          </p>
          <h2 className="mt-4 font-display text-5xl md:text-7xl">
            Our <span className="italic text-gradient-romance">forever</span> in frames
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Every photo is a heartbeat. Tap one to live it again.
          </p>
        </div>

        {/* Cinematic layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {photos.map((p, i) => {
            const layouts = [
              "col-span-12 md:col-span-7 md:row-span-2 aspect-[4/5] md:aspect-auto md:h-[640px]",
              "col-span-6 md:col-span-5 aspect-[3/4] md:h-[310px]",
              "col-span-6 md:col-span-5 aspect-[3/4] md:h-[310px]",
              "col-span-12 md:col-span-12 aspect-[16/9] md:h-[420px]",
            ];
            return (
              <button
                key={i}
                onClick={() => setOpen(i)}
                className={`group relative overflow-hidden rounded-2xl shadow-romance ${layouts[i]}`}
                style={{ animation: `fade-in-up 0.9s ease-out ${i * 0.12}s both` }}
              >
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                <div className="absolute inset-0 ring-1 ring-inset ring-background/10" />

                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 text-left">
                  <span className="self-start rounded-full bg-background/15 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-background border border-background/20">
                    Chapter {p.chapter}
                  </span>
                  <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
                    <p className="text-xs uppercase tracking-[0.3em] text-background/70">{p.date}</p>
                    <h3 className="mt-2 font-display text-2xl md:text-4xl text-background leading-tight">
                      {p.title}
                    </h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-sm text-background/80 transition-all duration-500 group-hover:max-h-20 group-hover:mt-3">
                      {p.caption}
                    </p>
                  </div>
                </div>

                <Heart className="absolute top-6 right-6 h-5 w-5 fill-background/0 text-background/60 transition-all duration-500 group-hover:fill-[hsl(348_70%_60%)] group-hover:text-[hsl(348_70%_60%)] group-hover:scale-125" />
              </button>
            );
          })}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-xl animate-fade-in-up"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setOpen(null); }}
            className="absolute right-6 top-6 rounded-full bg-background/10 p-3 text-background transition hover:bg-background/30 border border-background/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 rounded-full bg-background/10 p-3 text-background transition hover:bg-background/30 border border-background/20 md:left-8"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div
            className="max-w-4xl w-full rounded-3xl bg-card overflow-hidden shadow-romance"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[open].src}
              alt={photos[open].title}
              className="max-h-[70vh] w-full object-contain bg-foreground/5"
            />
            <div className="px-8 py-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-primary/70">
                Chapter {photos[open].chapter} · {photos[open].date}
              </p>
              <h3 className="mt-2 font-display text-3xl text-gradient-romance">
                {photos[open].title}
              </h3>
              <p className="mt-3 flex items-center justify-center gap-2 text-muted-foreground italic">
                <Heart className="h-4 w-4 fill-primary text-primary" />
                {photos[open].caption}
              </p>
            </div>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 rounded-full bg-background/10 p-3 text-background transition hover:bg-background/30 border border-background/20 md:right-8"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
};

export default PhotoAlbum;
