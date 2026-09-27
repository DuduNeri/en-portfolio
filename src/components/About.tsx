import { motion, type Variants } from "framer-motion";

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

const stacks = [
  "Node.js",
  "TypeScript",
  "JavaScript",
  "PostgreSQL",
  "MongoDB",
  "React.js",
  "AWS",
];

export default function About() {
  return (
    <section
      id="sobre"
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
            Quem sou
          </span>
        </div>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Sobre mim
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted">
          Um pouco da minha trajetória, stack e forma de trabalhar.
        </p>
      </motion.div>

      {/* Conteúdo */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16"
      >
        {/* Texto */}
        <div className="space-y-5">
          <motion.p
            variants={item}
            className="max-w-prose text-base leading-relaxed text-muted sm:text-lg"
          >
            Desenvolvedor Full Stack com experiência em{" "}
            <span className="text-ink">Node.js</span>,{" "}
            <span className="text-ink">TypeScript</span>,{" "}
            <span className="text-ink">JavaScript</span>,{" "}
            <span className="text-ink">PostgreSQL</span>,{" "}
            <span className="text-ink">MongoDB</span>,{" "}
            <span className="text-ink">React.js</span> e{" "}
            <span className="text-ink">AWS</span>. Atuo na criação de APIs bem
            estruturadas, seguras e de alta performance, aplicando boas práticas
            de arquitetura, autenticação, versionamento e modelagem de dados.
          </motion.p>

          <motion.p
            variants={item}
            className="max-w-prose text-base leading-relaxed text-muted sm:text-lg"
          >
            Também possuo experiência com suporte técnico e ambientes em cloud,
            atuando com AWS, automação de infraestrutura, pipelines CI/CD,
            gerenciamento de ambientes, monitoramento e suporte às equipes de
            desenvolvimento.
          </motion.p>

          <motion.p
            variants={item}
            className="max-w-prose text-base leading-relaxed text-muted sm:text-lg"
          >
            Trabalho com foco em{" "}
            <span className="text-ink">clean code</span>, padronização,
            documentação clara e soluções técnicas robustas — construindo
            sistemas preparados para crescimento, manutenção e evolução contínua
            a longo prazo.
          </motion.p>
        </div>

        {/* Sidebar: destaques */}
        <motion.aside
          variants={item}
          className="flex flex-col gap-6"
        >
          {/* Card: princípios */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-accent/30 hover:bg-white/[0.04]">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent-2">
              Princípios
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              {[
                "Clean code e padronização",
                "Documentação clara e objetiva",
                "Arquitetura pensada para escalar",
                "Foco em performance e segurança",
              ].map((value) => (
                <li key={value} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                  />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card: stack */}
          <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors duration-300 hover:border-accent/30 hover:bg-white/[0.04]">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent-2">
              Stack principal
            </h3>
            <ul className="flex flex-wrap gap-2">
              {stacks.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-ink/90 transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}