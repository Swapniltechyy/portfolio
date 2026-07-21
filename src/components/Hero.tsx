import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-16 md:pt-32 pb-8\10 lg:pb-16 flex flex-col justify-start">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-12 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left relative z-10 flex flex-col items-center lg:items-start"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 lg:py-1.5 rounded-full border-2 border-[#111111] bg-white text-xs lg:text-sm font-bold text-[#111111] mb-2 lg:mb-5 shadow-[2px_2px_0_#111111] lg:shadow-[3px_3px_0_#111111]"
          >
            <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#86A789] animate-pulse border border-[#111111]" />
            Available for new opportunities
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-heading tracking-tight mb-2 lg:mb-4 text-[#111111] leading-[1.15]">
            Turning Ideas Into Practical Digital Solutions.
          </h1>

          <p className="text-[13px] sm:text-sm md:text-base lg:text-lg text-[#2D2D2D] mb-3 lg:mb-6 max-w-2xl leading-relaxed font-medium">
            MCA Student Specializing in Generative AI,<br className="hidden md:block" /> Passionate about Data Analytics,
            <br className="hidden md:block" /> Building Practical Digital Solutions, & Expressing Creativity Through Music.
          </p>

          <div className="flex flex-row gap-2 lg:gap-4 justify-center lg:justify-start w-full max-w-xs lg:max-w-none mx-auto lg:mx-0">
            <a
              href="#projects"
              className="retro-btn bg-[#86A789] text-[#111111] px-4 py-1.5 text-xs font-bold hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#111111] shadow-[2px_2px_0_#111111] group flex items-center justify-center flex-1 lg:flex-none whitespace-nowrap"
            >
              View My Work
              <ArrowUpRight className="ml-1 w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
            </a>
            <a
              href="#contact"
              className="retro-btn bg-white text-[#111111] px-4 py-1.5 text-xs font-bold hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#111111] shadow-[2px_2px_0_#111111] flex flex-1 lg:flex-none justify-center items-center whitespace-nowrap"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>

        {/* Profile Image Area / Gap */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 flex justify-center lg:justify-end w-full relative mt-4 md:mt-8 lg:mt-0"
        >
          <div className="relative w-52 h-52 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[24rem] xl:h-[24rem]">
            {/* Decorative Arrow */}
            <div className="absolute -top-10 -left-24 lg:-top-6 lg:-left-32 z-20 hidden md:flex flex-col items-center">
              <p className="font-cursive text-2xl lg:text-3xl text-[#111111] mb-1 -rotate-12">That's me!</p>
              <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#111111] ml-4 mt-1">
                <path d="M 30 20 Q 30 60 75 55" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M 55 40 L 75 55 L 50 80" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {/* The gap/placeholder frame for the DP */}
            <div className="absolute inset-0 bg-[#FCFAF7] border-[3px] border-[#111111] rounded-[20px] shadow-[6px_6px_0_#86A789] lg:shadow-[12px_12px_0_#86A789] overflow-hidden group">
              <img
                src="/assets/logo.jpeg"
                alt="Swapnil"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  // If image isn't found, it acts as a perfect gap with text
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center -z-10 bg-white">
                <span className="font-heading font-bold text-[15px] sm:text-lg lg:text-xl text-[#111111]">Attach DP Here</span>
                <span className="font-cursive text-sm sm:text-base lg:text-lg text-[#2D2D2D] mt-1 lg:mt-2">Perfect spot for it</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
