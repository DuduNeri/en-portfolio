import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "E-mail",
    value: "eduardoneridev1@gmail.com",
    href: "mailto:eduardoneridev1@gmail.com",
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

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative border-t border-white/5"
    >
      <div className="relative mx-auto max-w-5xl px-6 py-28 lg:px-8">
        {/* Glow de fundo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
        />

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-2 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-2">
              Vamos conversar
            </span>
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Contato
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Aberto a vagas, projetos freelance e boas conversas sobre
            front-end, backend e infraestrutura.
          </p>
        </motion.div>

        {/* Cards de contato */}
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-3"
        >
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <motion.li key={contact.label} variants={item}>
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/[0.04] sm:p-6"
                >
                  {/* Glow sutil no hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />

                  {/* Ícone + label */}
                  <div className="relative flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ink transition-colors group-hover:border-accent/40 group-hover:text-accent">
                      <Icon size={18} />
                    </span>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-accent-2">
                      {contact.label}
                    </span>
                  </div>

                  {/* Valor + seta */}
                  <div className="relative mt-6 flex items-end justify-between gap-2">
                    <span className="break-all text-sm font-medium text-ink transition-colors group-hover:text-accent">
                      {contact.value}
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-accent"
                    >
                      →
                    </span>
                  </div>
                </a>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="mailto:eduardoneridev1@gmail.com"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <Mail size={16} />
            <span>Enviar e-mail</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}