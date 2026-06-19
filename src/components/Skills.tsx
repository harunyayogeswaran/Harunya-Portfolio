import { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    color: "from-violet-600 to-purple-600",
    skills: [
      { name: "React / Bootstrap", level: 88 },
      { name: "HTML / CSS", level: 90 },
      { name: "Figma / UI Design", level: 82 },
      { name: "Flutter", level: 78 },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: "from-indigo-600 to-blue-600",
    skills: [
      { name: "Node.js / Express", level: 85 },
      { name: "Python / FastAPI", level: 80 },
      { name: "MySQL / MongoDB", level: 87 },
      { name: "Laravel / PHP", level: 72 },
    ],
  },
  {
    title: "AI / ML & IoT",
    icon: "🤖",
    color: "from-cyan-600 to-teal-600",
    skills: [
      { name: "TensorFlow / CNN", level: 75 },
      { name: "Scikit-learn / ML", level: 78 },
      { name: "OpenCV", level: 72 },
      { name: "ESP32 / MQTT / IoT", level: 70 },
    ],
  },
];

const techStack = [
  { name: "Python", emoji: "🐍" },
  { name: "Java", emoji: "☕" },
  { name: "JavaScript", emoji: "🟨" },
  { name: "React", emoji: "⚛️" },
  { name: "Node.js", emoji: "🟢" },
  { name: "MongoDB", emoji: "🍃" },
  { name: "MySQL", emoji: "🐬" },
  { name: "Firebase", emoji: "🔥" },
  { name: "Flutter", emoji: "💙" },
  { name: "Docker", emoji: "🐳" },
  { name: "AWS", emoji: "☁️" },
  { name: "Git", emoji: "🔀" },
  { name: "Figma", emoji: "🎨" },
  { name: "FastAPI", emoji: "⚡" },
  { name: "TensorFlow", emoji: "🧠" },
  { name: "Postman", emoji: "📮" },
  { name: ".NET MAUI", emoji: "🪟" },
  { name: "Kotlin", emoji: "🟣" },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);
  const barsAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              (el as HTMLElement).style.animationDelay = `${i * 0.1}s`;
              el.classList.add("animate-fade-in-up");
              el.classList.remove("opacity-0");
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !barsAnimated.current) {
            barsAnimated.current = true;
            entry.target.querySelectorAll(".skill-bar-fill").forEach((bar) => {
              const el = bar as HTMLElement;
              const width = el.dataset.width || "0";
              el.style.width = "0%";
              setTimeout(() => {
                el.style.transition = "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)";
                el.style.width = width + "%";
              }, 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    if (barsRef.current) barObserver.observe(barsRef.current);

    return () => {
      observer.disconnect();
      barObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0b20 0%, #0a0a1a 100%)" }}
      ref={ref}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 reveal opacity-0">
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">
            My Skills
          </span>
          <h2 className="mt-2 text-white text-4xl md:text-5xl font-bold">
            Technologies I{" "}
            <span className="text-gradient">Work With</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto" />
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20" ref={barsRef}>
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.title}
              className="reveal opacity-0 glass rounded-2xl p-6 border border-white/10 card-hover"
              style={{ animationDelay: `${ci * 0.15}s` }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-lg`}>
                  {cat.icon}
                </div>
                <h3 className="text-white font-bold text-lg">{cat.title}</h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-violet-400 text-xs font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`skill-bar-fill h-full bg-gradient-to-r ${cat.color} rounded-full`}
                        data-width={skill.level}
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills row */}
        <div className="reveal opacity-0 mb-12">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Programming Languages", items: "Python, Java, JavaScript, PHP, Kotlin, R, C++", icon: "💻" },
              { label: "Tools / IDEs", items: "Visual Studio, Eclipse, R Studio, Jupyter Notebook", icon: "🛠️" },
              { label: "Project Management", items: "Jira, Trello, Agile, Git, GitHub", icon: "📋" },
            ].map((row) => (
              <div key={row.label} className="glass rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{row.icon}</span>
                  <span className="text-white font-semibold text-sm">{row.label}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{row.items}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="reveal opacity-0">
          <h3 className="text-center text-gray-400 text-sm uppercase tracking-widest mb-8">
            Full Tech Stack
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {techStack.map((tech, i) => (
              <div
                key={tech.name}
                className="glass rounded-2xl p-4 flex flex-col items-center gap-2 border border-white/10 card-hover cursor-default group"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                  {tech.emoji}
                </span>
                <span className="text-gray-400 text-xs font-medium group-hover:text-violet-400 transition-colors duration-300 text-center">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
