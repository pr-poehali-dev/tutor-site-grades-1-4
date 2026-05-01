const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background:
          "linear-gradient(135deg, hsl(48,100%,94%) 0%, hsl(340,85%,95%) 50%, hsl(210,80%,94%) 100%)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-[hsl(var(--fun-yellow))] opacity-40 float" />
        <div className="absolute top-32 right-16 w-16 h-16 rounded-full bg-[hsl(var(--fun-pink))] opacity-40 float-delay" />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-[hsl(var(--fun-teal))] opacity-30 float" />
        <div className="absolute bottom-32 right-1/3 w-12 h-12 rounded-full bg-[hsl(var(--fun-purple))] opacity-40 float-delay" />
        <div className="absolute top-1/2 left-8 text-4xl wiggle">✏️</div>
        <div className="absolute top-1/3 right-12 text-4xl float">📚</div>
        <div className="absolute bottom-1/4 right-8 text-3xl wiggle">🎉</div>
        <div className="absolute top-1/4 left-1/3 text-3xl float-delay">⭐</div>
        <div className="absolute bottom-1/3 left-1/2 text-3xl wiggle">🍎</div>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="text-xl">🌟</span>
            <span className="text-sm font-bold text-[hsl(var(--primary))]">
              Индивидуальный подход
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl leading-tight mb-6 text-foreground">
            Учёба — это{" "}
            <span className="text-[hsl(var(--accent))]">весело</span>{" "}
            и{" "}
            <span className="text-[hsl(var(--secondary))]">легко!</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-nunito not-italic">
            Помогаю детям полюбить учёбу, освоить школьную программу и раскрыть
            свой потенциал. Занятия в радостной и поддерживающей атмосфере.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("#booking")}
              className="bg-[hsl(var(--primary))] text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg"
            >
              Записаться на занятие 🚀
            </button>
            <button
              onClick={() => scrollTo("#about")}
              className="bg-white text-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all border-2 border-[hsl(var(--border))]"
            >
              Узнать больше
            </button>
          </div>

          <div className="flex flex-wrap gap-6 mt-10">
            {[
              { emoji: "👩‍🎓", value: "5+ лет", label: "опыта" },
              { emoji: "🏆", value: "200+", label: "учеников" },
              { emoji: "⭐", value: "100%", label: "успех" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="text-3xl">{stat.emoji}</span>
                <div>
                  <div className="text-2xl font-bold text-foreground font-times italic">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-nunito not-italic">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center fade-up stagger-2">
          <div className="relative">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/8e7a8439-8e19-44ed-95a9-cc9dd5465173/files/809357c3-2868-483b-ba27-43c667579912.jpg"
                alt="Дети учатся вместе"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-[hsl(var(--fun-yellow))] rounded-2xl px-4 py-2 shadow-lg bounce-slow">
              <span className="font-bold text-foreground text-sm">
                🎓 Все предметы
              </span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[hsl(var(--secondary))] rounded-2xl px-4 py-2 shadow-lg bounce-slow">
              <span className="font-bold text-white text-sm">
                📅 Онлайн и офлайн
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
