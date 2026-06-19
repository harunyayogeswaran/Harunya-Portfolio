import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "AI/ML Enthusiast",
  "IoT Solutions Builder",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0a1a 0%, #0d0d2b 40%, #0f0a1e 70%, #0a0a1a 100%)",
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url(/images/hero-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-violet-400/20"
          style={{
            width: `${Math.random() * 8 + 3}px`,
            height: `${Math.random() * 8 + 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 pt-20">
        {/* Left Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="animate-fade-in-up opacity-0 delay-100">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-violet-300 text-sm font-medium mb-6 border border-violet-500/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for work
            </span>
          </div>

          <h1 className="animate-fade-in-up opacity-0 delay-200">
            <span className="block text-gray-300 text-xl md:text-2xl font-light mb-2">
              Hello, I'm
            </span>
            <span className="block text-white text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Harunya{" "}
              <span className="text-gradient">Yogeswaran</span>
            </span>
          </h1>

          <div className="mt-4 h-12 flex items-center justify-center lg:justify-start animate-fade-in-up opacity-0 delay-300">
            <span className="text-gray-400 text-xl md:text-2xl mr-3">I'm a</span>
            <span className="text-violet-400 text-xl md:text-2xl font-semibold border-r-2 border-violet-400 pr-1">
              {displayed}
            </span>
          </div>

          <p className="mt-6 text-gray-400 text-lg max-w-xl leading-relaxed animate-fade-in-up opacity-0 delay-400">
            IT undergraduate at SLIIT and Intern Software Engineer at GlenzSoft. Passionate about
            full-stack development, AI/ML-powered solutions, and building intelligent, high-performance systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0 delay-500">
            <button
              onClick={() => scrollTo("projects")}
              className="btn-primary text-white font-semibold px-8 py-3.5 rounded-2xl flex items-center gap-2 text-sm"
            >
              View My Work
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="text-white font-semibold px-8 py-3.5 rounded-2xl border border-white/20 hover:border-violet-500/50 hover:bg-white/5 transition-all duration-300 flex items-center gap-2 text-sm"
            >
              Get In Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </div>

          {/* Social Links
          <div className="mt-10 flex items-center gap-4 justify-center lg:justify-start animate-fade-in-up opacity-0 delay-600">
            <span className="text-gray-600 text-sm">Find me on</span>
            <div className="h-px w-8 bg-gray-700" />
            {[
              { icon: "github", href: "https://github.com/Harunyayogeswaran", label: "GitHub" },
              { icon: "linkedin", href: "https://linkedin.com/in/HarunyaYogeswaran", label: "LinkedIn" },
            ].map(({ icon, href, label }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300 hover:scale-110"
              >
                {icon === "github" && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                )}
                {icon === "linkedin" && (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
              </a>
            ))}
          </div> */}
        </div>

        {/* Right - Profile Image */}
        <div className="flex-shrink-0 relative animate-fade-in-right opacity-0 delay-400">
          {/* Spinning ring */}
          <div
            className="absolute inset-0 rounded-full border-2 border-dashed border-violet-500/30 animate-spin-slow"
            style={{ margin: "-20px" }}
          />

          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-2xl" />

          {/* Profile image */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full animate-glow">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                <img
                  src="/images/profile.jpg"
                  alt="Harunya Yogeswaran"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Floating badge - Experience */}
          <div className="absolute -bottom-4 -left-8 glass rounded-2xl px-4 py-3 animate-float border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-violet-600/30 rounded-xl flex items-center justify-center">
                <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">Intern SE</div>
                <div className="text-gray-400 text-xs">GlenzSoft</div>
              </div>
            </div>
          </div>

          {/* Floating badge - Projects */}
          <div
            className="absolute -top-4 -right-8 glass rounded-2xl px-4 py-3 border border-white/10"
            style={{ animation: "float 4s ease-in-out infinite", animationDelay: "1s" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600/30 rounded-xl flex items-center justify-center">
                <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">4+</div>
                <div className="text-gray-400 text-xs">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up opacity-0 delay-800">
        <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-violet-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
