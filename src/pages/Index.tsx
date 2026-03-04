import { useState, useEffect } from 'react';
import OceanBackground, { CursorGlow } from '@/components/OceanBackground';
import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';

const SECTIONS = ['Главная', 'Профиль', 'Галерея', 'Проекты', 'Контакты'];

export default function Index() {
  const [activeSection, setActiveSection] = useState('Главная');
  const [scrolled, setScrolled] = useState(false);
  const [activeGallery, setActiveGallery] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative">
      <CursorGlow />
      <div className="noise" />
      <OceanBackground />

      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-cormorant text-lg font-light tracking-widest text-white/70 uppercase">
              Творец
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {SECTIONS.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`nav-item section-label text-xs tracking-widest hover:text-primary transition-colors ${
                  activeSection === s ? 'active text-primary' : 'text-white/40'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <button className="btn glass px-4 py-2 rounded-full text-xs text-primary/80 tracking-widest uppercase hover:text-primary transition-colors">
            Связаться
          </button>
        </div>
      </nav>

      {/* MAIN */}
      <main className="relative z-10">
        <HeroSection scrollTo={scrollTo} />
        <GallerySection activeGallery={activeGallery} setActiveGallery={setActiveGallery} />
        <ContactSection />
      </main>
    </div>
  );
}
