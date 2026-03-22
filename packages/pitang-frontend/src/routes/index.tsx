import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/20 blur-[120px] pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-white/10 border border-white/20 flex items-center justify-center">
            <span className="text-xs font-bold">P</span>
          </div>
          <span className="text-sm font-medium text-white/70">Pitang</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            Sign in
          </Link>
          <Link
            to="/register"
            className="text-sm px-4 py-2 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors"
          >
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="relative z-10 max-w-7xl mx-auto px-8 pt-24 pb-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-white/60 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Now in open beta
          </div>

          {/* Headline */}
          <h1
            className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Ship products
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400">
              that matter.
            </span>
          </h1>

          <p className="text-lg text-white/40 max-w-xl leading-relaxed mb-12">
            A modern platform for teams who care about quality. Manage products,
            track progress, and collaborate — all in one place.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Open dashboard
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-all"
            >
              Sign in
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px border border-white/5 rounded-2xl overflow-hidden bg-white/5">
          {[
            { label: "Products tracked", value: "12,000+" },
            { label: "Active users", value: "3,400+" },
            { label: "Uptime", value: "99.9%" },
            { label: "Countries", value: "40+" },
          ].map((stat) => (
            <div key={stat.label} className="px-8 py-6 bg-[#0a0a0a]">
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-white/40">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-4">
          {[
            {
              icon: "◈",
              title: "Product management",
              desc: "Browse, filter, and manage your entire catalog from a beautiful dashboard.",
            },
            {
              icon: "⊕",
              title: "Team collaboration",
              desc: "Role-based access, activity logs, and real-time updates for your whole team.",
            },
            {
              icon: "◎",
              title: "Analytics & insights",
              desc: "Understand your inventory at a glance with smart charts and summaries.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
            >
              <div className="text-2xl mb-4 text-white/30 group-hover:text-white/60 transition-colors">
                {f.icon}
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 px-8 py-6 max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-xs text-white/20">
          © 2026 Pitang. All rights reserved.
        </span>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs text-white/20 hover:text-white/50 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}