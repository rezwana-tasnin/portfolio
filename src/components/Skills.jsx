import React from 'react';
import { Code, Layout, Cpu, Terminal } from 'lucide-react';

export default function Skills() {
  const skillList = [
    { name: "React.js", level: "Advanced", icon: <Code className="text-blue-400" size={24} /> },
    { name: "Tailwind CSS", level: "Expert", icon: <Layout className="text-indigo-400" size={24} /> },
    { name: "JavaScript (ES6+)", level: "Advanced", icon: <Terminal className="text-yellow-400" size={24} /> },
    { name: "HTML5 & CSS3", level: "Expert", icon: <Cpu className="text-purple-400" size={24} /> },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-8 py-20 border-t border-slate-900">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-2">Technical Skills</h3>
        <p className="text-slate-400 text-sm">Technologies and tools I use to build modern web interfaces</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {skillList.map((skill, index) => (
          <div key={index} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition flex flex-col items-center text-center">
            <div className="p-3 bg-slate-800/60 rounded-xl mb-4">
              {skill.icon}
            </div>
            <h4 className="font-bold text-base text-white mb-1">{skill.name}</h4>
            <span className="text-xs text-blue-400 font-semibold">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
}