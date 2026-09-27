import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
] as const;

const SCROLL_THRESHOLD = 12;
const MOBILE_MENU_ID = "mobile-nav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  // Detecta scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Marca seção ativa via IntersectionObserver
  useEffect(() => {
    const sections = NAV_LINKS
      .map(({ href }) => document.querySelector(href))
      .filter((el): el is Element => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Fecha menu mobile ao clicar fora ou apertar Esc
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`#${MOBILE_MENU_ID}`) && !target.closest("[data-menu-toggle]")) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  // Bloqueia scroll do body quando o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const headerClass = useMemo(
    () =>
      [
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled
          ? "border-b border-white/5 bg-bg/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      ].join(" "),
    [scrolled],
  );

  return (
    <header className={headerClass}>
      <nav
        aria-label="Navegação principal"
        className={`mx-auto flex max-w-5xl items-center justify-between px-6 transition-[padding] duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Logo */}
        <a
          href="#topo"
          className="group relative font-display text-lg font-semibold tracking-tight text-ink"
          aria-label="Ir para o topo"
        >
          en
          <span className="inline-block text-accent transition-transform duration-300 group-hover:scale-125">
            .
          </span>
          dev
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Links desktop */}
        <ul className="hidden items-center gap-1 sm:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = active === href;
            return (
              <li key={href}>
                <a
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-white/[0.06] ring-1 ring-white/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA + toggle mobile */}
        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="group relative hidden overflow-hidden rounded-full border border-accent/40 px-4 py-1.5 text-sm text-accent transition-colors duration-300 hover:text-bg sm:inline-flex sm:items-center"
          >
            <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            <span className="relative">Contato</span>
            <span className="relative ml-1.5 inline-block transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>

          <button
            type="button"
            data-menu-toggle
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls={MOBILE_MENU_ID}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink transition-colors hover:border-accent/40 sm:hidden"
          >
            <span className="sr-only">Menu</span>
            {[0, 1].map((i) => (
              <span
                key={i}
                aria-hidden
                className={`absolute h-px w-4 bg-current transition-all duration-300 ${
                  open
                    ? i === 0
                      ? "rotate-45"
                      : "-rotate-45"
                    : i === 0
                      ? "-translate-y-1"
                      : "translate-y-1"
                }`}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            id={MOBILE_MENU_ID}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t border-white/5 bg-bg/95 backdrop-blur-xl sm:hidden"
          >
            <ul className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/[0.04] hover:text-ink"
                  >
                    <span>{label}</span>
                    <span aria-hidden className="text-white/20">→</span>
                  </a>
                </motion.li>
              ))}

              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: NAV_LINKS.length * 0.05 }}
                className="mt-2"
              >
                <a
                  href="#contato"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-semibold text-bg"
                >
                  Vamos conversar →
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}