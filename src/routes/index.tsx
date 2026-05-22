import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Zap, Shield, Layers, Globe, Cloud } from "lucide-react";
import { CloudBackdrop } from "@/components/CloudBackdrop";
import { PasteLinkBar } from "@/components/PasteLinkBar";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Imagine — Build apps as easily as describing them" },
      {
        name: "description",
        content:
          "A serene, AI-native workspace to design, build and ship beautiful apps. Light, fast, and effortless.",
      },
    ],
  }),
});

function Nav() {
  return (
    <header className="sticky top-0 z-40 flex justify-center px-4 pt-4">
      <nav className="glass flex w-full max-w-5xl items-center justify-between rounded-full px-3 py-2">
        <a href="/" className="flex items-center gap-2 pl-3">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-foreground text-background">
            <Cloud className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold tracking-tight">Imagine</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#features" className="hover:text-foreground">Features</a>
          <a href="#bento" className="hover:text-foreground">Platform</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#docs" className="hover:text-foreground">Docs</a>
        </div>
        <div className="flex items-center gap-2">
          <a href="#signin" className="hidden rounded-full px-4 py-2 text-sm text-foreground/80 hover:text-foreground sm:inline-block">
            Sign in
          </a>
          <a
            href="#start"
            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90"
          >
            Get started <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative px-4 pt-20 pb-28 sm:pt-28">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-foreground/70">
          <Sparkles className="h-3.5 w-3.5" /> Now in public beta
        </div>
        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-7xl">
          Build apps as easily as
          <span className="block bg-gradient-to-r from-[oklch(0.55_0.18_280)] via-[oklch(0.62_0.16_320)] to-[oklch(0.65_0.14_50)] bg-clip-text text-transparent">
            describing the sky.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
          A calm, AI-native workspace where ideas become products. Designed for clarity,
          tuned for speed, and beautiful by default.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#start"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-glow transition hover:opacity-90"
          >
            Start building free <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground hover:bg-white"
          >
            Watch the 60-second tour
          </a>
        </div>

        <PasteLinkBar />


        {/* Floating product preview */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="glass-strong overflow-hidden rounded-3xl p-2 shadow-glow">
            <div className="rounded-[1.25rem] border border-border bg-card">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.08_30)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.88_0.08_90)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.1_150)]" />
                <span className="ml-3 text-xs text-muted-foreground">imagine.app / workspace</span>
              </div>
              <div className="grid grid-cols-12 gap-3 p-4">
                <div className="col-span-3 space-y-2">
                  {["Home", "Projects", "Library", "Team", "Settings"].map((i) => (
                    <div key={i} className="rounded-lg bg-muted px-3 py-2 text-left text-xs text-muted-foreground">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="col-span-9 space-y-3">
                  <div className="h-28 rounded-xl bg-gradient-to-br from-[oklch(0.95_0.05_50)] via-[oklch(0.93_0.06_320)] to-[oklch(0.9_0.08_240)]" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-24 rounded-xl bg-muted" />
                    <div className="h-24 rounded-xl bg-muted" />
                    <div className="h-24 rounded-xl bg-muted" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bento() {
  return (
    <section id="bento" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-medium text-muted-foreground">The platform</p>
          <h2 className="mt-2 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Everything you need. Nothing you don't.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
          <Card className="md:col-span-4" icon={<Layers />} title="Bento workspace" desc="Modular cards for every workflow. Drag, resize, ship.">
            <div className="mt-6 grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-white to-muted shadow-soft" />
              ))}
            </div>
          </Card>
          <Card className="md:col-span-2" icon={<Zap />} title="Instant deploys" desc="From prompt to production in seconds." />
          <Card className="md:col-span-2" icon={<Shield />} title="Private by default" desc="End-to-end encryption. Your data, your keys." />
          <Card className="md:col-span-2" icon={<Globe />} title="Global edge" desc="Served from 300+ cities. Always close to your users." />
          <Card className="md:col-span-2" icon={<Sparkles />} title="AI everywhere" desc="Composable models, one consistent surface." />
        </div>
      </div>
    </section>
  );
}

function Card({
  className = "",
  icon,
  title,
  desc,
  children,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={`glass group rounded-3xl p-6 transition hover:-translate-y-0.5 hover:shadow-glow ${className}`}>
      <div className="flex items-center gap-2 text-foreground/70">
        <span className="grid h-8 w-8 place-items-center rounded-xl bg-white shadow-soft">{icon}</span>
        <span className="text-xs uppercase tracking-wider">{title}</span>
      </div>
      <p className="mt-4 text-2xl font-semibold tracking-tight text-balance">{desc}</p>
      {children}
    </div>
  );
}

function CTA() {
  return (
    <section id="start" className="px-4 pb-28">
      <div className="mx-auto max-w-4xl">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
          <div className="absolute inset-0 -z-10 bg-aurora opacity-80" />
          <h3 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Step into the clouds.
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Join thousands of builders shipping beautiful apps with Imagine.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#signup" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90">
              Create your workspace <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/70 px-6 py-3 text-sm font-medium text-foreground hover:bg-white">
              Talk to us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <Cloud className="h-4 w-4" />
          <span>© {new Date().getFullYear()} Imagine</span>
        </div>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-foreground">Privacy</a>
          <a href="#terms" className="hover:text-foreground">Terms</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen">
      <CloudBackdrop />
      <Nav />
      <main>
        <Hero />
        <Bento />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
