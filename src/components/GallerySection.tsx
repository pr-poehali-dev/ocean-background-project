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

interface GallerySectionProps {
  activeGallery: number | null;
  setActiveGallery: (id: number | null) => void;
}

export default function GallerySection({ activeGallery, setActiveGallery }: GallerySectionProps) {
  return (
    <>
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
    </>
  );
}
