import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="min-h-[100dvh] flex flex-col justify-center py-16 md:py-20 relative overflow-hidden">
      <div className="w-full relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8 flex flex-col items-center"
        >
          <div className="inline-block px-4 py-1 mb-3 rounded-full border-2 border-[#111111] bg-[#D8B54B] text-[#111111] text-xs font-bold shadow-[2px_2px_0_#111111] rotate-[-2deg]">
            Get to know me
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-heading text-[#111111]">About Me</h2>
        </motion.div>

        <div className="retro-card w-full max-w-4xl mx-auto py-10 px-6 md:py-16 md:px-12 relative overflow-hidden group hover:-translate-y-2 hover:shadow-[12px_12px_0_#86A789] transition-all duration-300 flex flex-col justify-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4 md:space-y-6 text-[#2D2D2D] text-sm md:text-base lg:text-lg font-medium leading-relaxed relative z-10"
          >
            <p>
              I am an <strong className="text-[#111111] font-bold">MCA student</strong> and an <strong className="text-[#111111] font-bold">aspiring Data Analyst</strong> passionate about creating digital solutions that solve real-world problems. I enjoy transforming ideas into practical applications through thoughtful design, clean development, and continuous learning.
            </p>
            <p>
              Currently exploring <strong className="text-[#111111] font-bold">Generative AI, Data Analytics, and modern web technologies,</strong> I enjoy building intelligent applications, business websites, and software solutions that combine usability with real business value. Every project I build is an opportunity to learn, improve, and create something meaningful.
            </p>
            <p>
              I believe in continuous learning, iterative development, and the power of software to transform operations. My ultimate goal is not just to be a developer, but to build a <strong className="text-[#111111] font-bold">SaaS company</strong> that creates meaningful business value. I enjoy turning ideas into products and continuously learning new technologies that help solve real business problems.
            </p>
          </motion.div>
        </div>
      </div>
    </section >
  );
}
