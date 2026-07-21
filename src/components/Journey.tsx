import { motion } from 'framer-motion';

const milestones = [
  "Siliguri Boys' High School (10 + 2)",
  "Siliguri Institute of Technology - Bachelor of Computer Applications",
  "SRM Institute of Science and Technology - Master of Computer Applications",
  "Learning Data Analytics",
  "Building AI SaaS Products",
  "Future Software Founder"
];

export default function Journey() {
  return (
    <section id="journey" className="py-10 md:py-14 pt-16 md:pt-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12 flex flex-col items-center"
        >
          <div className="inline-block px-5 py-1.5 mb-3 md:mb-4 rounded-full border-2 border-[#111111] bg-[#D8B54B] text-[#111111] text-sm font-bold shadow-[2px_2px_0_#111111] rotate-[1.5deg]">
            How it started
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading text-[#111111]">My Journey</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line — ends at the last dot center (pb offset = half dot height) */}
          <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-6 md:top-8 bottom-8 md:bottom-8 w-1.5 bg-[#111111]" />

          <div className="space-y-10 md:space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start w-full relative"
              >
                {/* Left side card (Desktop only - Even items) */}
                <div className="hidden md:flex w-1/2 pr-12 justify-end">
                  {index % 2 === 0 && (
                    <div className="retro-card py-4 px-6 text-center w-full max-w-sm hover:-translate-y-1 hover:shadow-[8px_8px_0_#86A789] transition-all bg-white">
                      <span className="text-base md:text-lg font-bold text-[#111111]">{milestone}</span>
                    </div>
                  )}
                </div>

                {/* Center dot */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 top-6 md:top-8 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#86A789] border-[3px] border-[#111111] z-10 shadow-[2px_2px_0_#111111]" />
                </div>

                {/* Right side card (Mobile: All items | Desktop: Odd items) */}
                <div className="w-full md:w-1/2 pl-14 md:pl-12 flex justify-start">
                  <div className={`retro-card py-3 px-4 md:py-4 md:px-6 text-left md:text-center w-full max-w-sm hover:-translate-y-1 hover:shadow-[8px_8px_0_#86A789] transition-all bg-white ${index % 2 === 0 ? 'md:hidden' : ''}`}>
                    <span className="text-[15px] md:text-lg leading-snug font-bold text-[#111111]">{milestone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
