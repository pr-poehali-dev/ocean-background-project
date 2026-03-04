import { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

const GALLERY_ITEMS = [
  {
    id: 1,
    img: 'https://cdn.poehali.dev/projects/e36ab32f-0f2a-40f5-8bd7-f1e8104eea0a/files/88b8c39f-ec0b-4d16-a979-85a190eae2dd.jpg',
    title: 'Биолюминесценция',
    tag: 'Цифровое искусство',
    year: '2024',
  },
  {
    id: 2,
    img: 'https://cdn.poehali.dev/projects/e36ab32f-0f2a-40f5-8bd7-f1e8104eea0a/files/2599c45c-8ec2-4461-a95a-31bd981bc64d.jpg',
    title: 'Трансформация',
    tag: 'Эксперимент',
    year: '2024',
  },
  {
    id: 3,
    img: 'https://cdn.poehali.dev/projects/e36ab32f-0f2a-40f5-8bd7-f1e8104eea0a/files/e8fda43e-c5c0-432e-a50f-d0b536784b7c.jpg',
    title: 'Фракталы',
    tag: 'Генеративное',
    year: '2025',
  },
  {
    id: 4,
    img: 'https://cdn.poehali.dev/projects/e36ab32f-0f2a-40f5-8bd7-f1e8104eea0a/files/88b8c39f-ec0b-4d16-a979-85a190eae2dd.jpg',
    title: 'Глубина',
    tag: 'Мультимедиа',
    year: '2025',
  },
];

const PROJECTS = [
  {
    id: 1,
    title: 'Звуковые ландшафты',
    desc: 'Интерактивная аудио-визуальная инсталляция, реагирующая на движение зрителя.',
    tags: ['sound', 'interactive', 'installation'],
    status: 'Завершён',
  },
  {
    id: 2,
    title: 'Метаморфозы данных',
    desc: 'Визуализация потоков городских данных в реальном времени — дыхание мегаполиса.',
    tags: ['data', 'generative', 'realtime'],
    status: 'В процессе',
  },
  {
    id: 3,
    title: 'Нейронные сны',
    desc: 'Серия работ, созданных в диалоге с нейросетями — соавторство с машиной.',
    tags: ['AI', 'collaborative', 'series'],
    status: 'Архив',
  },
];

const LINKS = [
  { icon: 'Youtube', label: 'YouTube', sub: 'Видеоарт и процесс', color: '#FF4040' },
  { icon: 'Send', label: 'Telegram', sub: 'Канал и новости', color: '#29B6F6' },
  { icon: 'Github', label: 'GitHub', sub: 'Открытые эксперименты', color: '#A8E6E3' },
  { icon: 'Instagram', label: 'Instagram', sub: 'Визуальный дневник', color: '#E040FB' },
  { icon: 'Globe', label: 'Behance', sub: 'Портфолио проектов', color: '#1565C0' },
  { icon: 'Music', label: 'SoundCloud', sub: 'Звуковые работы', color: '#FF7043' },
];

const SECTIONS = ['Главная', 'Профиль', 'Галерея', 'Проекты', 'Контакты'];

function OceanBackground() {
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

function CursorGlow() {
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
        {/* ======== ГЛАВНАЯ ======== */}
        <section
          id="Главная"
          className="min-h-screen flex flex-col items-center justify-center px-6 pt-20"
        >
          <div className="text-center">
            {/* Avatar */}
            <div className="flex justify-center mb-8 animate-fade-in-up anim-delay-1">
              <div className="relative">
                <div className="w-36 h-36 rounded-full avatar-glow overflow-hidden animate-wave-float">
                  <img
                    src="https://cdn.poehali.dev/projects/e36ab32f-0f2a-40f5-8bd7-f1e8104eea0a/files/e8fda43e-c5c0-432e-a50f-d0b536784b7c.jpg"
                    alt="Аватар"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-3 rounded-full border border-primary/20 animate-spin-slow" />
                <div
                  className="absolute -inset-6 rounded-full border border-primary/10 animate-spin-slow"
                  style={{ animationDirection: 'reverse', animationDuration: '30s' }}
                />
              </div>
            </div>

            {/* Name */}
            <div className="animate-fade-in-up anim-delay-2">
              <p className="section-label mb-3">Платформа для творцов</p>
              <h1 className="font-cormorant text-6xl md:text-8xl font-light tracking-tight text-white mb-2 leading-none">
                Имя Автора
              </h1>
              <p className="font-cormorant text-2xl md:text-3xl italic text-primary/70 font-light">
                Художник · Экспериментатор · Исследователь
              </p>
            </div>

            <p className="mt-6 max-w-xl mx-auto text-white/40 text-sm leading-relaxed animate-fade-in-up anim-delay-3">
              Работаю на пересечении цифровых медиа, звука и пространства.
              Каждый проект — это эксперимент с формой и смыслом.
            </p>

            <div className="flex items-center justify-center gap-4 mt-10 animate-fade-in-up anim-delay-4">
              <button
                onClick={() => scrollTo('Галерея')}
                className="btn glass-strong px-8 py-3 rounded-full text-sm text-primary tracking-wider uppercase hover:bg-primary/20 transition-all duration-300 border border-primary/30"
              >
                Смотреть работы
              </button>
              <button
                onClick={() => scrollTo('Контакты')}
                className="btn px-8 py-3 rounded-full text-sm text-white/40 tracking-wider uppercase hover:text-white/70 transition-all duration-300"
              >
                Контакты →
              </button>
            </div>

            <div className="mt-20 flex flex-col items-center gap-2 animate-fade-in-up anim-delay-5">
              <div className="w-px h-16 bg-gradient-to-b from-transparent to-primary/40" />
              <div className="w-1 h-1 rounded-full bg-primary/40 animate-bounce" />
            </div>
          </div>
        </section>

        {/* ======== ПРОФИЛЬ ======== */}
        <section id="Профиль" className="min-h-screen flex items-center px-6 py-24">
          <div className="max-w-5xl mx-auto w-full">
            <div className="reveal grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="section-label mb-4">О творце</p>
                <h2 className="font-cormorant text-5xl md:text-6xl text-white font-light mb-6 leading-tight">
                  Исследую
                  <br />
                  <span className="italic text-primary">границы</span>
                  <br />
                  возможного
                </h2>
                <p className="text-white/40 text-sm leading-loose mb-8">
                  Более 8 лет работаю с цифровыми медиа, создавая работы для галерей, фестивалей
                  и публичных пространств. Участник международных выставок и резиденций.
                </p>
                <div className="flex gap-8">
                  {[
                    ['48', 'проектов'],
                    ['12', 'выставок'],
                    ['6', 'стран'],
                  ].map(([n, l]) => (
                    <div key={l} className="text-center">
                      <div className="font-cormorant text-4xl text-primary font-light">{n}</div>
                      <div className="section-label mt-1">{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="section-label mb-6">Ресурсы и соцсети</p>
                <div className="space-y-3">
                  {LINKS.map((link) => (
                    <div
                      key={link.label}
                      className="link-card glass rounded-2xl p-4 flex items-center gap-4 group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                        style={{
                          background: `${link.color}20`,
                          border: `1px solid ${link.color}30`,
                        }}
                      >
                        <Icon name={link.icon} size={18} style={{ color: link.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white/80 text-sm font-medium">{link.label}</div>
                        <div className="text-white/30 text-xs mt-0.5">{link.sub}</div>
                      </div>
                      <Icon
                        name="ArrowUpRight"
                        size={14}
                        className="text-white/20 group-hover:text-primary transition-colors"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======== ГАЛЕРЕЯ ======== */}
        <section id="Галерея" className="min-h-screen px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="reveal text-center mb-16">
              <p className="section-label mb-4">Избранные работы</p>
              <h2 className="font-cormorant text-5xl md:text-7xl text-white font-light">Галерея</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal" style={{ gridAutoRows: '200px' }}>
              {GALLERY_ITEMS.map((item, i) => (
                <div
                  key={item.id}
                  className={`gallery-card glass rounded-2xl overflow-hidden group ${
                    i === 0 || i === 3 ? 'row-span-2' : ''
                  }`}
                  onClick={() => setActiveGallery(item.id)}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                      <div className="section-label mb-1">
                        {item.tag} · {item.year}
                      </div>
                      <h3 className="font-cormorant text-xl text-white font-light">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 reveal">
              <button className="btn glass px-10 py-3 rounded-full text-sm text-primary/70 uppercase tracking-wider hover:text-primary border border-primary/20 hover:border-primary/40 transition-all">
                Все работы
              </button>
            </div>
          </div>
        </section>

        {/* ======== ПРОЕКТЫ ======== */}
        <section id="Проекты" className="min-h-screen px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="reveal text-center mb-16">
              <p className="section-label mb-4">Исследования и эксперименты</p>
              <h2 className="font-cormorant text-5xl md:text-7xl text-white font-light">Проекты</h2>
            </div>

            <div className="space-y-6">
              {PROJECTS.map((p, i) => (
                <div
                  key={p.id}
                  className="reveal glass rounded-3xl p-8 group hover:border-primary/20 border border-transparent transition-all duration-500 cursor-pointer"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <span className="font-cormorant text-5xl text-white/10 font-light leading-none">
                        0{p.id}
                      </span>
                      <h3 className="font-cormorant text-3xl text-white font-light group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full border whitespace-nowrap ${
                        p.status === 'В процессе'
                          ? 'border-primary/40 text-primary/70'
                          : p.status === 'Завершён'
                          ? 'border-white/20 text-white/40'
                          : 'border-white/10 text-white/20'
                      }`}
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed mb-6 ml-16">{p.desc}</p>
                  <div className="flex items-center gap-3 ml-16">
                    {p.tags.map((t) => (
                      <span key={t} className="section-label border border-white/10 px-3 py-1 rounded-full text-white/30">
                        {t}
                      </span>
                    ))}
                    <div className="ml-auto">
                      <Icon
                        name="ArrowUpRight"
                        size={20}
                        className="text-white/20 group-hover:text-primary transition-colors"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======== КОНТАКТЫ ======== */}
        <section id="Контакты" className="min-h-screen flex items-center px-6 py-24">
          <div className="max-w-3xl mx-auto w-full text-center">
            <div className="reveal">
              <p className="section-label mb-6">Давайте создадим что-то</p>
              <h2 className="font-cormorant text-6xl md:text-8xl text-white font-light mb-4 leading-none">
                Напишите
                <br />
                <span className="italic text-primary">мне</span>
              </h2>
              <p className="text-white/30 text-sm mb-12 leading-relaxed">
                Открыт для коллабораций, резиденций,
                <br />
                выставок и экспериментальных проектов.
              </p>

              <div className="glass-strong rounded-3xl p-10">
                <div className="space-y-4 mb-6">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white/80 placeholder:text-white/20 text-sm focus:outline-none focus:border-primary/40 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white/80 placeholder:text-white/20 text-sm focus:outline-none focus:border-primary/40 transition-colors"
                  />
                  <textarea
                    rows={4}
                    placeholder="Расскажите о вашей идее..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white/80 placeholder:text-white/20 text-sm focus:outline-none focus:border-primary/40 transition-colors resize-none"
                  />
                </div>
                <button className="btn w-full py-4 rounded-2xl bg-primary text-ocean-abyss font-medium tracking-widest uppercase text-sm hover:opacity-90 transition-opacity">
                  Отправить сообщение
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 px-6 text-center border-t border-white/5">
          <p className="font-cormorant text-2xl text-white/20 font-light italic mb-2">
            Искусство без границ
          </p>
          <p className="section-label text-white/10">© 2025 · Все права защищены</p>
        </footer>
      </main>

      {/* LIGHTBOX */}
      {activeGallery !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl"
          onClick={() => setActiveGallery(null)}
        >
          <button className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors">
            <Icon name="X" size={28} />
          </button>
          {GALLERY_ITEMS.filter((g) => g.id === activeGallery).map((g) => (
            <div key={g.id} className="max-w-3xl w-full px-6" onClick={(e) => e.stopPropagation()}>
              <img src={g.img} alt={g.title} className="w-full rounded-2xl" />
              <div className="mt-6 text-center">
                <p className="section-label mb-2">
                  {g.tag} · {g.year}
                </p>
                <h3 className="font-cormorant text-4xl text-white font-light">{g.title}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}