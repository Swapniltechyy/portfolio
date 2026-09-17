import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, X, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

type ProjectType = {
  id: string;
  title: string;
  displayTitle?: React.ReactNode;
  badge: string;
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
    id: 'bengal-taxi',
    title: 'Bengal Taxi',
    badge: 'TRAVEL & TRANSPORT',
    description: 'Modern cab booking platform for Bengal Taxi, designed to simplify bookings and enhance customer experience with seamless route selection and fast dispatch.',
    type: 'Travel & Transport',
    features: ['Responsive Layout', 'SEO Ready', 'Modern UI', 'Business Website', 'Production Deployment'],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: '/projects/bengaltaxi-og.jpg',
    links: {
      live: 'https://bengaltaxi.com/',
    }
  },
  {
    id: 'stayfinder',
    title: 'StayFinder',
    badge: 'B2B PLATFORM',
    description: 'A B2B accommodation discovery platform helping travel businesses find hotels, homestays, and PGs with exact locations, proprietor contacts, and area filtering.',
    type: 'B2B Platform',
    features: ['Exact Map Locations', 'Hotels, Homestays & PGs', 'Direct Contact & Phone', 'Area & Category Filter', 'B2B Accommodation Portal'],
    tech: ['React', 'Leaflet Maps', 'Tailwind CSS', 'Vite'],
    image: '/projects/stayfinder.png',
    links: {
      live: 'https://stayfinder.swapniltech.com/',
    }
  },
  {
    id: 'baba-loknath',
    title: 'Baba Loknath Communication',
    displayTitle: (
      <>
        <span className="whitespace-nowrap">Baba Loknath</span>
        <br />
        <span className="whitespace-nowrap">Communication</span>
      </>
    ),
    badge: 'TRAVEL SERVICES',
    description: 'A production-ready website for Baba Loknath Communication, offering comprehensive travel bookings, ticket reservations, and digital services.',
    type: 'Travel Services',
    features: ['Travel Bookings', 'Digital Services', 'Modern UI', 'Responsive Design', 'Direct Inquiry Form'],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    image: '/projects/baba-loknath.png',
    links: {
      live: 'https://www.babaloknathcommunication.com/',
    }
  },
  {
    id: 'ecommerce-garments',
    title: 'Garments Store',
    badge: 'E-COMMERCE',
    description: 'A modern women’s kurti and apparel e-commerce platform designed for an elegant, responsive online shopping experience with catalog browsing.',
    type: 'E-Commerce',
    features: ['Product Catalog', 'Responsive Design', 'Modern UI', 'Shopping Cart', 'New Collections'],
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    image: '/projects/ecommerce-garments.jpg',
    links: {
      live: 'https://ecommerce-garments.netlify.app/',
    }
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-16 md:py-20 relative">
      <div className="w-full max-w-[900px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full border-2 border-[#111111] bg-[#86A789] text-[#111111] text-sm font-bold shadow-[2px_2px_0_#111111] rotate-[2deg]">
            Selected Works
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading text-[#111111]">
            Featured Projects
          </h2>
        </motion.div>

        {/* 2-Column Grid on both Mobile and Desktop */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-5 md:gap-6">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="bg-[#FAF3E5] border-2 sm:border-[2.5px] border-[#111111] rounded-[16px] sm:rounded-[22px] md:rounded-[26px] shadow-[4px_4px_0px_#111111] sm:shadow-[6px_6px_0px_#111111] md:shadow-[7px_7px_0px_#111111] hover:shadow-[6px_6px_0px_#111111] sm:hover:shadow-[9px_9px_0px_#111111] md:hover:shadow-[10px_10px_0px_#111111] hover:-translate-y-0.5 sm:hover:-translate-y-1 hover:-translate-x-0.5 sm:hover:-translate-x-1 transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
              >
                {/* Desktop Site Window / Image Container */}
                <div className="relative w-full aspect-[16/10] overflow-hidden border-b-2 sm:border-b-[2.5px] border-[#111111] bg-[#FCFAF7] flex flex-col">
                  {/* Subtle Browser Window Header Mockup (Visible on sm and up) */}
                  <div className="hidden sm:flex w-full bg-[#EFE9DC] border-b border-[#111111]/20 px-3 py-1.5 items-center justify-between z-10 select-none">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#111111]/30" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#111111]/30" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#111111]/30" />
                    </div>
                    <div className="text-[10.5px] font-mono font-medium text-[#111111]/60 px-2.5 py-0.5 rounded-full bg-white/80 border border-[#111111]/15 max-w-[180px] truncate">
                      {project.links.live ? new URL(project.links.live).hostname : project.title.toLowerCase().replace(/\s+/g, '') + '.com'}
                    </div>
                    <div className="w-10" />
                  </div>

                  {/* Website Image */}
                  <div className="relative flex-1 w-full overflow-hidden bg-[#FAF7F2]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center -z-10 bg-[#FAF7F2]">
                      <span className="font-heading font-bold text-xs sm:text-xl text-[#111111]">{project.title}</span>
                    </div>

                    {/* Top-Right Pill Badge */}
                    <div className="absolute top-1.5 right-1.5 sm:top-3.5 sm:right-3.5 px-1.5 py-0.5 sm:px-3.5 sm:py-1 bg-white/95 backdrop-blur-xs border sm:border-2 border-[#111111] rounded-full text-[7px] sm:text-[11px] font-black uppercase tracking-tight sm:tracking-wider text-[#111111] shadow-[1.5px_1.5px_0px_#111111] sm:shadow-[2px_2px_0px_#111111] select-none whitespace-nowrap">
                      {project.badge}
                    </div>
                  </div>
                </div>

                {/* Bottom Bar: Title & Circular Action Button */}
                <div className="px-2.5 py-1.5 sm:px-5 sm:py-3 md:px-5.5 md:py-3.5 min-h-[48px] sm:min-h-[64px] md:min-h-[70px] flex items-center justify-between gap-1.5 sm:gap-3 bg-[#FAF3E5] flex-1">
                  <h3 className={`font-heading font-black text-[9.5px] xs:text-[11px] sm:text-[16px] md:text-[20px] leading-[1.12] sm:leading-[1.15] tracking-tight uppercase text-[#111111] ${project.displayTitle ? '' : 'truncate'}`}>
                    {project.displayTitle || project.title}
                  </h3>

                  {project.links.live ? (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title={`Open ${project.title} live site`}
                      className="w-6 h-6 sm:w-9.5 sm:h-9.5 md:w-10.5 md:h-10.5 rounded-full border sm:border-2 border-[#111111] bg-transparent text-[#111111] group-hover:bg-[#86A789] group-hover:text-[#111111] group-hover:shadow-[1.5px_1.5px_0px_#111111] sm:group-hover:shadow-[2px_2px_0px_#111111] flex items-center justify-center shrink-0 transition-all duration-300"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      title="View project details"
                      className="w-6 h-6 sm:w-9.5 sm:h-9.5 md:w-10.5 md:h-10.5 rounded-full border sm:border-2 border-[#111111] bg-transparent text-[#111111] group-hover:bg-[#86A789] group-hover:text-[#111111] group-hover:shadow-[1.5px_1.5px_0px_#111111] sm:group-hover:shadow-[2px_2px_0px_#111111] flex items-center justify-center shrink-0 transition-all duration-300"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FAF7F2] border-[3px] border-[#111111] rounded-[28px] sm:rounded-[32px] shadow-[10px_10px_0px_#111111] max-w-2xl w-full max-h-[90vh] overflow-y-auto relative p-6 sm:p-8 my-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full border-2 border-[#111111] bg-white hover:bg-[#86A789] hover:text-[#111111] flex items-center justify-center transition-colors shadow-[2px_2px_0px_#111111] cursor-pointer"
              >
                <X size={20} strokeWidth={2.5} />
              </button>

              {/* Modal Header */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3.5 py-1 bg-white border-2 border-[#111111] rounded-full text-xs font-black uppercase tracking-wider text-[#111111] shadow-[2px_2px_0px_#111111]">
                  {selectedProject.badge}
                </span>
                {selectedProject.status && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border-2 border-[#111111] bg-[#D8B54B] text-[#111111] text-xs font-bold shadow-[2px_2px_0px_#111111]">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse border border-[#111111]" />
                    {selectedProject.status}
                  </span>
                )}
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-heading uppercase text-[#111111] mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-sm font-bold text-[#86A789] mb-5">
                {selectedProject.type}
              </p>

              {/* Image Preview */}
              <div className="w-full aspect-[16/9] rounded-2xl border-2 border-[#111111] overflow-hidden mb-6 bg-[#FCFAF7] shadow-[4px_4px_0px_#111111]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-xs font-black text-[#111111] uppercase tracking-wider mb-2">About Project</h4>
                <p className="text-[#2D2D2D] font-medium leading-relaxed text-sm sm:text-base">
                  {selectedProject.description}
                </p>
              </div>

              {/* Tech Stack */}
              {selectedProject.tech && (
                <div className="mb-6">
                  <h4 className="text-xs font-black text-[#111111] uppercase tracking-wider mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-white border-2 border-[#111111] rounded-lg text-xs font-bold text-[#111111] shadow-[2px_2px_0px_#111111]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {selectedProject.features && (
                <div className="mb-8">
                  <h4 className="text-xs font-black text-[#111111] uppercase tracking-wider mb-2">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[#2D2D2D] text-sm font-medium">
                        <CheckCircle2 size={16} className="text-[#86A789] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Modal Footer Links */}
              <div className="flex flex-wrap gap-3 pt-4 border-t-2 border-[#111111]/10">
                {selectedProject.links.live && (
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-btn bg-[#86A789] text-[#111111] px-6 py-2.5 text-sm font-bold shadow-[3px_3px_0px_#111111] hover:shadow-[5px_5px_0px_#111111] hover:-translate-y-0.5 gap-2 cursor-pointer"
                  >
                    Visit Live Website <ExternalLink size={16} />
                  </a>
                )}
                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-btn bg-white text-[#111111] px-5 py-2.5 text-sm font-bold shadow-[3px_3px_0px_#111111] hover:shadow-[5px_5px_0px_#111111] hover:-translate-y-0.5 gap-2 cursor-pointer"
                  >
                    GitHub <FaGithub size={16} />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="retro-btn bg-white text-[#111111] px-5 py-2.5 text-sm font-bold shadow-[3px_3px_0px_#111111] hover:shadow-[5px_5px_0px_#111111] hover:-translate-y-0.5 ml-auto cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
