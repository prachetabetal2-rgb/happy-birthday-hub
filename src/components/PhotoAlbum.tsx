import { useState } from "react";
import { Heart, X, ChevronLeft, ChevronRight } from "lucide-react";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";

const photos = [
  {
    src: photo1,
    title: "The day you stole my heart",
    caption: "That festive smile in red — my favourite kind of magic.",
    rotate: "-rotate-2",
  },
  {
    src: photo2,
    title: "Our little world",
    caption: "Coffee for two, hands held tight, promises in silver.",
    rotate: "rotate-1",
  },
  {
    src: photo3,
    title: "Lost in thought",
    caption: "Even in stillness, you take my breath away.",
    rotate: "rotate-2",
  },
  {
    src: photo4,
    title: "Midnight glow",
    caption: "Neon lights and your perfect profile — pure cinema.",
    rotate: "-rotate-1",
  },
];

const PhotoAlbum = () => {
  const [open, setOpen] = useState<number | null>(null);

  const next = () => setOpen((i) => (i === null ? 0 : (i + 1) % photos.length));
  const prev = () =>
    setOpen((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length));

  return (
    <section className="relative z-10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-primary/80">
            Our memories
          </p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">
            A little <span className="italic text-gradient-romance">album</span> of us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tap any photo to relive the moment.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className={`group relative block ${p.rotate} transition-transform duration-500 hover:rotate-0 hover:-translate-y-2`}
            >
              <div className="rounded-sm bg-card p-3 pb-14 shadow-romance">
                <div className="relative overflow-hidden bg-muted">
                  <img
                    src={p.src}
                    alt={p.title}
                    loading="lazy"
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-4 text-center font-display text-lg italic text-foreground/80">
                  {p.title}
                </p>
              </div>
              <span className="absolute -top-2 left-1/2 h-6 w-16 -translate-x-1/2 rounded-sm bg-accent/40 backdrop-blur-sm shadow-soft" />
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-md animate-fade-in-up"
          onClick={() => setOpen(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setOpen(null); }}
            className="absolute right-6 top-6 rounded-full bg-background/20 p-2 text-background transition hover:bg-background/40"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 rounded-full bg-background/20 p-2 text-background transition hover:bg-background/40 md:left-8"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div
            className="max-w-3xl rounded-2xl bg-card p-4 shadow-romance"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[open].src}
              alt={photos[open].title}
              className="max-h-[70vh] w-full rounded-lg object-contain"
            />
            <div className="px-2 py-5 text-center">
              <h3 className="font-display text-2xl text-gradient-romance">
                {photos[open].title}
              </h3>
              <p className="mt-2 flex items-center justify-center gap-2 text-muted-foreground">
                <Heart className="h-4 w-4 fill-primary text-primary" />
                {photos[open].caption}
              </p>
            </div>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 rounded-full bg-background/20 p-2 text-background transition hover:bg-background/40 md:right-8"
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
