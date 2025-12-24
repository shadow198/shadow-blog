
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="relative max-w-4xl mx-auto py-12">
      {/* Central Line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-[2px] bg-zinc-800" />

      <div className="space-y-16">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full border-4 border-[#09090b] z-10" />

            {/* Content Card */}
            <div className={`w-full md:w-5/12 ml-8 md:ml-0 ${idx % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
              <span className="text-xs font-bold text-blue-500 uppercase tracking-widest">{exp.period}</span>
              <h3 className="text-xl font-bold text-white mt-1">{exp.role}</h3>
              <p className="text-zinc-500 font-medium mb-3">{exp.company}</p>
              <ul className={`text-sm text-zinc-400 space-y-2 leading-relaxed ${idx % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="block mt-1.5 h-1 w-1 shrink-0 bg-blue-500 rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Spacer for empty side */}
            <div className="hidden md:block w-5/12" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
