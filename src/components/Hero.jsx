import { useEffect, useRef, useState } from 'react';

function Hero() {
  const canvasRef = useRef(null);
  const dropsRef = useRef([]);
  const animationFrameId = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const angleRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const binary = '010101100110100101110011011010000110000101101100';
    const fontSize = 16;
    const maxDrops = 150;
    const totalDrops = Math.min(Math.floor(canvas.width / fontSize), maxDrops);
    const center = { x: canvas.width / 2, y: canvas.height / 2 };

    if (dropsRef.current.length === 0) {
      for (let i = 0; i < totalDrops; i++) {
        dropsRef.current.push({
          x: i * fontSize,
          y: Math.random() * canvas.height,
          char: binary[Math.floor(Math.random() * binary.length)],
          opacity: 1,
          speed: 4 + Math.random() * 4,
        });
      }
    }

    ctx.font = `${fontSize}px monospace`;

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 10, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;

      dropsRef.current.forEach((drop) => {
        const dx = center.x - drop.x;
        const dy = center.y - drop.y;
        const distSq = dx * dx + dy * dy;
        const dist = Math.sqrt(distSq);

        if (dist > 0) drop.x += (dx / dist) * 0.1;
        drop.y += drop.speed;

        if (distSq < 6400) drop.opacity -= 0.03;
        if (drop.opacity <= 0 || drop.y > canvas.height) {
          drop.x = Math.random() * canvas.width;
          drop.y = -fontSize;
          drop.opacity = 1;
          drop.speed = 4 + Math.random() * 4;
          drop.char = binary[Math.floor(Math.random() * binary.length)];
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${drop.opacity})`;
        ctx.fillText(drop.char, Math.floor(drop.x), Math.floor(drop.y));
      });

      const holeGradient = ctx.createRadialGradient(
        center.x, center.y, 10,
        center.x, center.y, 80
      );
      holeGradient.addColorStop(0, '#ffffff');
      holeGradient.addColorStop(0.2, '#00f7ff');
      holeGradient.addColorStop(0.8, '#000000');

      ctx.shadowBlur = 20;
      ctx.shadowColor = '#00f7ff';
      ctx.beginPath();
      ctx.arc(center.x, center.y, 80, 0, 2 * Math.PI);
      ctx.fillStyle = holeGradient;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw moving "SECURE" letters in circle
      const text = 'SECURE';
      const radius = 110;
      angleRef.current += 0.01;

      ctx.save();
      ctx.translate(center.x, center.y);
      ctx.rotate(angleRef.current);

      for (let i = 0; i < text.length; i++) {
        const charAngle = (i / text.length) * 2 * Math.PI;
        const x = radius * Math.cos(charAngle);
        const y = radius * Math.sin(charAngle);

        ctx.fillStyle = '#00f7ff';
        ctx.font = '18px monospace';
        ctx.fillText(text[i], x - 5, y + 5);
      }

      ctx.restore();

      animationFrameId.current = requestAnimationFrame(draw);
    }

    animationFrameId.current = requestAnimationFrame(draw);

    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      dropsRef.current = [];
      const newTotalDrops = Math.min(Math.floor(canvas.width / fontSize), maxDrops);
      for (let i = 0; i < newTotalDrops; i++) {
        dropsRef.current.push({
          x: i * fontSize,
          y: Math.random() * canvas.height,
          char: binary[Math.floor(Math.random() * binary.length)],
          opacity: 1,
          speed: 4 + Math.random() * 4,
        });
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        event.target.getAttribute('aria-label') !== 'Open menu'
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="hero-section relative h-screen w-screen bg-black overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      {/* Top-left Logo */}
      <div className="absolute top-4 left-6 z-10">
        <div className="flex items-center space-x-3 px-4 py-2 bg-black bg-opacity-70 rounded-lg shadow-lg backdrop-blur-sm">
          <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-xl font-bold">
            VK
          </div>
          <span className="text-white text-lg font-semibold tracking-wide">
            Vishal Kumar
          </span>
        </div>
      </div>

      {/* Top-right Menu Icon */}
      <div className="absolute top-4 right-6 z-10 flex items-center space-x-2 bg-black bg-opacity-70 px-3 py-2 rounded-full shadow-lg">
        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="text-white text-xl hover:scale-110 transition transform"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Slide-in Side Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-black bg-opacity-90 shadow-lg p-6 z-20 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <h2 className="text-white text-2xl mb-6 font-bold">Menu</h2>
        <ul className="space-y-4 text-white text-lg">
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#skills" className="hover:text-cyan-400">Skills</a></li>
          <li><a href="#certificates" className="hover:text-cyan-400">Certificates</a></li>
          <li><a href="#education" className="hover:text-cyan-400">Education</a></li>
          <li><a href="#experience" className="hover:text-cyan-400">Experience</a></li>
          <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-6 left-6 z-10 text-white animate-bounce">
        <span className="text-3xl">⬇</span>
      </div>
    </div>
  );
}

export default Hero;
