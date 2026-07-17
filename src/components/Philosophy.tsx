import { motion } from 'framer-motion';

export default function Philosophy() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Decorative quote marks */}
          <div className="absolute -top-12 md:-top-20 -left-4 md:-left-12 text-[8rem] md:text-[12rem] font-serif text-[#E5DFD3] leading-none opacity-60 z-[-1] select-none">
            "
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.2] font-heading text-[#111111]">
            I don't just write code. <br />
            <span className="relative inline-block mt-4">
              <span className="relative z-10 text-[#FCFAF7] mix-blend-difference px-2">I build software that solves real business problems.</span>
              <span className="absolute inset-0 bg-[#111111] -rotate-1 scale-105 z-0 transform origin-left"></span>
            </span>
          </h2>
          
        </motion.div>
      </div>
    </section>
  );
}
