export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
    >
      {/* Background glow */}
      <div className="absolute left-10 top-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute bottom-24 right-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Left side */}
        <div>
          <p className="mb-4 inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
            Open to Software Engineering Opportunities
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-blue-400 bg-clip-text text-transparent">
              Mariam Abdelmalek
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Software Engineer and M.S. Computer Science student at UNC
            Charlotte. I build full-stack applications using React, Next.js,
            Node.js, Python, Java, databases, and cloud technologies.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-emerald-300"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-300"
            >
              Download Resume
            </a>

            <a
              href="mailto:merodev25@gmail.com"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-blue-400 hover:text-blue-300"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex gap-5 text-sm text-slate-400">
            <a
              href="https://github.com/Mariamabdelmalek"
              target="_blank"
              className="hover:text-emerald-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/MariamAbdelmalek"
              target="_blank"
              className="hover:text-emerald-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:merodev25@gmail.com"
              className="hover:text-emerald-300"
            >
              Email
            </a>
          </div>
        </div>

        {/* Right side card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <div className="mb-6 h-40 rounded-2xl bg-gradient-to-br from-emerald-400/30 via-blue-400/20 to-purple-400/20" />

          <p className="text-sm text-slate-400">Currently</p>
          <h2 className="mt-2 text-2xl font-bold">
            M.S. Computer Science Student
          </h2>
          <p className="mt-3 text-slate-300">
            University of North Carolina at Charlotte
          </p>

          <div className="mt-8 grid gap-4">
            <Info label="Focus" value="Full-Stack Software Engineering" />
            <Info label="Tech Stack" value="React • Next.js • Node.js • Python" />
            <Info label="Location" value="Charlotte, North Carolina" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-1 font-semibold text-white">{value}</p>
    </div>
  );
}