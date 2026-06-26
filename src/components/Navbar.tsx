// src\components\Navbar.tsx
export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold tracking-tight">
          Mariam Abdelmalek
        </a>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#skills" className="hover:text-emerald-400">Skills</a>
          <a href="#projects" className="hover:text-emerald-400">Projects</a>
          <a href="#experience" className="hover:text-emerald-400">Experience</a>
          <a href="#contact" className="hover:text-emerald-400">Contact</a>
        </div>
      </nav>
    </header>
  );
}