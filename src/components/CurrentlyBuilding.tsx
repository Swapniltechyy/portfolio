import { motion } from 'framer-motion';

export default function CurrentlyBuilding() {
  return (
    <section className="py-10 md:py-12 lg:py-14 relative overflow-hidden bg-transparent md:bg-[#D8B54B] border-y-0 md:border-[3px] md:border-[#111111] md:rounded-[32px] mt-8 md:mt-20 mb-8 md:mb-16 mx-4 md:mx-6 lg:mx-auto max-w-[1100px]">
      <div className="w-full relative z-10 px-4 sm:px-6 max-w-[950px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10 flex flex-col items-center text-center"
        >
          <div className="inline-block px-4 py-1.5 mb-3 md:mb-4 rounded-full border-2 border-[#111111] bg-white text-[#111111] text-xs md:text-sm font-bold shadow-[2px_2px_0_#111111] rotate-[-2deg]">
            Active Pursuits
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 tracking-tight font-heading text-[#111111]">Currently Building</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 w-full">
          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="retro-card p-5 lg:p-6 relative overflow-hidden group bg-white border-[3px] h-full flex flex-col justify-center"
          >
            <div className="text-xs md:text-sm text-[#111111] font-bold mb-2 md:mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full border-2 border-[#111111] bg-[#86A789] animate-pulse" />
              Live
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold mb-1 md:mb-2 font-heading text-[#111111]">Bengal Taxi</h3>
            <p className="text-[#2D2D2D] font-medium text-sm md:text-base">Production business website scaling operations.</p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="retro-card p-5 lg:p-6 relative overflow-hidden group bg-[#FCFAF7] border-[3px] h-full flex flex-col justify-center"
          >
            <div className="text-xs md:text-sm text-[#111111] font-bold mb-2 md:mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full border-2 border-[#111111] bg-yellow-400 animate-pulse" />
              In Development
            </div>
            <h3 className="text-lg md:text-xl font-extrabold mb-1 md:mb-2 font-heading text-[#111111]">Plan My Tour ERP</h3>
            <p className="text-[#2D2D2D] font-medium text-sm md:text-base">Comprehensive travel management system.</p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="retro-card p-5 lg:p-6 md:col-span-2 relative overflow-hidden group bg-white border-[3px] h-full flex flex-col justify-center"
          >
            <div className="text-xs md:text-sm text-[#111111] font-bold mb-2 md:mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full border-2 border-[#111111] bg-blue-400 animate-pulse" />
              Learning & Exploring
            </div>
            <h3 className="text-xl md:text-2xl font-extrabold mb-1 md:mb-2 font-heading text-[#111111]">Data Analytics Portfolio</h3>
            <p className="text-[#2D2D2D] font-medium text-sm md:text-base">Expanding skill set to integrate deep data insights with software products.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
