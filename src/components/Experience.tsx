import { motion, type Variants } from "framer-motion";

interface Job {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  current?: boolean;
  highlights?: string[];
}

const jobs: Job[] = [
  {
    role: "Analista de Suporte Técnico",
    company: "BSP Cloud",
    period: "mai 2026 — set 2026",
    location: "São Paulo, Brasil · Remoto",
    description:
      "Atuação com foco em AWS, automação de infraestrutura, pipelines CI/CD, gerenciamento de ambientes, monitoramento e suporte às equipes de desenvolvimento.",
    highlights: [
      "AWS",
      "Automação de infraestrutura",
      "CI/CD",
    ],
  },
  {
    role: "Suporte Técnico / Desenvolvedor Front-end",
    company: "Weducar",
    period: "ago 2025 — mai 2026",
    location: "São Raimundo Nonato, Piauí · Híbrido",
    description:
      "Apoio no desenvolvimento e manutenção de funcionalidades da plataforma, seguindo boas práticas de programação e orientação do time técnico.",
    highlights: [
      "Desenvolvimento front-end",
      "Suporte técnico a usuários",
      "Análise de bugs e falhas",
      "Melhoria contínua da aplicação",
    ],
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

export default function Experience() {
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
            Carreira
          </span>
        </div>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Experiência profissional
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Onde apliquei minhas habilidades em projetos e times reais.
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
        {jobs.map((job) => (
          <motion.li
            key={job.company + job.period}
            variants={item}
            className="group relative"
          >
            {/* Marcador */}
            <span
              aria-hidden="true"
              className={`absolute top-1.5 -left-[calc(2rem+6px)] flex h-3 w-3 items-center justify-center sm:-left-[calc(2.5rem+6px)] ${
                job.current ? "text-accent" : "text-white/20"
              }`}
            >
              {job.current && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
              )}
              <span
                className={`relative inline-flex h-3 w-3 rounded-full ring-4 ring-bg ${
                  job.current ? "bg-accent" : "bg-white/30"
                }`}
              />
            </span>

            {/* Card */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/[0.04] sm:p-6">
              {/* Topo: período + (opcional) status */}
              <div className="mb-3 flex flex-wrap items-center gap-2">
                {job.current && (
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    Atual
                  </span>
                )}

                <span className="ml-auto font-code text-[11px] text-accent-2">
                  {job.period}
                </span>
              </div>

              {/* Cargo */}
              <h3 className="font-display text-lg font-medium leading-snug text-ink">
                {job.role}
              </h3>

              {/* Empresa + local */}
              <p className="mt-1 text-sm text-muted">
                <span className="text-ink/80">{job.company}</span>
              </p>

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
                {job.location}
              </p>

              {/* Descrição */}
              <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted">
                {job.description}
              </p>

              {/* Highlights / tags */}
              {job.highlights && job.highlights.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.highlights.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] font-medium text-ink/90 transition-colors hover:border-accent/40 hover:text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}