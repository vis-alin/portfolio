export default function CircuitEffect() {
  return (
    <div className="w-full h-full grid grid-cols-12 gap-2">
      {[...Array(60)].map((_, i) => (
        <div
          key={i}
          className="w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full blur-sm animate-glow"
          style={{
            animationDelay: `${(i % 10) * 0.1}s`,
            transform: `rotate(${i % 2 === 0 ? 0 : 90}deg)`,
          }}
        />
      ))}
    </div>
  );
}
