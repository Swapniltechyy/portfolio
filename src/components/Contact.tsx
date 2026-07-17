import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/Swapniltechyy',
    hoverShadow: 'hover:shadow-[6px_6px_0_#86A789]',
    hoverIcon: 'group-hover:scale-110',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/swapnil-mitra-042247344/',
    hoverShadow: 'hover:shadow-[6px_6px_0_#0A66C2]',
    hoverIcon: 'group-hover:text-[#0A66C2] group-hover:scale-110',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=swapniltechyy@gmail.com',
    hoverShadow: 'hover:shadow-[6px_6px_0_#EA4335]',
    hoverIcon: 'group-hover:text-[#EA4335] group-hover:scale-110',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    href: 'https://wa.me/917063060602',
    hoverShadow: 'hover:shadow-[6px_6px_0_#25D366]',
    hoverIcon: 'group-hover:text-[#25D366] group-hover:scale-110',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-10 md:py-14 pt-16 md:pt-20 relative overflow-hidden">
      <div className="w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 mb-5 rounded-full border-2 border-[#111111] bg-[#86A789] text-[#111111] text-sm font-bold shadow-[2px_2px_0_#111111] rotate-[1.5deg]">
            Connect With Me
          </div>

          {/* Heading */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-5 tracking-tight font-heading text-[#111111] leading-tight">
            Let's Build <br className="hidden sm:block" />
            Something Great.
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-[#2D2D2D] mb-10 font-medium max-w-xl mx-auto leading-relaxed px-4">
            Ready to solve real business problems together? Feel free to reach out.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {socialLinks.map(({ icon: Icon, label, href, hoverShadow, hoverIcon }) => {
              const isMail = href.startsWith('mailto:');
              return (
                <a
                  key={label}
                  href={href}
                  target={isMail ? undefined : "_blank"}
                  rel={isMail ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border-2 border-[#111111] shadow-[4px_4px_0_#111111] flex items-center justify-center hover:-translate-y-1 ${hoverShadow} transition-all duration-200 group`}
                >
                  <Icon size={24} className={`text-[#111111] transition-all duration-200 ${hoverIcon}`} />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
