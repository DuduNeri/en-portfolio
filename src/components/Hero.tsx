import { motion, type Variants } from "framer-motion";
import dudu from "../assets/Dudu.jpeg";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-24 pb-16 lg:px-8"
    >
      {/* Glow de fundo */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Conteúdo */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={item} className="mb-1 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />

            <span className="text-sm font-medium tracking-wide text-accent-2">
             Desenvolvedor Full Stack
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Construo APIs robustas
            <br />
            <span className="text-accent">e interfaces que funcionam.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg"
          >
            Desenvolvedor Full Stack focado na construção de APIs robustas,
            aplicações modernas e soluções escaláveis utilizando{" "}
            <span className="text-ink">Node.js</span>,{" "}
            <span className="text-ink">TypeScript</span>,{" "}
            <span className="text-ink">Nest.js</span> e{" "}
            <span className="text-ink">React.js</span>.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projetos"
              aria-label="Ver projetos"
              className="group rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Ver projetos
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#contato"
              className="rounded-lg border border-white/10 bg-white/[0.02] px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Falar comigo
            </a>
          </motion.div>

          {/* Stack */}
          <motion.ul
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-muted"
          >
            <li>Node.js</li>
            <li aria-hidden="true" className="text-white/20">
              •
            </li>
            <li>TypeScript</li>
            <li aria-hidden="true" className="text-white/20">
              •
            </li>
            <li>Nest.js</li>
            <li aria-hidden="true" className="text-white/20">
              •
            </li>
            <li>React</li>
            <li aria-hidden="true" className="text-white/20">
              •
            </li>
            <li>PostgreSQL</li>
            <li aria-hidden="true" className="text-white/20">
              •
            </li>
            <li>MongoDB</li>
            <li aria-hidden="true" className="text-white/20">
              •
            </li>
            <li>AWS</li>
          </motion.ul>
        </motion.div>

        {/* Foto + código */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="relative mx-auto w-full max-w-md"
        >
          {/* Foto */}
          <div className="relative rounded-2xl p-2">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={dudu}
                alt="Eduardo Neri Martins"
                loading="lazy"
                decoding="async"
                className="aspect-[2/1.5] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
              />

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>

          {/* Card de código */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="relative -mt 0 ml-4 mr-2 rounded-xl border border-white/10 bg-[#111015]/95 p-4 font-code text-[11px] leading-6 shadow-2xl backdrop-blur-xl sm:ml-8 sm:mr-4 sm:p-5 sm:text-xs lg:text-sm"
          >
            {/* Barra superior */}
            <div className="mb-4 flex items-center gap-1.5 border-b border-white/5 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

              <span className="ml-auto text-[10px] text-muted">
                developer.ts
              </span>
            </div>

            <div className="overflow-x-auto text-muted">
              <p>
                <span className="text-accent-2">const</span>{" "}
                <span className="text-ink">dev</span> = {"{"}
              </p>

              <p className="pl-4">
                nome:{" "}
                <span className="text-accent">"Eduardo Neri Martins"</span>,
              </p>

              <p className="pl-4">
                stack: [
                  <span className="text-accent">"JavaScript"</span>,{" "}
                  <span className="text-accent">"Node.js"</span>,{" "}
                <span className="text-accent">"TypeScript"</span>,{" "}
                <span className="text-accent">"NestJs"</span>,{" "}
                <span className="text-accent">"React"</span>],
              </p>

              <p className="pl-4">
                disponível: <span className="text-accent-2">true</span>,
              </p>

              <p>{"}"}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
