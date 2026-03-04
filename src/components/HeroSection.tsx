import Icon from '@/components/ui/icon';

const LINKS = [
  { icon: 'Youtube', label: 'YouTube', sub: 'Видеоарт и процесс', color: '#FF4040' },
  { icon: 'Send', label: 'Telegram', sub: 'Канал и новости', color: '#29B6F6' },
  { icon: 'Github', label: 'GitHub', sub: 'Открытые эксперименты', color: '#A8E6E3' },
  { icon: 'Instagram', label: 'Instagram', sub: 'Визуальный дневник', color: '#E040FB' },
  { icon: 'Globe', label: 'Behance', sub: 'Портфолио проектов', color: '#1565C0' },
  { icon: 'Music', label: 'SoundCloud', sub: 'Звуковые работы', color: '#FF7043' },
];

interface HeroSectionProps {
  scrollTo: (section: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <>
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
            <h1 className="font-cormorant text-6xl md:text-8xl text-white font-light leading-none mb-4">
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
    </>
  );
}
