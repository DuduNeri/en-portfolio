import { motion, type Variants } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";

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

export default function Projects() {
  return (
    <section
      id="projetos"
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
            Trabalhos
          </span>
        </div>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Projetos selecionados
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Uma seleção do que construí — APIs, aplicações e experimentos.
        </p>
      </motion.div>

      {/* Grid de projetos */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-5 sm:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={item}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/[0.04] sm:p-6"
          >
            {/* Glow sutil no hover */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
            />

            {/* Topo: título + links */}
            <div className="relative flex flex-wrap items-start justify-between gap-3">
              <h3 className="font-display text-lg font-medium leading-snug text-ink sm:text-xl">
                {project.title}
              </h3>

              <div className="flex gap-1">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Repositório de ${project.title}`}
                    className="rounded-lg border border-transparent p-2 text-muted transition-all duration-200 hover:border-white/10 hover:bg-white/[0.04] hover:text-ink"
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Ver ${project.title} online`}
                    className="rounded-lg border border-transparent p-2 text-muted transition-all duration-200 hover:border-white/10 hover:bg-white/[0.04] hover:text-ink"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            {/* Descrição */}
            <p className="relative mt-3 max-w-prose text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            {/* Stack */}
            <ul className="relative mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-code text-[11px] font-medium text-ink/90 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
