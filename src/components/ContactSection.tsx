export default function ContactSection() {
  return (
    <>
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
    </>
  );
}
