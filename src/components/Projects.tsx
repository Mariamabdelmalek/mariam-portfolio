// src\components\Projects.tsx
import Image from "next/image";
const projects = [
  {
    title: "DealerLift CRM",
    tech: "Next.js • React • TypeScript • PostgreSQL • Supabase",
    description:
      "A full-stack vehicle inventory management system with VIN lookup, image uploads, CRUD operations, and secure cloud database integration.",
    github: "https://github.com/Mariamabdelmalek/dealerlift-crm",
    image: "/images/projects/dealerlift1.png"
  },
  {
    title: "Social Media Privacy Tool",
    tech: "React • Node.js • Express.js • Render",
    description:
      "A deployed full-stack application that analyzes Instagram data exports and detects exposed Personally Identifiable Information (PII).",
    github: "https://github.com/Mariamabdelmalek/privacy-tool",
    demo: "https://privacy-tool.onrender.com",
     image: "/images/projects/pii-1.png",
  },
  {
  title: "Housing Price Prediction using Machine Learning",
  tech: "Python • Scikit-learn • Pandas • NumPy • Matplotlib • XGBoost",
  description:
    "Developed and evaluated multiple regression models including Linear Regression, Ridge Regression, Lasso Regression, Random Forest, and XGBoost to predict housing prices. Performed data preprocessing, feature engineering, visualization, and model evaluation using MSE, MAE, and R² metrics.",
  github: "https://github.com/Mariamabdelmalek/ML_Project",
   image: "/images/projects/houseprediction1.png",
  
},
  {
  title: "Personal Budget Dashboard",
  tech: "HTML • CSS • JavaScript • Node.js • MongoDB • Chart.js",
  description:
    "A personal budgeting web application that tracks financial data and visualizes budget information using charts and a Node.js backend.",
  github: "https://github.com/Mariamabdelmalek/personal-budget1",
}
  
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-900 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Projects
        </p>
        <h2 className="mt-3 text-4xl font-bold">Featured Work</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-3xl border border-white/10 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-emerald-400/60"
            >
              <div className="relative mb-6 h-56 overflow-hidden rounded-2xl border border-white/10 bg-slate-100">
  {project.image && (
    <Image
      src={project.image}
      alt={project.title}
      fill
      className="object-contain p-2 transition duration-500 hover:scale-105"
    />
  )}
</div>
                            <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-3 text-sm font-medium text-emerald-400">
                {project.tech}
              </p>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    className="rounded-full border border-white/20 px-4 py-2 text-sm hover:border-emerald-400 hover:text-emerald-400"
                  >
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}