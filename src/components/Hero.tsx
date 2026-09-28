import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import type { MouseEvent } from "react";
import dudu from "../assets/Dudu.jpeg";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const techs = [
  "Node.js",
  "TypeScript",
  "Nest.js",
  "React",
  "PostgreSQL",
  "MongoDB",
  "AWS",
];

const spring = { stiffness: 120, damping: 20, mass: 0.4 };

export default function Hero() {
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, spring);
  const sy = useSpring(my, spring);

  const px = useMotionValue(-999);
  const py = useMotionValue(-999);
  const spotlight = useMotionTemplate`radial-gradient(620px circle at ${px}px ${py}px, rgba(120,220,255,0.18), rgba(160,120,255,0.10) 35%, transparent 70%)`;

  // Parallax das auroras
  const g1x = useTransform(sx, (v) => v * -30);
  const g1y = useTransform(sy, (v) => v * -30);
  const g2x = useTransform(sx, (v) => v * 40);
  const g2y = useTransform(sy, (v) => v * 40);
  const g3x = useTransform(sx, (v) => v * -34);
  const g3y = useTransform(sy, (v) => v * 34);

  // Tilt 3D
  const rotateX = useTransform(sy, (v) => v * -7);
  const rotateY = useTransform(sx, (v) => v * 9);
  const codeX = useTransform(sx, (v) => v * 14);
  const codeY = useTransform(sy, (v) => v * 14);
  const chipX = useTransform(sx, (v) => v * -18);
  const chipY = useTransform(sy, (v) => v * -12);

  // Reflexo holográfico dinâmico na foto
  const glareX = useTransform(px, (v) => `${v}px`);
  const glareY = useTransform(py, (v) => `${v}px`);
  const glare = useMotionTemplate`radial-gradient(320px circle at ${glareX} ${glareY}, rgba(255,255,255,0.14), transparent 60%)`;

  const handleMove = (e: MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set(e.clientX - rect.left);
    py.set(e.clientY - rect.top);
    mx.set((e.clientX / window.innerWidth - 0.5) * 2);
    my.set((e.clientY / window.innerHeight - 0.5) * 2);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
    px.set(-999);
    py.set(-999);
  };

  return (
    <section
      id="topo"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative mx-auto flex min-h-screen max-w-6xl items-center overflow-hidden px-6 pt-24 pb-16 lg:px-8"
    >
      {/* Grid em perspectiva com fade radial */}
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 -z-20 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(120,220,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(160,120,255,0.3) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
      />

      {/* Scanlines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 3px)",
        }}
      />

      {/* Vinheta ciano-roxo nas bordas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 50%, transparent 40%, rgba(10,8,20,0.75) 100%)",
        }}
      />

      {/* Spotlight que segue o cursor */}
      <motion.div
        aria-hidden="true"
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 -z-10"
      />

      {/* Auroras com parallax */}
      <motion.div
        aria-hidden="true"
        style={{ x: g1x, y: g1y }}
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[130px]"
      />
      <motion.div
        aria-hidden="true"
        style={{ x: g2x, y: g2y }}
        className="pointer-events-none absolute top-1/4 right-[15%] -z-10 h-80 w-80 rounded-full bg-fuchsia-500/15 blur-[110px]"
      />
      <motion.div
        aria-hidden="true"
        style={{ x: g3x, y: g3y }}
        className="pointer-events-none absolute bottom-[10%] left-[10%] -z-10 h-72 w-72 rounded-full bg-blue-500/15 blur-[110px]"
      />

      {/* Cantos HUD nos limites da seção */}
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Conteúdo */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={item} className="mb-5 flex items-center gap-3">
            <span
              className="h-px w-10 bg-gradient-to-r from-cyan-400 to-fuchsia-500"
              aria-hidden="true"
            />
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/[0.06] px-3.5 py-1.5 text-xs font-medium tracking-wide text-cyan-200md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300" />
              </span>
              Desenvolvedor Full Stack
              <span className="ml-1 h-3 w-px bg-cyan-300/40" />
              <span className="text-cyan-300/70">online</span>
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-semibold leading-[1.06] tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Construo{" "}
            <span className="relative inline-block">
              <span className="animate-[shimmer_6s_linear_infinite] bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-cyan-300 bg-[length:200%_auto] bg-clip-text text-transparent motion-reduce:animate-none">
                APIs robustas
              </span>
              {/* glow atrás do texto */}
            
            </span>
            <br />
            <span className="relative">
              e interfaces{" "}
              <span className="relative bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
                que funcionam.
                <motion.span
                  aria-hidden="true"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.9, ease: "easeOut" }}
                  className="absolute -bottom-2 left-0 h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-transparent shadow-[0_0_14px] shadow-cyan-400/80"
                />
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-base leading-7 text-muted sm:text-lg"
          >
            Desenvolvedor Full Stack focado na construção de APIs robustas,
            aplicações modernas e soluções escaláveis utilizando{" "}
            <span className="font-medium text-cyan-200">Node.js</span>,{" "}
            <span className="font-medium text-cyan-200">TypeScript</span>,{" "}
            <span className="font-medium text-cyan-200">Nest.js</span> e{" "}
            <span className="font-medium text-cyan-200">React.js</span>.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projetos"
              aria-label="Ver projetos"
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-7 py-3.5 text-sm font-semibold text-bg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_50px_-6px] hover:shadow-cyan-400/80 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/30"
              />
              <span className="relative">
                Ver projetos
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </a>

            <a
              href="#contato"
              className="group relative rounded-xl border border-cyan-400/20 bg-white/[0.02] px-7 py-3.5 text-sm font-medium text-ink backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-cyan-400/[0.06] hover:shadow-[0_0_32px_-8px] hover:shadow-cyan-400/60 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none"
            >
              <span className="relative flex items-center gap-2">
                Falar comigo
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-cyan-300 opacity-0 shadow-[0_0_8px] shadow-cyan-300 transition-opacity duration-300 group-hover:opacity-100"
                />
              </span>
            </a>
          </motion.div>

          {/* Stack */}
          <motion.ul
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-3 text-xs text-muted cursor-pointer
              "
          >
            {techs.map((tech) => (
              <li key={tech}>
                <span className="relative inline-block rounded-md border border-cyan-400/10 bg-white/[0.03] px-3 py-1.5 text-[11px] font-medium tracking-wide backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-cyan-400/[0.08] hover:text-cyan-200 hover:shadow-[0_0_18px_-4px] hover:shadow-cyan-400/60">
                  {tech}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Foto + código */}
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="relative mx-auto w-full max-w-md [perspective:1200px]"
        >
          {/* Foto com tilt 3D */}
          <motion.div
            style={
              reduce
                ? undefined
                : { rotateX, rotateY, transformStyle: "preserve-3d" }
            }
            className="group relative rounded-2xl p-[3px]"
          >
            {/* Borda holográfica giratória */}
            <div
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden rounded-2xl"
            >
              <div
                className="hero-spin absolute -inset-[60%] opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, rgba(120,220,255,0.95) 70deg, transparent 140deg, transparent 200deg, rgba(200,120,255,0.9) 270deg, transparent 340deg)",
                }}
              />
            </div>
            {/* Halo externo */}
         

            <div className="relative overflow-hidden rounded-[14px] border border-cyan-400/15 bg-bg">
              <img
                src={dudu}
                alt="Eduardo Neri Martins"
                loading="lazy"
                decoding="async"
                className="aspect-[2/1.5] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Reflexo holográfico que segue o mouse */}
              {!reduce && (
                <motion.div
                  aria-hidden="true"
                  style={{ background: glare }}
                  className="pointer-events-none absolute inset-0 mix-blend-screen"
                />
              )}

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-cyan-500/10" />

              {/* Reflexo de vidro */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60"
              />

              {/* Linha de scan */}
              {!reduce && (
                <motion.div
                  aria-hidden="true"
                  animate={{ y: ["-10%", "110%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="pointer-events-none absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-cyan-300/25 to-transparent"
                />
              )}

              {/* Cantos HUD */}
            </div>
          </motion.div>

          {/* Chip flutuante */}
          <motion.div
            style={reduce ? undefined : { x: chipX, y: chipY }}
            className="absolute -top-4 -right-2 z-20 sm:-right-6"
          >
            <div
              className={`flex items-center gap-2 rounded-full border border-emerald-400/30 bg-[#0b0a10]/80 px-3 py-1.5 text-[11px] font-medium text-emerald-200 ${
                reduce ? "" : "animate-[float_5s_ease-in-out_infinite]"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px] shadow-emerald-400" />
               Disponível
            </div>
          </motion.div>

          {/* Card de código */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 -mt-1 mr-2 ml-4 sm:mr-4 sm:ml-8"
          >
            <motion.div
              style={reduce ? undefined : { x: codeX, y: codeY }}
              className="relative overflow-hidden rounded-xl border border-cyan-400/15 bg-[#0b0a10]/85 p-4 font-code text-[11px] leading-6 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl sm:p-5 sm:text-xs lg:text-sm"
            >
              {/* Glow interno */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-cyan-400/25 blur-3xl"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl"
              />

              {/* Barra superior */}
              <div className="relative mb-6 flex items-center gap-1.5 border-b border-white/5 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />

                <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] text-cyan-200/70">
                  <span className="h-1 w-1 animate-pulse rounded-full bg-cyan-300 motion-reduce:animate-none" />
                  developer.ts
                </span>
              </div>

              <div className="relative overflow-x-auto text-muted">
                <p>
                  <span className="text-fuchsia-400">const</span>{" "}
                  <span className="text-cyan-200">dev</span> = {"{"}
                </p>

                <p className="pl-4">
                  nome:{" "}
                  <span className="text-emerald-300">
                    "Eduardo Neri Martins"
                  </span>
                  ,
                </p>

                <p className="pl-4">
                  stack: [
                  <span className="text-emerald-300">"JavaScript"</span>,{" "}
                  <span className="text-emerald-300">"Node.js"</span>,{" "}
                  <span className="text-emerald-300">"TypeScript"</span>,{" "}
                  <span className="text-emerald-300">"NestJs"</span>,{" "}
                  <span className="text-emerald-300">"React"</span>],
                </p>

                <p className="pl-4">
                  disponível: <span className="text-fuchsia-400">true</span>,
                </p>

                <p className="flex items-center">
                  {"}"}
                  <span
                    aria-hidden="true"
                    className="ml-1 inline-block h-4 w-[7px] animate-[blink_1.1s_steps(1)_infinite] bg-cyan-300/90 shadow-[0_0_8px] shadow-cyan-300/80 motion-reduce:animate-none"
                  />
                </p>
              </div>

              {/* Linha de brilho inferior */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Keyframes locais */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes spin360 {
          to { transform: rotate(360deg); }
        }
        @keyframes gridMove {
          to { background-position: 0 56px, 56px 0; }
        }
        .hero-spin { animation: spin360 8s linear infinite; }
        .hero-grid { animation: gridMove 6s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hero-spin, .hero-grid { animation: none; }
        }
      `}</style>
    </section>
  );
}