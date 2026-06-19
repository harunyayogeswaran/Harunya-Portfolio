import { useEffect, useRef, useState } from "react";

const filters = ["All", "AI/IoT", "Web App", "Mobile", "UI/UX"];

const projects = [
  {
    id: 1,
    title: "EcoGarden",
    description:
      "AI & IoT-Based Home Garden Monitoring & Organic Fertilizer Recommendation System. Full-stack platform to monitor plant health, predict growth stages, estimate crop yield, and deliver real-time recommendations.",
    image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    tags: ["Python", "TensorFlow", "Flutter", "FastAPI", "MongoDB", "ESP32", "MQTT", "Docker"],
    category: "AI/IoT",
    color: "from-green-600 to-emerald-600",
    links: { demo: "#", github: "https://github.com/Harunyayogeswaran" },
    period: "July 2025 – June 2026",
    type: "Research",
  },
  {
    id: 2,
    title: "NeatNest",
    description:
      "Home Inventory Management System with AI-powered recommendations, expense management, smart analytics & insights. Built analytics module with CRUD, stock tracking, graphs, and report generation.",
    image: "https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    tags: ["MERN Stack", "Tailwind CSS", "PostgreSQL", "Postman", "GitHub"],
    category: "Web App",
    color: "from-violet-600 to-indigo-600",
    links: { demo: "#", github: "https://github.com/Harunyayogeswaran" },
    period: "May 2025",
    type: "Project",
  },
  {
    id: 3,
    title: "TalentNest",
    description:
      "Education platform for students — like, comment, bookmark posts, task management, and profile management. React frontend with Bootstrap and MongoDB for data storage and user authentication.",
    image: "https://images.pexels.com/photos/34212916/pexels-photo-34212916.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    tags: ["React", "MongoDB", "Bootstrap", "Node.js"],
    category: "Web App",
    color: "from-indigo-600 to-blue-600",
    links: { demo: "#", github: "https://github.com/Harunyayogeswaran" },
    period: "May 2025",
    type: "Project",
  },
  {
    id: 4,
    title: "Flower Bangkok UI/UX Redesign",
    description:
      "UI/UX redesign for a flower & gifts e-commerce website. Conducted user interviews, identified pain points, and designed Figma prototypes to enhance usability, navigation, and responsiveness.",
    image: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=400&w=600",
    tags: ["Figma", "User Research", "Prototyping", "UX Analysis"],
    category: "UI/UX",
    color: "from-rose-600 to-pink-600",
    links: { demo: "#", github: "https://github.com/Harunyayogeswaran" },
    period: "Oct 2024",
    type: "Design",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a1a 0%, #0d0b20 100%)" }}
      ref={ref}
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-violet-900/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal opacity-0">
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="mt-2 text-white text-4xl md:text-5xl font-bold">
            Featured{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto" />
        </div>

        {/* Filters */}
        <div className="reveal opacity-0 flex flex-wrap gap-3 justify-center mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-900/50"
                  : "glass text-gray-400 hover:text-white border border-white/10 hover:border-violet-500/30"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="reveal opacity-0 group glass rounded-2xl overflow-hidden border border-white/10 card-hover"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.color} shadow-lg`}
                  >
                    {project.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-white/10 backdrop-blur-sm">
                    {project.type}
                  </span>
                </div>

                {/* Period */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs text-gray-300 bg-black/40 backdrop-blur-sm">
                    {project.period}
                  </span>
                </div>

                {/* Hover links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-violet-600 transition-colors duration-300"
                    title="GitHub"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-violet-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium text-violet-300 bg-violet-900/30 border border-violet-800/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-14 reveal opacity-0">
          <a
            href="https://github.com/Harunyayogeswaran"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 font-medium text-sm border border-violet-500/30 px-6 py-3 rounded-xl hover:bg-violet-900/20 transition-all duration-300"
          >
            View All Projects on GitHub
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
