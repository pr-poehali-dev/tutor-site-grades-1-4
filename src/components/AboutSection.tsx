const achievements = [
  { emoji: "🎓", text: "Педагогическое образование" },
  { emoji: "📘", text: "Русский язык и литература" },
  { emoji: "➕", text: "Математика 1–9 класс" },
  { emoji: "🌍", text: "Английский язык" },
  { emoji: "🏅", text: "Победители олимпиад" },
  { emoji: "💛", text: "Добрая атмосфера на уроках" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
        <div className="relative flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="https://cdn.poehali.dev/projects/8e7a8439-8e19-44ed-95a9-cc9dd5465173/files/1c399729-ed75-4d7f-93e6-ce1c92f9282d.jpg"
              alt="Репетитор"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-[hsl(var(--fun-yellow))] deco-blob w-32 h-32 opacity-50" />
          <div className="absolute -top-6 -left-6 bg-[hsl(var(--fun-pink))] deco-blob-2 w-24 h-24 opacity-40" />
        </div>

        <div>
          <div className="inline-flex items-center gap-2 bg-[hsl(var(--muted))] rounded-full px-4 py-2 mb-4">
            <span>👩‍🏫</span>
            <span className="text-sm font-bold text-[hsl(var(--primary))]">
              О репетиторе
            </span>
          </div>
          <h2 className="text-4xl mb-4 text-foreground">
            Привет, я ваш репетитор!
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed font-nunito not-italic">
            Меня зовут Мария Ивановна. Уже более 5 лет я помогаю детям
            разобраться в школьных предметах, найти свой путь в учёбе и
            поверить в свои силы. Каждый ребёнок уникален — и мои уроки всегда
            адаптированы под него.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed font-nunito not-italic">
            Верю, что учёба должна приносить радость. На моих занятиях дети не
            боятся ошибаться — они учатся, растут и достигают результатов!
          </p>

          <div className="grid grid-cols-2 gap-3">
            {achievements.map((a) => (
              <div
                key={a.text}
                className="flex items-center gap-3 bg-[hsl(var(--muted))] rounded-2xl px-4 py-3 card-hover"
              >
                <span className="text-2xl">{a.emoji}</span>
                <span className="text-sm font-semibold text-foreground font-nunito not-italic">
                  {a.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
