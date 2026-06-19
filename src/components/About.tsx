import { useEffect, useRef } from "react";

const stats = [
  { label: "Intern Experience", value: "1yr", icon: "🚀" },
  { label: "Projects Completed", value: "4+", icon: "✅" },
  { label: "Certifications", value: "3", icon: "🏆" },
  { label: "Languages Known", value: "3", icon: "🌐" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0a1a 0%, #0d0b20 100%)" }}
      ref={ref}
    >
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20 reveal opacity-0">
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">About Me</span>
          <h2 className="mt-2 text-white text-4xl md:text-5xl font-bold">
            Who I{" "}
            <span className="text-gradient">Am</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image + decorative */}
          <div className="relative reveal opacity-0">
            <div className="relative w-full max-w-md mx-auto">
              {/* Background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 rounded-3xl blur-xl" />

              {/* Main image card */}
              <div className="relative glass rounded-3xl overflow-hidden border border-white/10 p-1">
                <img
                  src="/images/about.jpg"
                  alt="Harunya Yogeswaran"
                  className="w-full rounded-2xl object-cover"
                  style={{ maxHeight: "480px", objectPosition: "top" }}
                />

                {/* Overlay tag */}
                <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">Software Engineer</div>
                      <div className="text-gray-400 text-xs">Full-Stack · AI/ML · IoT</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tech badge */}
              <div
                className="absolute -top-6 -right-6 glass rounded-2xl p-3 border border-white/10"
                style={{ animation: "float 4s ease-in-out infinite" }}
              >
                <div className="text-2xl">⚡</div>
                <div className="text-white text-xs font-medium mt-1">SLIIT Undergrad</div>
              </div>
            </div>
          </div>

          {/* Right - Text */}
          <div className="space-y-6">
            <div className="reveal opacity-0">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                Building intelligent systems with
                <span className="text-gradient"> real-world impact</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-base">
                I'm a motivated Software Engineer and IT undergraduate at SLIIT with industry experience
                as an Intern Software Engineer at GlenzSoft (Pvt) Ltd. I'm passionate about applying
                technical expertise across all stages of the Software Development Life Cycle.
              </p>
            </div>

            <div className="reveal opacity-0">
              <p className="text-gray-400 leading-relaxed text-base">
                Through academic coursework, industry exposure, and personal projects, I've developed
                strong skills in full-stack development, AI/ML-powered solutions, API integration, and
                scalable application design. I focus on clean architecture, problem-solving, and
                delivering real-world impact through technology.
              </p>
            </div>

            {/* Info grid */}
            <div className="reveal opacity-0 grid grid-cols-2 gap-4 pt-2">
              {[
                { label: "Name", value: "Harunya Yogeswaran" },
                { label: "Email", value: "harunyayogeswaran512@gmail.com" },
                { label: "University", value: "SLIIT" },
                { label: "Degree", value: "BSc (Hons) IT · 2022–2026" },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-2">
                  <span className="text-violet-400 font-medium text-sm whitespace-nowrap">{label}:</span>
                  <span className="text-gray-300 text-sm break-all">{value}</span>
                </div>
              ))}
            </div>

            <div className="reveal opacity-0 flex flex-wrap gap-4 pt-2">
              <a
                href="mailto:harunyayogeswaran512@gmail.com"
                className="btn-primary text-white font-semibold px-6 py-3 rounded-xl text-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </a>
              <a
                href="/images/Harunya Yogeswaran SE CV.pdf"
                download
                className="text-white font-semibold px-6 py-3 rounded-xl text-sm flex items-center gap-2 border border-white/20 hover:border-violet-500/50 hover:bg-white/5 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal opacity-0 glass rounded-2xl p-6 text-center border border-white/10 card-hover`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
