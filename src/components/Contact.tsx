import { useState } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from "lucide-react";

const EMAIL = "eduardoneridev1@gmail.com";

const contacts = [
  {
    icon: Mail,
    label: "E-mail",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/DuduNeri",
    href: "https://github.com/DuduNeri",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/eduardo-neri-martins",
    href: "https://www.linkedin.com/in/eduardo-neri-martins/",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export default function Contact() {
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Sem permissão de clipboard: o link mailto continua disponível.
    }
  };

  const initial = reduce ? false : "hidden";

  return (
    <section id="contato" className="relative border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-28 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Chamada */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease }}
            className="max-w-md"
          >
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
             Vamos conversar!
            </h2>
            <p className="mt-5 text-base leading-7 text-muted">
              Estou aberto a vagas, projetos freelance e conversas sobre
              front-end, back-end e infraestrutura. Respondo por e-mail ou
              pelas redes.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-bg transition-colors duration-200 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <Mail size={16} aria-hidden="true" />
                Enviar e-mail
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-white/35 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                {copied ? (
                  <Check size={16} aria-hidden="true" className="text-accent" />
                ) : (
                  <Copy size={16} aria-hidden="true" />
                )}
                {copied ? "E-mail copiado" : "Copiar e-mail"}
              </button>
              <span className="sr-only" role="status" aria-live="polite">
                {copied ? "E-mail copiado para a área de transferência" : ""}
              </span>
            </div>
          </motion.div>

          {/* Lista de contatos */}
          <motion.ul
            variants={container}
            initial={initial}
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="divide-y divide-white/10 border-y border-white/10"
          >
            {contacts.map(({ icon: Icon, label, value, href }) => {
              const external = href.startsWith("http");
              return (
                <motion.li key={label} variants={item}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 py-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:gap-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-muted transition-colors duration-200 group-hover:border-accent/50 group-hover:text-accent">
                      <Icon size={18} aria-hidden="true" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm text-muted">{label}</span>
                      <span className="mt-0.5 block break-words text-base font-medium text-ink transition-colors duration-200 group-hover:text-accent sm:text-lg">
                        {value}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={20}
                      aria-hidden="true"
                      className="shrink-0 text-muted transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}