import React from 'react';
import { GraduationCap, Sparkles, Code } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-8 py-20 border-t border-slate-900">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-2">Education & Credentials</h3>
        <p className="text-slate-400 text-sm">Academic background and qualifications</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition">
          <GraduationCap className="text-blue-400 mb-4" size={28} />
          <h4 className="font-bold text-base mb-1">Diploma in CST</h4>
          <p className="text-xs text-blue-400 font-semibold mb-3">Session: 2022-2023</p>
          <p className="text-xs text-slate-400 leading-relaxed">Dhaka Mohila Polytechnic Institute, Sher-e-Bangla Nagar, Dhaka-1207.</p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-purple-500/50 transition">
          <Sparkles className="text-purple-400 mb-4" size={28} />
          <h4 className="font-bold text-base mb-1">SSC (Science)</h4>
          <p className="text-xs text-purple-400 font-semibold mb-3">Passing: 2021 | GPA 5.00</p>
          <p className="text-xs text-slate-400 leading-relaxed">Childrens Home Public School, Sarishabari, Jamalpur (Mymensingh Board).</p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-pink-500/50 transition">
          <Code className="text-pink-400 mb-4" size={28} />
          <h4 className="font-bold text-base mb-1">JSC (Science)</h4>
          <p className="text-xs text-pink-400 font-semibold mb-3">Passing: 2018 | GPA 5.00</p>
          <p className="text-xs text-slate-400 leading-relaxed">Childrens Home Public School, Sarishabari, Jamalpur (Mymensingh Board).</p>
        </div>
      </div>
    </section>
  );
}