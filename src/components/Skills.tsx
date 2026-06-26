const categories = [
  {
    title: "💻 Languages",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "C++",
      "C",
      "C#",
    ],
  },
  {
    title: "🎨 Frontend",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "Angular",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "⚙️ Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Flask",
      "REST APIs",
      "JSON",
      "MVC",
    ],
  },
  {
    title: "🗄 Databases",
    skills: [
      "PostgreSQL",
      "Supabase",
      "MySQL",
      "MongoDB",
      "SQL",
    ],
  },
  {
    title: "☁️ Cloud & DevOps",
    skills: [
      "AWS",
      "Docker",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Render",
      "Postman",
    ],
  },
  {
    title: "🤖 AI / Machine Learning",
    skills: [
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "XGBoost",
      "Linear Regression",
      "Random Forest",
      "Feature Engineering",
      "Data Visualization",
    ],
  },
  {
    title: "🛠 Software Engineering",
    skills: [
      "OOP",
      "Data Structures",
      "Algorithms",
      "SDLC",
      "Agile/Scrum",
      "JUnit",
      "Debugging",
      "Documentation",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Skills
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          Technical Toolbox
        </h2>

        <p className="mt-4 max-w-3xl text-slate-400">
          Technologies and tools I've used to build full-stack applications,
          machine learning projects, cloud solutions, and mobile apps.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-3xl border border-white/10 bg-slate-900 p-7 transition duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/10"
            >

              <h3 className="mb-6 text-2xl font-bold">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-slate-800 px-4 py-2 text-sm transition hover:bg-emerald-500 hover:text-slate-950"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}