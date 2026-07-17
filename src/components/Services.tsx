import { motion } from 'framer-motion';
import { Monitor, Briefcase, Plane, Server, Code2, Sparkles } from 'lucide-react';

const services = [
  {
    title: 'Business Websites',
    icon: Monitor,
    description: 'High-performance, SEO-optimized websites that serve as powerful digital storefronts.'
  },
  {
    title: 'Portfolio Websites',
    icon: Briefcase,
    description: 'Bespoke portfolios designed to showcase your work and personal brand effectively.'
  },
  {
    title: 'Travel Software',
    icon: Plane,
    description: 'Management systems for travel agencies to handle bookings and operations.'
  },
  {
    title: 'Business ERP',
    icon: Server,
    description: 'Enterprise Resource Planning solutions to streamline complex business workflows.'
  },
  {
    title: 'Custom Software',
    icon: Code2,
    description: 'Tailor-made applications built to address your specific operational needs.'
  },
  {
    title: 'AI Integration',
    icon: Sparkles,
    description: 'Generative AI capabilities to automate tasks and unlock new business value.'
  }
];

export default function Services() {
  return (
    <section id="services" className="pt-24 md:pt-32 pb-16 md:pb-20 relative">
      <div className="w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10 flex flex-col items-center text-center"
        >
          <div className="inline-block px-2.5 py-0.5 md:px-3 md:py-1 mb-3 md:mb-4 rounded-full border-2 border-[#111111] bg-[#86A789] text-[#111111] text-[10px] md:text-xs font-bold shadow-[2px_2px_0_#111111] rotate-[-2deg]">
            What I Can Do For You
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading text-[#111111]">
            Services
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ y: -3 }}
                className="retro-card p-4 md:p-5 group cursor-default hover:shadow-[6px_6px_0_#86A789] transition-all duration-200 bg-white flex flex-col gap-3 min-h-[160px] md:min-h-[180px]"
              >
                {/* Icon */}
                <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl border-2 border-[#111111] bg-[#FCFAF7] shadow-[2px_2px_0_#111111] flex items-center justify-center group-hover:bg-[#86A789] transition-colors duration-200 shrink-0">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#111111]" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#111111] font-heading leading-tight mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-[#555] text-xs md:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
