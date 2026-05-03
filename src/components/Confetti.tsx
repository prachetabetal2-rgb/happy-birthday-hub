const EMOJIS = ['❤️', '🌹', '✨', '🎉', '💕', '🥂', '🎂'];

const Confetti = () => {
  const items = Array.from({ length: 24 });
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {items.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = 8 + Math.random() * 8;
        const size = 16 + Math.random() * 18;
        const emoji = EMOJIS[i % EMOJIS.length];
        return (
          <span
            key={i}
            className="absolute"
            style={{
              left: `${left}%`,
              fontSize: `${size}px`,
              animation: `float-up ${duration}s linear ${delay}s infinite`,
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
};

export default Confetti;
