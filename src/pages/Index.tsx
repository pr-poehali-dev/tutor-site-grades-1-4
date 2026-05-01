import { useState } from "react";
import Icon from "@/components/ui/icon";

const TUTOR_IMG = "https://cdn.poehali.dev/projects/8e7a8439-8e19-44ed-95a9-cc9dd5465173/files/8ae4594e-9541-4243-bfb3-409fceae374a.jpg";
const KIDS_IMG = "https://cdn.poehali.dev/projects/8e7a8439-8e19-44ed-95a9-cc9dd5465173/files/b9a34dc5-1864-4a53-8773-cb1e22548060.jpg";

const DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
const TIMES = ["10:00", "11:00", "13:00", "14:00", "16:00", "17:00", "18:00"];

const BOOKED = new Set(["Вт-11:00", "Чт-10:00", "Чт-14:00", "Пт-16:00", "Сб-13:00"]);

const REVIEWS = [
  { name: "Мария К.", text: "Дочка за 2 месяца подтянула математику с 3 до 5! Очень доходчиво объясняет, ребёнок с удовольствием идёт на занятия.", emoji: "🌟" },
  { name: "Андрей П.", text: "Сын готовился к ОГЭ по русскому. Результат превзошёл ожидания — 4 балла! Рекомендую всем родителям.", emoji: "🎉" },
  { name: "Светлана В.", text: "Занимаемся уже год. Подход индивидуальный, всегда учитывает особенности ребёнка. Отличный репетитор!", emoji: "💫" },
  { name: "Игорь Н.", text: "Наконец-то нашли репетитора, который умеет заинтересовать ребёнка. Сын сам просит дополнительные занятия!", emoji: "🚀" },
];

const SERVICES = [
  { icon: "Calculator", title: "Математика", desc: "1–11 класс, подготовка к ОГЭ и ЕГЭ", color: "bg-orange-100", border: "border-orange-300", tag: "от 1 200 ₽/час" },
  { icon: "BookOpen", title: "Русский язык", desc: "Грамматика, сочинения, ОГЭ/ЕГЭ", color: "bg-teal-100", border: "border-teal-300", tag: "от 1 200 ₽/час" },
  { icon: "Globe", title: "Английский язык", desc: "Разговорный, грамматика, школьная программа", color: "bg-pink-100", border: "border-pink-300", tag: "от 1 400 ₽/час" },
  { icon: "FlaskConical", title: "Физика", desc: "7–11 класс, олимпиадная подготовка", color: "bg-purple-100", border: "border-purple-300", tag: "от 1 300 ₽/час" },
];

const NAV = [
  { label: "Главная", href: "#hero" },
  { label: "О репетиторе", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Лето", href: "#summer" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export default function Index() {
  const [selected, setSelected] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSlot = (day: string, time: string) => {
    const key = `${day}-${time}`;
    if (!BOOKED.has(key)) setSelected(key === selected ? null : key);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) setFormSent(true);
  };

  return (
    <div className="font-nunito overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-orange-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <a href="#hero" className="font-caveat text-2xl font-bold text-orange-500">
            ✏️ УчимсяВместе
          </a>
          <div className="hidden md:flex gap-6">
            {NAV.map(n => (
              <a key={n.href} href={n.href}
                className="text-sm font-semibold text-gray-600 hover:text-orange-500 transition-colors">
                {n.label}
              </a>
            ))}
          </div>
          <a href="#booking"
            className="hidden md:inline-flex items-center gap-1 bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-full hover:bg-orange-600 transition-colors">
            Записаться
          </a>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} className="text-gray-600" />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-orange-100 px-4 py-3 flex flex-col gap-3">
            {NAV.map(n => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}
                className="text-sm font-semibold text-gray-700 py-1">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative pt-20 min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
        {/* Deco blobs */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-orange-200/40 deco-blob float" />
        <div className="absolute bottom-10 left-0 w-64 h-64 bg-teal-200/40 deco-blob-2 float-delay" />
        <div className="absolute top-40 left-1/2 w-40 h-40 bg-pink-200/30 deco-blob spin-slow" />

        {/* Floating emojis */}
        <span className="absolute top-32 left-10 text-4xl float">📚</span>
        <span className="absolute top-48 right-16 text-3xl float-delay">⭐</span>
        <span className="absolute bottom-32 left-20 text-3xl float">🎒</span>
        <span className="absolute bottom-48 right-8 text-4xl float-delay">🎓</span>
        <span className="absolute top-64 left-1/3 text-2xl wiggle">✏️</span>

        <div className="relative max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-bold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Набор на 2025–2026 открыт!
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-gray-800 leading-tight mb-4">
              Учёба —<br />
              <span className="font-caveat text-orange-500">это весело!</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              Индивидуальные занятия для детей с 1 по 11 класс. Подготовка к ВПР и олимпиадам. Онлайн и офлайн.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#booking"
                className="bg-orange-500 text-white font-bold px-8 py-3 rounded-full hover:bg-orange-600 transition-all hover:scale-105 shadow-lg shadow-orange-200">
                Записаться на урок
              </a>
              <a href="#services"
                className="bg-white text-orange-500 font-bold px-8 py-3 rounded-full border-2 border-orange-300 hover:border-orange-500 transition-all hover:scale-105">
                Узнать цены
              </a>
            </div>
            <div className="flex gap-8 mt-10">
              {[["5+", "лет опыта"], ["300+", "учеников"], ["98%", "сдали ЕГЭ"]].map(([val, lbl]) => (
                <div key={lbl}>
                  <div className="text-3xl font-black text-orange-500">{val}</div>
                  <div className="text-sm text-gray-500 font-semibold">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-pink-300 rounded-[40%_60%_55%_45%/45%_55%_60%_40%] float" />
              <img src={TUTOR_IMG} alt="Репетитор"
                className="relative z-10 w-full h-full object-cover rounded-[40%_60%_55%_45%/45%_55%_60%_40%] shadow-2xl" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 float-delay z-20">
              <div className="text-2xl">🏆</div>
              <div className="text-xs font-bold text-gray-700">Лучший репетитор<br />2024</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-2xl shadow-xl p-3 float z-20">
              <div className="text-2xl">⭐</div>
              <div className="text-xs font-black text-gray-800">5.0 рейтинг</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-teal-100 rounded-3xl" />
            <img src={KIDS_IMG} alt="Дети на занятии"
              className="relative rounded-3xl shadow-xl w-full object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white rounded-2xl p-4 shadow-xl">
              <div className="font-caveat text-2xl font-bold">Каждый ребёнок</div>
              <div className="font-caveat text-xl">умеет учиться!</div>
            </div>
          </div>
          <div>
            <div className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-3">О репетиторе</div>
            <h2 className="text-4xl font-black text-gray-800 mb-6">
              Анна Сергеевна <span className="font-caveat text-orange-500">Петрова</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Педагог с высшим образованием и 5+ годами опыта. Специализируюсь на индивидуальном подходе — нахожу способ объяснить любую тему так, чтобы ребёнок понял и полюбил предмет.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "GraduationCap", text: "МГУ, педагогический факультет", color: "text-orange-500" },
                { icon: "Award", text: "Дипломы олимпиадных победителей", color: "text-teal-500" },
                { icon: "Users", text: "Работаю онлайн и в Москве", color: "text-pink-500" },
                { icon: "Heart", text: "Психологически безопасная среда", color: "text-purple-500" },
              ].map(item => (
                <div key={item.text} className="flex items-start gap-3 bg-gray-50 rounded-2xl p-4">
                  <Icon name={item.icon} size={20} className={item.color} />
                  <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-gradient-to-b from-orange-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-3">Чему учим</div>
            <h2 className="text-4xl font-black text-gray-800">Наши <span className="font-caveat text-orange-500">предметы</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <div key={s.title}
                className={`${s.color} border-2 ${s.border} rounded-3xl p-6 card-hover cursor-default`}
                style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-md mb-4">
                  <Icon name={s.icon} size={22} className="text-orange-500" fallback="BookOpen" />
                </div>
                <h3 className="text-lg font-black text-gray-800 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{s.desc}</p>
                <div className="bg-white/70 text-orange-600 font-bold text-sm px-3 py-1 rounded-full inline-block">
                  {s.tag}
                </div>
              </div>
            ))}
          </div>

          {/* PAYMENT */}
          <div className="mt-14 bg-white rounded-3xl border-2 border-orange-100 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center">
                <Icon name="CreditCard" size={20} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-black text-gray-800">Оплата</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-4 bg-green-50 border-2 border-green-200 rounded-2xl p-4">
                <div className="text-3xl">📱</div>
                <div>
                  <div className="font-black text-gray-800">СБП</div>
                  <div className="text-sm text-gray-500">Система быстрых платежей</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-green-50 border-2 border-green-200 rounded-2xl p-4">
                <div className="text-3xl">💳</div>
                <div>
                  <div className="font-black text-gray-800">Сбербанк</div>
                  <div className="text-sm text-gray-500">Перевод на карту</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-green-50 border-2 border-green-200 rounded-2xl p-4">
                <div className="text-3xl">💵</div>
                <div>
                  <div className="font-black text-gray-800">Наличными</div>
                  <div className="text-sm text-gray-500">На занятии</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
              <Icon name="Info" size={14} className="text-gray-400" />
              Оплата после занятия или за пакет уроков. Первое пробное занятие — бесплатно!
            </p>
          </div>
        </div>
      </section>

      {/* SUMMER */}
      <section id="summer" className="py-20 relative overflow-hidden bg-gradient-to-br from-teal-500 via-teal-600 to-green-600">
        <div className="absolute top-0 left-0 right-0 h-full opacity-10">
          <div className="absolute top-10 left-10 text-8xl">☀️</div>
          <div className="absolute top-20 right-20 text-6xl">🌊</div>
          <div className="absolute bottom-10 left-1/3 text-7xl">🌴</div>
          <div className="absolute bottom-20 right-10 text-5xl">🦋</div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 text-white">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              <span>☀️</span> Лето 2025
            </div>
            <h2 className="text-4xl font-black mb-3">Летняя <span className="font-caveat text-yellow-300">программа</span></h2>
            <p className="text-teal-100 text-lg max-w-xl mx-auto">
              Готовимся к новому учебному году играючи — интенсивные курсы без скуки и стресса
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: "🚀", title: "Буст перед школой", desc: "Повторяем всё за прошлый год за 2 недели. Для 1–8 класса.", price: "8 900 ₽", tag: "Июнь–Август" },
              { emoji: "🎯", title: "Подготовка к ЕГЭ/ОГЭ", desc: "Интенсив 20 занятий. Все темы + разбор вариантов.", price: "18 000 ₽", tag: "Июль–Август" },
              { emoji: "🌟", title: "Олимпиадный курс", desc: "Нестандартные задачи, олимпиадные приёмы, соревнования.", price: "12 000 ₽", tag: "Июнь–Июль" },
            ].map(card => (
              <div key={card.title} className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-3xl p-6 card-hover">
                <div className="text-4xl mb-4">{card.emoji}</div>
                <div className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">{card.tag}</div>
                <h3 className="text-xl font-black mb-2">{card.title}</h3>
                <p className="text-teal-100 text-sm mb-4">{card.desc}</p>
                <div className="text-2xl font-black text-yellow-300">{card.price}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#booking"
              className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-black px-8 py-4 rounded-full text-lg hover:bg-yellow-300 transition-all hover:scale-105 shadow-lg">
              Записаться на лето <Icon name="ArrowRight" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <div className="text-sm font-bold text-pink-500 uppercase tracking-widest mb-3">Отзывы</div>
            <h2 className="text-4xl font-black text-gray-800">Что говорят <span className="font-caveat text-orange-500">родители</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={r.name}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-100 rounded-3xl p-6 card-hover"
                style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-3xl mb-3">{r.emoji}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center font-black text-orange-700 text-sm">
                    {r.name[0]}
                  </div>
                  <span className="font-bold text-gray-800 text-sm">{r.name}</span>
                </div>
                <div className="flex gap-0.5 mt-2">
                  {[...Array(5)].map((_, j) => <span key={j} className="text-yellow-400 text-sm">★</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING / CALENDAR */}
      <section id="booking" className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-3">Расписание</div>
            <h2 className="text-4xl font-black text-gray-800">Выберите <span className="font-caveat text-orange-500">время</span></h2>
            <p className="text-gray-500 mt-2">Нажмите на свободный слот и оставьте заявку</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border-2 border-orange-100 p-6 mb-8 overflow-x-auto">
            <div className="min-w-[500px]">
              <div className="grid grid-cols-7 gap-2 mb-3">
                <div className="text-xs font-bold text-gray-400 text-center py-2">Время</div>
                {DAYS.map(d => (
                  <div key={d} className="text-xs font-black text-center py-2 text-gray-700">{d}</div>
                ))}
              </div>
              {TIMES.map(time => (
                <div key={time} className="grid grid-cols-7 gap-2 mb-2">
                  <div className="text-xs font-bold text-gray-400 text-center py-2.5 flex items-center justify-center">{time}</div>
                  {DAYS.map(day => {
                    const key = `${day}-${time}`;
                    const booked = BOOKED.has(key);
                    const sel = selected === key;
                    return (
                      <button
                        key={day}
                        onClick={() => handleSlot(day, time)}
                        disabled={booked}
                        className={`slot-btn rounded-xl py-2.5 text-xs font-bold transition-all
                          ${booked
                            ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                            : sel
                              ? "bg-orange-500 text-white shadow-lg shadow-orange-200 selected"
                              : "bg-green-50 text-green-700 hover:bg-green-100 border border-green-200"
                          }`}
                      >
                        {booked ? "✗" : sel ? "✓" : "свободно"}
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
            <div className="flex gap-6 mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-4 h-4 bg-green-50 border border-green-200 rounded" />
                Свободно
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-4 h-4 bg-orange-500 rounded" />
                Выбрано
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-4 h-4 bg-gray-100 rounded" />
                Занято
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white rounded-3xl shadow-xl border-2 border-orange-100 p-8">
            {formSent ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-black text-gray-800 mb-2">Заявка отправлена!</h3>
                <p className="text-gray-500">Свяжусь с вами в течение 1 часа для подтверждения{selected ? ` слота ${selected.replace("-", " в ")}` : ""}.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black text-gray-800 mb-6">
                  {selected ? `Запись на ${selected.replace("-", " в ")}` : "Оставить заявку"}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-bold text-gray-700 mb-1.5 block">Ваше имя</label>
                    <input
                      type="text"
                      placeholder="Мария Петрова"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                      className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-gray-700 mb-1.5 block">Телефон</label>
                    <input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      required
                      className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 text-sm font-semibold focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                  <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 flex items-start gap-3">
                    <div className="text-xl mt-0.5">💳</div>
                    <div>
                      <div className="text-sm font-black text-gray-800 mb-1">Способы оплаты</div>
                      <div className="text-xs text-gray-600 flex flex-wrap gap-2">
                        <span className="bg-white px-2 py-0.5 rounded-full border border-green-200 font-semibold">📱 СБП</span>
                        <span className="bg-white px-2 py-0.5 rounded-full border border-green-200 font-semibold">💳 Сбербанк</span>
                        <span className="bg-white px-2 py-0.5 rounded-full border border-green-200 font-semibold">💵 Наличными</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">Первое пробное занятие — бесплатно!</div>
                    </div>
                  </div>
                  <button type="submit"
                    className="w-full bg-orange-500 text-white font-black py-4 rounded-2xl hover:bg-orange-600 transition-all hover:scale-[1.02] shadow-lg shadow-orange-200 text-lg">
                    Записаться на занятие 🚀
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-bold text-teal-500 uppercase tracking-widest mb-3">Контакты</div>
            <h2 className="text-4xl font-black text-gray-800">Как <span className="font-caveat text-orange-500">связаться</span></h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (999) 123-45-67", color: "bg-orange-100 text-orange-600", href: "tel:+79991234567" },
              { icon: "MessageCircle", label: "WhatsApp / Telegram", value: "Написать в мессенджер", color: "bg-teal-100 text-teal-600", href: "#" },
              { icon: "Mail", label: "Email", value: "anna@tutor.ru", color: "bg-pink-100 text-pink-600", href: "mailto:anna@tutor.ru" },
            ].map(c => (
              <a key={c.label} href={c.href}
                className="flex flex-col items-center text-center bg-gray-50 rounded-3xl p-8 card-hover border-2 border-gray-100 hover:border-orange-200">
                <div className={`w-14 h-14 ${c.color} rounded-2xl flex items-center justify-center mb-4`}>
                  <Icon name={c.icon} size={24} fallback="Phone" />
                </div>
                <div className="font-black text-gray-800 mb-1">{c.label}</div>
                <div className="text-sm text-gray-500 font-semibold">{c.value}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="font-caveat text-3xl text-orange-400 mb-3">✏️ УчимсяВместе</div>
          <p className="text-gray-400 text-sm mb-4">Индивидуальные занятия для детей и подготовка к экзаменам</p>
          <div className="flex justify-center gap-6 text-xs text-gray-500 mb-6">
            {NAV.map(n => (
              <a key={n.href} href={n.href} className="hover:text-orange-400 transition-colors">{n.label}</a>
            ))}
          </div>
          <div className="flex justify-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1"><span>📱</span> СБП</span>
            <span className="flex items-center gap-1"><span>💳</span> Сбербанк</span>
            <span className="flex items-center gap-1"><span>💵</span> Наличными</span>
          </div>
          <div className="mt-6 text-xs text-gray-600">© 2025 Репетитор Анна Петрова</div>
        </div>
      </footer>
    </div>
  );
}