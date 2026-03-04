import { useEffect, useRef } from 'react';

function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${(i * 5.5 + 3) % 100}%`,
    size: (i % 4) + 1.5,
    duration: (i % 8) + 10,
    delay: (i % 10),
    color:
      i % 3 === 0
        ? 'rgba(168,230,227,0.6)'
        : i % 3 === 1
        ? 'rgba(74,144,184,0.5)'
        : 'rgba(200,160,255,0.4)',
  }));

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </>
  );
}

export function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return <div ref={cursorRef} className="cursor-glow hidden md:block" />;
}

export default function OceanBackground() {
  return (
    <div className="ocean-bg">
      <div className="wave-container">
        <svg className="wave-svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="rgba(168,230,227,0.4)"
          />
        </svg>
        <svg className="wave-svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,40 C360,90 720,10 1080,50 C1260,70 1380,30 1440,40 L1440,120 L0,120 Z"
            fill="rgba(74,144,184,0.3)"
          />
        </svg>
        <svg className="wave-svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,70 C180,30 540,90 720,50 C900,10 1260,80 1440,60 L1440,120 L0,120 Z"
            fill="rgba(30,74,110,0.5)"
          />
        </svg>
      </div>
      <Particles />
    </div>
  );
}
