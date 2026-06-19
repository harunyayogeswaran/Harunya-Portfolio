import { useEffect, useRef } from "react";

const certifications = [
  { name: "AWS Certified Cloud Practitioner", icon: "☁️" },
  { name: "Microsoft Azure AI Fundamentals", icon: "🤖" },
  { name: "AWS Certified Developer – Associate", icon: "🛠️" },
];

const education = [
  {
    degree: "BSc (Hons) in Information Technology",
    school: "SLIIT – Sri Lanka",
    period: "June 2022 – 2026",
    status: "In Progress",
  },
  {
    degree: "G.C.E. Advanced Level – Physical Science",
    school: "Kandy Girls' High School",
    period: "2018 – 2020",
    status: "Completed",
  },
  {
    degree: "G.C.E. Ordinary Level",
    school: "K/Viharamahadevi Girls' College",
    period: "2017",
    status: "Completed",
  },
];

export default function Experience() {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0b20 0%, #0a0a1a 100%)" }}
      ref={ref}
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-violet-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-900/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20 reveal opacity-0">
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">
            My Journey
          </span>
          <h2 className="mt-2 text-white text-4xl md:text-5xl font-bold">
            Experience &{" "}
            <span className="text-gradient">Education</span>
          </h2>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mx-auto" />
        </div>

        {/* ── Row 1: Work Experience (full width) ── */}
        <div className="reveal opacity-0 mb-12">
          <div className="glass rounded-2xl border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-lg flex-shrink-0">
                💼
              </div>
              <h3 className="text-white font-bold text-xl">Work Experience</h3>
            </div>
            {/* Role header */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h4 className="text-white font-bold text-lg">Intern Software Engineer</h4>
                <p className="text-violet-400 font-medium text-sm mt-0.5">GlenzSoft (Pvt) Ltd</p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-gray-400 text-xs">June 2025 – April 2026</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-violet-900/30 text-violet-300 border border-violet-800/30">
                  Internship
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Architected and delivered enterprise-grade POS and Line-of-Business systems, engineered
              cross-platform mobile apps, and built RESTful APIs used in production environments.
            </p>

            {/* Achievements in 2-col grid */}
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {[
                "Built enterprise POS & LOB systems with optimized MySQL backends",
                "Developed .NET MAUI + Firebase cross-platform inventory apps",
                "Designed RESTful APIs with Swagger/OpenAPI specifications",
                "Advanced DB query optimization reducing load times significantly",
                "Led client-facing technical support & requirement analysis sessions",
                "Collaborated in Agile cross-functional teams for continuous delivery",
              ].map((ach) => (
                <li key={ach} className="flex items-start gap-2 text-sm text-gray-300">
                  <svg className="w-3.5 h-3.5 text-violet-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  {ach}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Row 2: Education (full width) ── */}
        <div className="reveal opacity-0 mb-12">
          <div className="glass rounded-2xl border border-white/10 p-6">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center text-lg flex-shrink-0">
                🎓
              </div>
              <h3 className="text-white font-bold text-xl">Education</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {education.map((edu) => (
                <div key={edu.degree} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-white font-semibold text-sm leading-snug">{edu.degree}</div>
                  <div className="text-violet-400 text-xs mt-1.5">{edu.school}</div>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-gray-500 text-xs">{edu.period}</span>
                    <span className={`text-xs font-medium ${edu.status === "In Progress" ? "text-amber-400" : "text-green-400"}`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Row 3: Certifications | Cloud | Languages ── */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Certifications */}
          <div className="reveal opacity-0 glass rounded-2xl border border-white/10 p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-lg flex-shrink-0">
                🏅
              </div>
              <h3 className="text-white font-bold text-xl">Certifications</h3>
            </div>
            <div className="space-y-4 flex-1">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center gap-3">
                  <span className="text-xl flex-shrink-0">{cert.icon}</span>
                  <span className="text-gray-300 text-sm leading-snug">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud Platforms */}
          <div className="reveal opacity-0 glass rounded-2xl border border-white/10 p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-600 to-teal-600 flex items-center justify-center text-lg flex-shrink-0">
                ☁️
              </div>
              <h3 className="text-white font-bold text-xl">Cloud Platforms</h3>
            </div>
            <div className="space-y-4 flex-1">
              <div>
                <div className="text-violet-400 text-xs font-semibold uppercase tracking-wider mb-2">AWS</div>
                <div className="flex flex-wrap gap-2">
                  {["EC2", "S3", "VPC", "RDS", "Lambda", "CloudFormation"].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-lg text-xs font-medium text-violet-300 bg-violet-900/30 border border-violet-800/30">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">Azure</div>
                <div className="flex flex-wrap gap-2">
                  {["Virtual Machines", "Virtual Networks"].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-lg text-xs font-medium text-indigo-300 bg-indigo-900/30 border border-indigo-800/30">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="reveal opacity-0 glass rounded-2xl border border-white/10 p-6 flex flex-col">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center text-lg flex-shrink-0">
                🌍
              </div>
              <h3 className="text-white font-bold text-xl">Languages</h3>
            </div>
            <div className="space-y-5 flex-1">
              {[
                { lang: "English", level: "Full Professional", pct: 90 },
                { lang: "Sinhala", level: "Native / Bilingual", pct: 100 },
                { lang: "Tamil", level: "Native / Bilingual", pct: 100 },
              ].map((l) => (
                <div key={l.lang}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-gray-300 text-sm font-medium">{l.lang}</span>
                    <span className="text-violet-400 text-xs">{l.level}</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"
                      style={{ width: `${l.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
