
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, NotebookPen, ArrowRight, Mail, MapPin, Send, Phone } from 'lucide-react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import ExperienceTimeline from './components/ExperienceTimeline';
import { PROJECTS, TECH_STACK } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative mesh-gradient">
      {/* 背景装饰 */}
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-40 z-0" />
      
      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                正在寻求新的技术挑战
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-[1.1]">
                构建极致<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">数字体验的架构师</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-lg mb-8 leading-relaxed">
                我是 <span className="text-white font-semibold">王云山</span>。一名拥有 10+ 年经验的前端专家，深耕 Vue 全家桶、uniapp 跨端及数据可视化领域，致力于用代码平衡复杂逻辑与极简设计。
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#projects"
                  className="px-8 py-3 bg-white text-black font-bold rounded-xl flex items-center gap-2 transition-all"
                >
                  查看项目案例 <ArrowRight size={20} />
                </motion.a>
                <div className="flex items-center gap-2">
                  {[
                    { icon: <Github size={20} />, href: 'https://github.com' },
                    { icon: <Phone size={20} />, href: 'tel:13263361658' },
                    { icon: <NotebookPen size={20} />, href: 'https://wangys.net/' },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      whileHover={{ y: -3 }}
                      href={social.href}
                      className="p-3 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-all"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="hidden lg:block relative"
            >
              <div className="relative z-10 w-full aspect-square max-w-md mx-auto">
                 <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full animate-pulse" />
                 <div className="w-full h-full bg-zinc-900/50 backdrop-blur-3xl border border-zinc-800 rounded-3xl flex items-center justify-center p-12 overflow-hidden">
                   <div className="relative w-full h-full">
                     {/* 抽象代码/逻辑装饰 */}
                     <div className="absolute top-0 left-0 w-full font-mono text-[10px] text-blue-500/30 leading-relaxed">
                       {`const engineer = {\n  name: "Wang Yunshan",\n  role: "Architect",\n  stack: ["Vue3", "Cesium", "Node"],\n  passion: "Creative Coding"\n};`}
                     </div>
                     <div className="absolute bottom-0 right-0 grid grid-cols-4 gap-4 opacity-20">
                        {[...Array(12)].map((_, i) => (
                          <div key={i} className="w-8 h-8 bg-white rounded-sm" />
                        ))}
                     </div>
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 核心技术栈 */}
        <section id="stack" className="py-24 border-y border-zinc-900 bg-[#09090b]/40">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest text-center mb-12">核心技术生态栈</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity">
              {TECH_STACK.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center gap-3 group">
                  <div className="w-12 h-12 flex items-center justify-center p-2 bg-zinc-900 rounded-xl border border-zinc-800 group-hover:border-blue-500/50 transition-all">
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" />
                  </div>
                  <span className="text-[10px] font-bold text-zinc-600 uppercase group-hover:text-zinc-300 transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 项目展示 */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">精选项目案例</h2>
                <p className="text-zinc-400 max-w-md">探索我在 SaaS、教育可视化及商业平台领域的工程实践与交互设计。</p>
              </div>
              <button className="px-6 py-2 border border-zinc-800 text-zinc-400 rounded-full hover:bg-zinc-800 transition-all text-sm font-medium">
                查看更多存档
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* 职业生涯轨迹 */}
        <section id="experience" className="py-32 px-6 bg-zinc-950/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-white mb-4">职业生涯轨迹</h2>
              <p className="text-zinc-400">从 Android 开发到资深前端架构师的进化之路。</p>
            </div>
            <ExperienceTimeline />
          </div>
        </section>

        {/* 联系方式 */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-5xl font-bold text-white mb-8">期待与您 <br /> 探讨技术合作。</h2>
                <p className="text-zinc-400 text-lg mb-12">
                  无论您是需要构建复杂的管理系统、高性能的小程序，还是数据可视化大屏，我都能提供成熟的工程化解决方案。
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-zinc-300">
                    <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-bold uppercase">邮箱</p>
                      <p className="font-medium">wangys198@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-300">
                    <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-bold uppercase">电话 / 微信</p>
                      <p className="font-medium">13263361658</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-zinc-300">
                    <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-bold uppercase">坐标</p>
                      <p className="font-medium">北京 (支持远程合作)</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-10 rounded-3xl"
              >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase">姓名</label>
                      <input type="text" className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="您的姓名" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-zinc-500 uppercase">联系方式</label>
                      <input type="text" className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="手机或邮箱" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase">您的需求</label>
                    <textarea rows={5} className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="请简述您的项目背景或需求..." />
                  </div>
                  <button className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all">
                    发送咨询 <Send size={18} />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-zinc-900 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
             <div className="text-xl font-bold tracking-tighter text-white mb-2">
                WANGYS<span className="text-blue-500">.</span>
             </div>
             <p className="text-zinc-600 text-sm italic">十年磨一剑，极致在细节。</p>
          </div>
          
          <div className="text-zinc-500 text-sm font-medium">
            © {new Date().getFullYear()} 王云山作品集. 基于 Next.js & Framer Motion 构建.
          </div>

          <div className="flex gap-6">
            <a href="https://wangys.net/" className="text-zinc-500 hover:text-white transition-colors">技术博客</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">GitHub</a>
            <a href="tel:13263361658" className="text-zinc-500 hover:text-white transition-colors">致电</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
