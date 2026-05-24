import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { toast } from 'sonner';
import { CloudBackdrop } from '@/components/CloudBackdrop';
import {
  Sparkles, Zap, Search, Star, ArrowRight, Brain, Wand2,
  Code2, Palette, Mic, Video, Globe, Loader2, CheckCircle,
  User, Menu, X, TrendingUp, Layers,
} from 'lucide-react';

// ─── Data ──────────────────────────────────────────────────────────────────────

const MOCK_TOOLS = [
  { name: 'MindForge AI', category: 'Writing', tagline: 'Generate blog posts in seconds', pricing: 'Free', emoji: '✍️' },
  { name: 'PixelGenius', category: 'Image', tagline: 'Create stunning visuals with AI', pricing: 'Freemium', emoji: '🎨' },
  { name: 'CodeMind', category: 'Code', tagline: 'Your AI pair programmer', pricing: 'Free', emoji: '💻' },
  { name: 'VoiceClone Pro', category: 'Audio', tagline: 'Clone any voice instantly', pricing: 'Paid', emoji: '🎙️' },
  { name: 'ResearchBot', category: 'Research', tagline: 'Deep research in minutes', pricing: 'Free', emoji: '🔬' },
  { name: 'SocialAI', category: 'Marketing', tagline: 'Viral content on autopilot', pricing: 'Freemium', emoji: '📱' },
  { name: 'VideoGenius', category: 'Video', tagline: 'Edit videos with natural language', pricing: 'Paid', emoji: '🎬' },
  { name: 'DesignBot', category: 'Design', tagline: 'Instant UI mockups from text', pricing: 'Free', emoji: '🖌️' },
];

const features = [
  { icon: Search, title: 'Discover Instantly', desc: 'Find the perfect AI tool from thousands of options with smart search and filters.', gradient: 'from-blue-500 to-cyan-400', glow: 'shadow-blue-200' },
  { icon: Zap, title: 'One-Click Launch', desc: 'Access any tool instantly. No endless sign-up flows. Just click and go.', gradient: 'from-amber-500 to-orange-400', glow: 'shadow-orange-200' },
  { icon: Star, title: 'Curated for You', desc: 'Personalized recommendations that learn your preferences over time.', gradient: 'from-violet-500 to-purple-400', glow: 'shadow-purple-200' },
  { icon: Brain, title: 'Creator Platform', desc: 'Built an AI tool? Submit it and reach thousands of early adopters.', gradient: 'from-emerald-500 to-teal-400', glow: 'shadow-emerald-200' },
];

const categories = [
  { label: 'Writing', icon: Wand2, gradient: 'from-blue-500 to-indigo-500', light: 'bg-blue-50 hover:bg-blue-100 border-blue-100', iconColor: 'text-blue-600' },
  { label: 'Code', icon: Code2, gradient: 'from-emerald-500 to-teal-500', light: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-100', iconColor: 'text-emerald-600' },
  { label: 'Image', icon: Palette, gradient: 'from-violet-500 to-purple-500', light: 'bg-violet-50 hover:bg-violet-100 border-violet-100', iconColor: 'text-violet-600' },
  { label: 'Audio', icon: Mic, gradient: 'from-pink-500 to-rose-500', light: 'bg-pink-50 hover:bg-pink-100 border-pink-100', iconColor: 'text-pink-600' },
  { label: 'Video', icon: Video, gradient: 'from-red-500 to-orange-500', light: 'bg-red-50 hover:bg-red-100 border-red-100', iconColor: 'text-red-600' },
  { label: 'Research', icon: Brain, gradient: 'from-cyan-500 to-sky-500', light: 'bg-cyan-50 hover:bg-cyan-100 border-cyan-100', iconColor: 'text-cyan-600' },
];

// ─── Navbar ─────────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-2'
            : 'py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className={`flex items-center justify-between px-5 rounded-2xl transition-all duration-500 ${
              scrolled
                ? 'py-3 bg-white/80 backdrop-blur-xl border border-white/60 shadow-lg shadow-slate-200/40'
                : 'py-3.5 bg-white/40 backdrop-blur-md border border-white/50'
            }`}
          >
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-xl gradient-bg flex items-center justify-center shadow-md shadow-indigo-300/40 group-hover:scale-105 transition-transform duration-200">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-base font-black text-slate-800 tracking-tight">
                <span className="gradient-text">AI</span>verse
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              <a
                href="/discover"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/80 transition-all duration-200"
              >
                <Layers className="w-3.5 h-3.5" />
                Explore
              </a>
              <a
                href="/trending"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/80 transition-all duration-200"
              >
                <TrendingUp className="w-3.5 h-3.5" />
                Trending
              </a>
              <a
                href="/submit"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/80 transition-all duration-200"
              >
                Submit Tool
              </a>
            </nav>

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-2">
              <button
                aria-label="Search"
                className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-500 hover:text-indigo-600 hover:bg-indigo-50/80 transition-all duration-200"
              >
                <Search className="w-4 h-4" />
              </button>
              <a
                href="/profile"
                className="flex items-center gap-2 pl-3 pr-4 py-2 rounded-xl bg-slate-100/80 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 text-sm font-semibold transition-all duration-200 group"
              >
                <div className="w-6 h-6 rounded-lg gradient-bg flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                  <User className="w-3.5 h-3.5 text-white" />
                </div>
                Profile
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </motion.div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-4 right-4 z-40 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/80 shadow-xl shadow-slate-200/40 p-3"
          >
            {[
              { href: '/discover', icon: Layers, label: 'Explore' },
              { href: '/trending', icon: TrendingUp, label: 'Trending' },
              { href: '/submit', icon: Wand2, label: 'Submit Tool' },
              { href: '/profile', icon: User, label: 'Profile' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 text-sm font-semibold transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Tool Card ──────────────────────────────────────────────────────────────────

function MockToolCard({ tool, delay }: { tool: typeof MOCK_TOOLS[0]; delay: number }) {
  const pricingStyle =
    tool.pricing === 'Free'
      ? 'text-emerald-700 bg-emerald-50 ring-1 ring-emerald-200/60'
      : tool.pricing === 'Freemium'
      ? 'text-amber-700 bg-amber-50 ring-1 ring-amber-200/60'
      : 'text-violet-700 bg-violet-50 ring-1 ring-violet-200/60';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -3, scale: 1.02 }}
      className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-slate-200/60 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 min-w-[210px] shadow-sm cursor-pointer"
    >
      <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center text-xl mb-3 shadow-md shadow-indigo-200/50">
        {tool.emoji}
      </div>
      <h4 className="text-slate-800 text-sm font-bold">{tool.name}</h4>
      <p className="text-slate-500 text-xs mt-1 line-clamp-2 leading-relaxed">{tool.tagline}</p>
      <div className="flex items-center justify-between mt-3.5">
        <span className="text-xs text-slate-400 font-semibold uppercase tracking-wide">{tool.category}</span>
        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${pricingStyle}`}>
          {tool.pricing}
        </span>
      </div>
    </motion.div>
  );
}

// ─── Floating orb decoration ────────────────────────────────────────────────────

function Orb({ className }: { className: string }) {
  return <div className={`absolute rounded-full blur-3xl pointer-events-none ${className}`} />;
}

// ─── Main component ─────────────────────────────────────────────────────────────

export default function Landing() {
  const [quickUrl, setQuickUrl] = useState('');
  const [scanning, setScanning] = useState(false);
  const [scanDone, setScanDone] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 60]);

  const handleQuickSubmit = async () => {
    if (!quickUrl.trim()) return;
    setScanning(true);
    setScanDone(false);
    await new Promise(r => setTimeout(r, 1400));
    setScanning(false);
    setScanDone(true);
    toast.success('Tool submitted for review!', { description: quickUrl });
    setTimeout(() => setScanDone(false), 3000);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-slate-50">
      <CloudBackdrop />
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
        {/* Decorative orbs */}
        <Orb className="w-[500px] h-[500px] bg-indigo-300/20 -top-40 -right-40" />
        <Orb className="w-[400px] h-[400px] bg-violet-300/20 top-60 -left-32" />
        <Orb className="w-[300px] h-[300px] bg-pink-200/20 bottom-20 right-20" />

        <motion.div
          style={{ y: heroY }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-200/60 text-indigo-600 text-sm font-semibold mb-8 shadow-sm shadow-indigo-100"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <Sparkles className="w-3.5 h-3.5" />
            The AI Discovery Platform
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6 text-balance"
          >
            Discover the best{' '}
            <span className="relative inline-block">
              <span className="gradient-text">AI tools</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
                className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-indigo-400 to-violet-400 origin-left"
              />
            </span>
            <br className="hidden sm:block" />
            {' '}built for the future
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Browse hundreds of AI tools across every category. Save favorites, launch instantly,
            and find exactly what you need — all in one place.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <a
              href="/discover"
              className="group relative flex items-center gap-2 px-8 py-4 rounded-2xl gradient-bg text-white font-bold text-base overflow-hidden shadow-xl shadow-indigo-300/40 hover:shadow-indigo-400/50 transition-all duration-300 hover:scale-[1.03]"
            >
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
              <Layers className="w-4 h-4" />
              Explore Tools
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
            <a
              href="/submit"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/80 text-slate-700 font-bold text-base hover:bg-white hover:border-indigo-200 hover:text-indigo-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Wand2 className="w-4 h-4" />
              Submit Your Tool
            </a>
          </motion.div>

          {/* Quick Submit Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 max-w-xl mx-auto"
          >
            <div className="bg-white/75 backdrop-blur-md rounded-2xl border border-white/80 p-3 shadow-xl shadow-indigo-100/30 ring-1 ring-indigo-100/40">
              <p className="text-xs text-slate-400 font-semibold mb-2 px-1 flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-amber-500" />
                Submit a tool instantly — just paste the link
              </p>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="url"
                    placeholder="https://yourtool.com"
                    value={quickUrl}
                    onChange={e => { setQuickUrl(e.target.value); setScanDone(false); }}
                    onKeyDown={e => e.key === 'Enter' && handleQuickSubmit()}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50/80 border border-slate-200/80 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100/80 transition-all"
                  />
                </div>
                <button
                  onClick={handleQuickSubmit}
                  disabled={scanning || !quickUrl.trim()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl gradient-bg text-white text-sm font-bold hover:opacity-90 disabled:opacity-40 transition-all shadow-md shadow-indigo-200/60 whitespace-nowrap"
                >
                  {scanning
                    ? <><Loader2 className="w-4 h-4 animate-spin" /> Scanning...</>
                    : <><Wand2 className="w-4 h-4" /> Submit</>
                  }
                </button>
              </div>
              <AnimatePresence>
                {scanDone && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-center gap-2 mt-2 px-1 text-xs text-emerald-600 font-bold overflow-hidden"
                  >
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    Tool submitted for review!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="flex items-center justify-center gap-10 mt-12"
          >
            {[
              { num: '500+', label: 'AI Tools', icon: Layers },
              { num: '50K+', label: 'Users', icon: User },
              { num: '10K+', label: 'Daily Launches', icon: Zap },
            ].map(({ num, label, icon: Icon }) => (
              <div key={label} className="text-center group">
                <div className="text-2xl sm:text-3xl font-black gradient-text leading-none">{num}</div>
                <div className="flex items-center gap-1 justify-center mt-1">
                  <Icon className="w-3 h-3 text-slate-400" />
                  <span className="text-xs text-slate-400 font-semibold">{label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scrolling tool carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="relative w-full mt-20 overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-sky-50 via-sky-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-sky-50 via-sky-50/80 to-transparent z-10 pointer-events-none" />
          <div className="flex gap-4 animate-scroll-left pb-4 px-4">
            {[...MOCK_TOOLS, ...MOCK_TOOLS].map((tool, i) => (
              <MockToolCard key={i} tool={tool} delay={0} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Categories ───────────────────────────────────────────────────────── */}
      <section className="py-28 px-4 bg-white relative overflow-hidden">
        <Orb className="w-96 h-96 bg-indigo-100/50 -top-32 -right-32" />
        <Orb className="w-64 h-64 bg-violet-100/40 -bottom-24 -left-24" />

        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="text-xs font-bold text-indigo-500 tracking-widest uppercase mb-3">Categories</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Browse by <span className="gradient-text">Category</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-md mx-auto">Find AI tools tailored to your workflow</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                  whileHover={{ y: -4, scale: 1.03 }}
                >
                  <a
                    href={`/discover?category=${cat.label}`}
                    className={`flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all duration-300 group ${cat.light}`}
                  >
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors font-bold">{cat.label}</span>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────────────────── */}
      <section className="py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50/50" />
        <Orb className="w-80 h-80 bg-indigo-100/40 top-20 right-0" />
        <Orb className="w-64 h-64 bg-violet-100/30 bottom-0 left-10" />

        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold text-indigo-500 tracking-widest uppercase mb-3">Why AIverse</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
              Everything you need to{' '}
              <span className="gradient-text">explore AI</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-md mx-auto">One platform for all your AI discovery needs</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className={`bg-white rounded-2xl p-7 border border-slate-100 hover:border-transparent hover:shadow-2xl hover:${f.glow} transition-all duration-400 group shadow-sm cursor-default`}
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-slate-900 font-black text-lg mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-28 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50/60 to-blue-50" />
        <Orb className="w-96 h-96 bg-indigo-200/30 top-0 right-0 -translate-y-1/3 translate-x-1/4" />
        <Orb className="w-80 h-80 bg-violet-200/25 bottom-0 left-0 translate-y-1/3 -translate-x-1/4" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-12 border border-white/80 shadow-2xl shadow-indigo-100/40 overflow-hidden"
          >
            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 via-transparent to-violet-50/40 pointer-events-none" />

            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1, type: 'spring' }}
                className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-7 shadow-xl shadow-indigo-300/50"
              >
                <Sparkles className="w-8 h-8 text-white" />
              </motion.div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 text-balance">
                Ready to explore the future?
              </h2>
              <p className="text-slate-500 mb-9 text-lg leading-relaxed">
                Join thousands discovering the best AI tools every day.
              </p>
              <a
                href="/discover"
                className="group inline-flex items-center gap-2 px-9 py-4 rounded-2xl gradient-bg text-white font-bold text-base hover:opacity-90 transition-all hover:scale-[1.04] shadow-xl shadow-indigo-300/50"
              >
                Start Discovering
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer className="border-t border-slate-100 py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl gradient-bg flex items-center justify-center shadow-md shadow-indigo-200/50">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-sm font-black text-slate-800 tracking-tight">
              <span className="gradient-text">AI</span>verse
            </span>
          </div>

          <nav className="flex items-center gap-6">
            {['Explore', 'Trending', 'Submit', 'Profile'].map(link => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                className="text-xs text-slate-400 hover:text-slate-700 font-semibold transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          <p className="text-slate-400 text-xs font-medium">
            © {new Date().getFullYear()} AIverse. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
