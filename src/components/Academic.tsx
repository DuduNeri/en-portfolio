import { motion, type Variants } from "framer-motion";

interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  type: "ensino-medio" | "tecnico" | "graduacao" | "pos" | "curso";
  description?: string;
  status?: "concluido" | "cursando";
}

const education: Education[] = [
  {
    degree: "Tecnologia em Sistemas para Internet",
    institution: "IFPI — Campus São Raimundo Nonato",
    period: "fev 2026 — cursando",
    location: "São Raimundo Nonato, Piauí · Presencial",
    type: "graduacao",
    status: "cursando",
    description:
      "Formação superior com foco em desenvolvimento web, banco de dados, infraestrutura e engenharia de software.",
  },
  {
    degree: "Técnico Programador Web",
    institution: "Senac — São Raimundo Nonato",
    period: "mai 2024 — nov 2024",
    location: "São Raimundo Nonato, Piauí · Presencial",
    type: "tecnico",
    status: "concluido",
    description:
      "Curso técnico com foco em HTML, CSS, JavaScript, lógica de programação, ReactJs, NodeJs, e desenvolvimento de aplicações web.",
  },
  {
    degree: "Ensino Médio",
    institution: "CEEP Gercílio de Castro Macedo",
    period: "fev 2016 — dez 2018",
    location: "São Raimundo Nonato, Piauí",
    type: "ensino-medio",
    status: "concluido",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
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

const typeLabel: Record<Education["type"], string> = {
  "ensino-medio": "Ensino Médio",
  tecnico: "Técnico",
  graduacao: "Graduação",
  pos: "Pós-graduação",
  curso: "Curso",
};

export default function Academic() {
  return (
    <section
      id="experiencia"
      className="relative mx-auto max-w-5xl px-6 py-28 lg:px-8"
    >
      {/* Cabeçalho */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <div className="mb-2 flex items-center gap-3">
          <span className="h-px w-10 bg-accent" aria-hidden="true" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-2">
            Trajetória
          </span>
        </div>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Formação acadêmica
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Minha base de estudos — do ensino médio à graduação em tecnologia.
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.ol
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="relative space-y-12 border-l border-white/10 pl-8 sm:pl-10"
      >
        {education.map((edu) => {
          const isCurrent = edu.status === "cursando";

          return (
            <motion.li
              key={edu.institution + edu.period}
              variants={item}
              className="group relative"
            >
              {/* Marcador */}
              <span
                aria-hidden="true"
                className={`absolute top-1.5 -left-[calc(2rem+6px)] flex h-3 w-3 items-center justify-center sm:-left-[calc(2.5rem+6px)] ${
                  isCurrent ? "text-accent" : "text-white/20"
                }`}
              >
                {isCurrent && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                )}
                <span
                  className={`relative inline-flex h-3 w-3 rounded-full ring-4 ring-bg ${
                    isCurrent ? "bg-accent" : "bg-white/30"
                  }`}
                />
              </span>

              {/* Card */}
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/[0.04] sm:p-6">
                {/* Linha do topo: tipo + status + período */}
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted">
                    {typeLabel[edu.type]}
                  </span>

                  {isCurrent && (
                    <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                      Cursando
                    </span>
                  )}

                  <span className="ml-auto font-code text-[11px] text-accent-2">
                    {edu.period}
                  </span>
                </div>

                {/* Curso + instituição */}
                <h3 className="font-display text-lg font-medium leading-snug text-ink">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  <span className="text-ink/80">{edu.institution}</span>
                </p>

                {/* Local */}
                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-3.5 w-3.5 text-white/30"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z"
                    />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  {edu.location}
                </p>

                {/* Descrição opcional */}
                {edu.description && (
                  <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted">
                    {edu.description}
                  </p>
                )}
              </div>
            </motion.li>
          );
        })}
      </motion.ol>
    </section>
  );
}