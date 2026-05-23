import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { CloudBackdrop } from '@/components/CloudBackdrop';
import {
  Sparkles, Zap, Search, Star, ArrowRight, Brain, Wand2,
  Code2, Palette, Mic, Video, Globe, Loader2, CheckCircle,
} from 'lucide-react';

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
  { icon: Search, title: 'Discover Instantly', desc: 'Find the perfect AI tool from thousands of options with smart search and filters.', color: 'bg-blue-50 text-blue-600' },
  { icon: Zap, title: 'One-Click Launch', desc: 'Access any tool instantly. No endless sign-up flows. Just click and go.', color: 'bg-amber-50 text-amber-600' },
  { icon: Star, title: 'Curated for You', desc: 'Personalized recommendations that learn your preferences over time.', color: 'bg-purple-50 text-purple-600' },
  { icon: Brain, title: 'Creator Platform', desc: 'Built an AI tool? Submit it and reach thousands of early adopters.', color: 'bg-green-50 text-green-600' },
];

const categories = [
  { label: 'Writing', icon: Wand2, color: 'text-blue-500', bg: 'bg-blue-50 hover:bg-blue-100 border-blue-100' },
  { label: 'Code', icon: Code2, color: 'text-emerald-500', bg: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-100' },
  { label: 'Image', icon: Palette, color: 'text-violet-500', bg: 'bg-violet-50 hover:bg-violet-100 border-violet-100' },
  { label: 'Audio', icon: Mic, color: 'text-pink-500', bg: 'bg-pink-50 hover:bg-pink-100 border-pink-100' },
  { label: 'Video', icon: Video, color: 'text-red-500', bg: 'bg-red-50 hover:bg-red-100 border-red-100' },
  { label: 'Research', icon: Brain, color: 'text-cyan-500', bg: 'bg-cyan-50 hover:bg-cyan-100 border-cyan-100' },
];


function MockToolCard({ tool, delay }: { tool: typeof MOCK_TOOLS[0]; delay: number }) {
  const pricingColor =
    tool.pricing === 'Free' ? 'text-emerald-600 bg-emerald-50' :
    tool.pricing === 'Freemium' ? 'text-amber-600 bg-amber-50' :
    'text-red-600 bg-red-50';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white rounded-2xl p-4 border border-slate-200/80 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50 transition-all duration-300 min-w-[200px] shadow-sm"
    >
      <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-xl mb-3 shadow-sm shadow-indigo-200">
        {tool.emoji}
      </div>
      <h4 className="text-slate-800 text-sm font-semibold">{tool.name}</h4>
      <p className="text-slate-500 text-xs mt-1 line-clamp-2">{tool.tagline}</p>
      <div className="flex items-center justify-between mt-3">
        <span className="text-xs text-slate-400 font-medium">{tool.category}</span>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${pricingColor}`}>
          {tool.pricing}
        </span>
      </div>
    </motion.div>
  );
}

export default function Landing() {
  const [quickUrl, setQuickUrl] = useState('');
  const [scanning, setScanning] = useState(false);
  const [scanDone, setScanDone] = useState(false);

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
    <div className="min-h-screen overflow-hidden">
      <CloudBackdrop />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 overflow-hidden">
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-600 text-sm font-semibold mb-8 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            The AI Discovery Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6"
          >
            Discover the best{' '}
            <span className="gradient-text">AI tools</span>
            <br />
            built for the future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Browse hundreds of AI tools across every category. Save favorites, launch instantly,
            and find exactly what you need — all in one place.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/discover"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl gradient-bg text-white font-semibold text-lg hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-200/60"
            >
              Explore Tools
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/submit"
              className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 shadow-sm"
            >
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
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-indigo-100 p-3 shadow-lg shadow-indigo-100/40">
              <p className="text-xs text-slate-400 font-medium mb-2 px-1">⚡ Submit a tool instantly — just paste the link</p>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="url"
                    placeholder="https://yourtool.com"
                    value={quickUrl}
                    onChange={e => { setQuickUrl(e.target.value); setScanDone(false); }}
                    onKeyDown={e => e.key === 'Enter' && handleQuickSubmit()}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 transition-all"
                  />
                </div>
                <button
                  onClick={handleQuickSubmit}
                  disabled={scanning || !quickUrl.trim()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl gradient-bg text-white text-sm font-semibold hover:opacity-90 disabled:opacity-50 transition-all shadow-sm shadow-indigo-200 whitespace-nowrap"
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
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 mt-2 px-1 text-xs text-emerald-600 font-semibold"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
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
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center justify-center gap-10 mt-14"
          >
            {[['500+', 'AI Tools'], ['50K+', 'Users'], ['10K+', 'Daily Launches']].map(([num, label]) => (
              <div key={label} className="text-center">
                <div className="text-2xl font-black gradient-text">{num}</div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scrolling tool feed */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative w-full mt-20 overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-sky-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-sky-50 to-transparent z-10 pointer-events-none" />
          <div className="flex gap-4 animate-scroll-left pb-4">
            {[...MOCK_TOOLS, ...MOCK_TOOLS].map((tool, i) => (
              <MockToolCard key={i} tool={tool} delay={0} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Browse by <span className="gradient-text">Category</span>
            </h2>
            <p className="text-slate-500 text-lg">Find AI tools tailored to your workflow</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={`/discover?category=${cat.label}`}
                    className={`flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all duration-300 group ${cat.bg}`}
                  >
                    <Icon className={`w-6 h-6 ${cat.color} group-hover:scale-110 transition-transform duration-200`} />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors font-semibold">{cat.label}</span>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">

        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Everything you need to{' '}
              <span className="gradient-text">explore AI</span>
            </h2>
            <p className="text-slate-500 text-lg">One platform for all your AI discovery needs</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/40 transition-all duration-300 group shadow-sm"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${f.color} group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50/50 to-blue-50" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 border border-indigo-100 shadow-xl shadow-indigo-100/30"
          >
            <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-200">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Ready to explore the future?
            </h2>
            <p className="text-slate-500 mb-8 text-lg">Join thousands discovering the best AI tools every day.</p>
            <a
              href="/discover"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl gradient-bg text-white font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-indigo-200/60"
            >
              Start Discovering
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg gradient-bg flex items-center justify-center shadow-sm shadow-indigo-200">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-bold text-slate-800">
              <span className="gradient-text">AI</span>verse
            </span>
          </div>
          <p className="text-slate-400 text-xs">© {new Date().getFullYear()} AIverse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
