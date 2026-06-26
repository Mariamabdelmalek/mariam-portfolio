// src\components\Experience.tsx
const experience = [
  {
    role: "Graduate Assistant",
    company: "University of North Carolina at Charlotte",
    date: "Jan 2026 – Present",
    text: "Support Computer Science courses through grading, labs, office hours, and programming assistance.",
  },
  {
    role: "Technical Fellow",
    company: "CodePath",
    date: "Aug 2025 – Feb 2026",
    text: "Mentored 20+ students in Data Structures, Algorithms, and Software Engineering.",
  },
  {
    role: "Research Intern",
    company: "Yohe Lab, UNC Charlotte",
    date: "Jan 2025 – Apr 2025",
    text: "Developed deep learning image classification pipelines using Python, PyTorch, and OpenCV.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Experience
        </p>
        <h2 className="mt-3 text-4xl font-bold">Professional Experience</h2>

        <div className="mt-10 space-y-6">
          {experience.map((item) => (
            <div
              key={item.role}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-bold">{item.role}</h3>
                  <p className="mt-1 text-slate-400">{item.company}</p>
                </div>
                <p className="text-sm text-emerald-400">{item.date}</p>
              </div>
              <p className="mt-4 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}