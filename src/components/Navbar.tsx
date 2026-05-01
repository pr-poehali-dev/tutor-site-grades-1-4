import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Главная", href: "#hero" },
  { label: "О репетиторе", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Летняя программа", href: "#summer" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌟</span>
          <span className="font-times font-bold italic text-xl text-[hsl(var(--primary))]">
            Репетитор
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-sm font-semibold text-foreground hover:text-[hsl(var(--primary))] transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#booking")}
            className="bg-[hsl(var(--primary))] text-white px-4 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity"
          >
            Записаться
          </button>
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-left font-semibold text-foreground hover:text-[hsl(var(--primary))] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick("#booking")}
            className="bg-[hsl(var(--primary))] text-white px-4 py-2 rounded-full font-bold hover:opacity-90 transition-opacity w-full"
          >
            Записаться
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
