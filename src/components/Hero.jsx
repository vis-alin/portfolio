import { useEffect, useState } from 'react';

function Hero() {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    // Delay showing the name
    const timer = setTimeout(() => {
      setShowName(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Matrix binary animation
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const binary = '01';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }, () => 1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, i) => {
        const text = binary[Math.floor(Math.random() * binary.length)];
        const x = i * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      });
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section relative h-screen bg-black overflow-hidden">
      <canvas id="matrix-canvas" className="absolute top-0 left-0 w-full h-full" />
      {showName && (
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-5xl font-bold text-green-400 animate-fade-in">Vishal Kumar</h1>
        </div>
      )}
    </div>
  );
}

export default Hero;
