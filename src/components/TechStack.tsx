import { motion } from 'framer-motion';

const technologies = [
  "Python", "Flask", "SQL", "HTML", "CSS", "React", "Git", "GitHub", "VS Code", "AI Assisted Development", "Tailwind CSS"
];

export default function TechStack() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[#E5DFD3]/30 border-[3px] border-[#111111] rounded-[24px] md:rounded-[32px] my-12 mx-4 md:mx-6 lg:mx-8 xl:mx-auto max-w-[1400px]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border-2 border-[#111111] bg-white text-[#111111] text-sm font-bold shadow-[2px_2px_0_#111111] rotate-[-1deg]">
            My Arsenal
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight font-heading text-[#111111]">What I Work With</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-6 py-3 bg-white border-[2.5px] border-[#111111] rounded-full shadow-[4px_4px_0_#86A789] cursor-default hover:shadow-[6px_6px_0_#D8B54B] transition-all"
            >
              <span className="text-lg font-bold text-[#111111]">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
