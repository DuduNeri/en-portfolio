import { motion, type Variants } from "framer-motion";
import { skillGroups } from "../data/skills";

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

export default function Skills() {
  return (
    <section
      id="stack"
      className="border-y border-white/5 bg-surface/40"
    >
      <div className="relative mx-auto max-w-5xl px-6 py-28 lg:px-8">
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
              Ferramentas
            </span>
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Stack & tecnologias
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            As linguagens, frameworks e ferramentas que uso no dia a dia.
          </p>
        </motion.div>

        {/* Grupos */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.label}
              variants={item}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-white/[0.04]"
            >
              {/* Cabeçalho do grupo */}
              <div className="mb-4 flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                />
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-2">
                  {group.label}
                </h3>
              </div>

              {/* Lista */}
              <ul className="space-y-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted transition-colors group-hover:text-ink/90"
                  >
                    <span
                      aria-hidden="true"
                      className="h-px w-3 bg-white/15"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}