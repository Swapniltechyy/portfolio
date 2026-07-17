import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

type ProjectType = {
  id: string;
  title: string;
  description: string;
  type: string;
  features: string[];
  tech?: string[];
  status?: string;
  image: string;
  links: {
    live?: string;
    github?: string;
    details?: string;
  };
};

const projects: ProjectType[] = [
  {
    id: '01',
    title: 'Bengal Taxi',
    description: 'A production-ready business website with modern UI and SEO optimization, built to drive real customer engagement and bookings.',
    type: 'Production Website',
    features: ['Responsive', 'SEO Ready', 'Modern UI', 'Business Website', 'Production Deployment'],
    image: '/projects/tastybite-brandboard.png',
    links: {
      live: 'https://bengaltaxi.com/',
    }
  },
  {
    id: '02',
    title: 'Plan My Tour ERP',
    description: 'Comprehensive travel management and payment tracking system designed to streamline operations for travel agencies.',
    type: 'Travel Management & Payment System',
    tech: ['Python', 'Flask', 'MySQL'],
    features: ['Guest Management', 'Booking Management', 'Payment Tracking', 'Receipt Generation', 'Dashboard', 'Reports'],
    status: 'Currently Building',
    image: '/projects/aumya-brandboard.png',
    links: {}
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 relative">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border-2 border-[#111111] bg-[#86A789] text-[#111111] text-sm font-bold shadow-[2px_2px_0_#111111] rotate-[2deg]">
            Selected Works
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#111111]">Featured Projects</h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}
            >
              {/* Image side */}
              <div className="flex-1 w-full relative">
                <div className="absolute -top-10 -left-6 text-[9rem] font-extrabold text-[#E5DFD3] -z-10 leading-none font-heading opacity-50 select-none">
                  {project.id}
                </div>
                <div className="retro-card overflow-hidden p-2 bg-white group w-full aspect-video">
                  <div className="w-full h-full rounded-xl overflow-hidden border-2 border-[#111111] relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center -z-10 bg-[#FCFAF7]">
                      <span className="font-heading font-bold text-xl text-[#111111]">Project Image</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content side */}
              <div className="flex-1 flex flex-col justify-center relative z-10">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-1 font-heading text-[#111111]">{project.title}</h3>
                <div className="text-lg text-[#86A789] font-bold mb-3">{project.type}</div>

                {project.status && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border-2 border-[#111111] bg-[#D8B54B] text-[#111111] text-xs font-bold mb-3 w-fit shadow-[2px_2px_0_#111111]">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse border border-[#111111]" />
                    {project.status}
                  </div>
                )}

                <p className="text-[#2D2D2D] text-base font-medium mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.tech && (
                  <div className="mb-4">
                    <div className="text-xs text-[#111111] font-bold uppercase tracking-wider mb-2">Tech Stack</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-white border-2 border-[#111111] rounded-lg text-xs font-bold text-[#111111] shadow-[2px_2px_0_#111111]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-5">
                  <div className="text-xs text-[#111111] font-bold uppercase tracking-wider mb-2">Key Features</div>
                  <ul className="grid grid-cols-2 gap-y-1.5 gap-x-4">
                    {project.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-[#2D2D2D] text-sm font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#111111] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.links.live && (
                    <a href={project.links.live} className="retro-btn bg-[#111111] text-white px-5 py-2.5 text-sm hover:-translate-y-1 hover:shadow-[4px_4px_0_#86A789] shadow-[2px_2px_0_#111111] gap-2">
                      Live Website <ExternalLink size={15} />
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} className="retro-btn bg-white text-[#111111] px-5 py-2.5 text-sm hover:-translate-y-1 hover:shadow-[4px_4px_0_#111111] shadow-[2px_2px_0_#111111] gap-2">
                      GitHub <FaGithub size={15} />
                    </a>
                  )}
                  {project.links.details && (
                    <a href={project.links.details} className="retro-btn bg-[#111111] text-white px-5 py-2.5 text-sm hover:-translate-y-1 hover:shadow-[4px_4px_0_#86A789] shadow-[2px_2px_0_#111111] gap-2">
                      View Details <ArrowRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Coming Soon Project */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="retro-card p-10 text-center relative overflow-hidden border-dashed"
          >
            <div className="relative z-10 flex flex-col items-center">
              <div className="text-2xl font-bold text-[#86A789] mb-3 font-heading">Project 03</div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-[#111111] font-heading">Future Product</h3>
              <div className="inline-block px-4 py-1.5 border-2 border-[#111111] rounded-full font-bold text-[#111111] text-sm bg-[#D8B54B] shadow-[2px_2px_0_#111111] rotate-[-2deg]">
                Coming Soon
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
