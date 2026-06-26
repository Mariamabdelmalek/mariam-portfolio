// src\components\Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Contact
        </p>

        <h2 className="mt-3 text-4xl font-bold">Let&apos;s Connect</h2>

        <p className="mt-5 text-lg leading-8 text-slate-300">
          I&apos;m open to software engineering, full-stack, backend, and
          AI-related opportunities.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:merodev25@gmail.com"
            className="rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Mariamabdelmalek"
            target="_blank"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold hover:border-emerald-400 hover:text-emerald-400"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/MariamAbdelmalek"
            target="_blank"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold hover:border-emerald-400 hover:text-emerald-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}