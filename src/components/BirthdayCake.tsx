import { useState } from "react";

const BirthdayCake = () => {
  const [blown, setBlown] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setBlown((b) => !b)}
        className="relative group focus:outline-none"
        aria-label="Blow the candles"
      >
        {/* candles */}
        <div className="flex justify-center gap-6 mb-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="relative flex flex-col items-center">
              <div className="relative h-10 w-3 origin-bottom">
                {/* flame */}
                <span
                  className={`absolute -top-7 left-1/2 -translate-x-1/2 h-7 w-4 rounded-full bg-gradient-to-t from-[hsl(38_100%_55%)] via-[hsl(45_100%_70%)] to-[hsl(50_100%_92%)] transition-all duration-700 ${
                    blown
                      ? "opacity-0 scale-0 -translate-y-4"
                      : "opacity-100 animate-pulse"
                  }`}
                  style={{
                    filter: "blur(0.5px) drop-shadow(0 0 12px hsl(38 100% 60%))",
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
                {/* candle */}
                <div className="h-full w-full rounded-sm bg-gradient-to-b from-[hsl(348_70%_75%)] via-[hsl(348_60%_55%)] to-[hsl(348_60%_40%)] shadow-soft" />
              </div>
            </div>
          ))}
        </div>
        {/* smoke when blown */}
        {blown && (
          <div className="absolute -top-6 left-0 right-0 flex justify-center gap-6 pointer-events-none">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-3 w-3 rounded-full bg-foreground/30 blur-md animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        )}

        {/* tier 1 */}
        <div className="w-72 h-20 rounded-t-3xl bg-gradient-to-b from-[hsl(36_50%_98%)] to-[hsl(12_70%_88%)] border-x-4 border-t-4 border-[hsl(348_55%_38%)]/20 relative overflow-hidden shadow-romance">
          <div className="absolute inset-x-0 -bottom-4 flex justify-around">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="h-8 w-8 rounded-full bg-[hsl(348_70%_60%)]" />
            ))}
          </div>
        </div>
        {/* tier 2 */}
        <div className="w-80 h-24 -mt-1 bg-gradient-to-b from-[hsl(348_55%_38%)] to-[hsl(348_55%_28%)] relative shadow-romance">
          <div className="absolute inset-x-0 top-0 flex justify-around">
            {Array.from({ length: 10 }).map((_, i) => (
              <span key={i} className="h-3 w-3 rounded-full bg-[hsl(38_70%_70%)] mt-1" />
            ))}
          </div>
          <p className="absolute inset-0 flex items-center justify-center font-display italic text-2xl text-[hsl(36_50%_98%)]">
            Happy Birthday
          </p>
        </div>
        {/* plate */}
        <div className="w-96 h-3 -mt-1 mx-auto rounded-full bg-foreground/10" />
      </button>

      <p className="mt-6 text-center text-muted-foreground italic">
        {blown ? "✨ Wish granted. I love you. ✨" : "Tap the cake to blow the candles"}
      </p>
    </div>
  );
};

export default BirthdayCake;
