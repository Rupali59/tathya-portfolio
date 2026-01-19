"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Globe } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { getTeamImagePath } from "@/lib/imageUtils";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  imagePath: string;
  linkedin: string;
  github?: string;
  website?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Rupali B",
    role: "Founder & Lead Developer",
    description:
      "Passionate developer with 9+ years of experience in web development and software engineering. Expert in building scalable infrastructure and leading technical teams.",
    imagePath: "/images/team/rupali-b.jpeg",
    linkedin: "https://linkedin.com/in/rupali-bhatnagar-b4864957",
    github: "https://github.com/Rupali59",
  },
  {
    id: 2,
    name: "Keerti Kaushik",
    role: "UI/UX Designer",
    description:
      "Creative designer specializing in premium hardware aesthetics and user experience design. Focused on creating intuitive interfaces for complex systems.",
    imagePath: "/images/team/keerti-kaushik.jpeg",
    linkedin: "https://linkedin.com/in/kumkirt",
  },
  {
    id: 3,
    name: "Khushboo P",
    role: "Business Development",
    description:
      "Strategic business professional with expertise in enterprise partnerships and growth strategies. Passionate about building meaningful client relationships.",
    imagePath: "/images/team/khushboo-p.jpeg",
    linkedin: "https://www.linkedin.com/in/khushbooparasrampuria/",
  },
  {
    id: 4,
    name: "Tipu Ali Khan",
    role: "Technical Consultant",
    description:
      "Experienced technical consultant with deep expertise in software architecture and infrastructure design. Committed to delivering high-quality solutions.",
    imagePath: "/images/team/tipu-ali-khan.jpeg",
    linkedin: "https://www.linkedin.com/in/tipu-ali-khan/",
  },
  {
    id: 5,
    name: "Pooja H Patel",
    role: "Marketing & Communications",
    description:
      "Creative marketing professional specializing in digital marketing and brand strategy. Expert in building compelling narratives for technical products.",
    imagePath: "/images/team/pooja-h-patel.webp",
    linkedin: "https://www.linkedin.com/in/poojahpatel/",
  },
];

export default function Team(): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  return (
    <section className="relative architect-section" style={{ backgroundColor: isLight ? '#F8F9FA' : '#000000' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4" style={{ color: isLight ? '#0F172A' : '#FFFFFF' }}>
            System Architects
          </h2>
          <p className="text-xl font-sans" style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}>
            The experts behind the Motherboard infrastructure
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Team Card */}
              <motion.div
                className={`relative p-6 overflow-hidden card-lift ${
                  isLight ? 'frost-panel' : 'bg-[#121212] border border-[#0F52BA] rounded-lg transition-all duration-300'
                }`}
                whileHover={{
                  y: -2,
                  boxShadow: isLight
                    ? "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)"
                    : "0 8px 24px rgba(0,0,0,0.5), 0 0 20px rgba(15,82,186,0.4)",
                }}
                whileTap={{ y: 1 }}
                transition={{ duration: 0.2 }}
              >
                {/* Profile Image */}
                <div className="flex justify-center mb-4">
                  <motion.div
                    className={`relative w-20 h-20 rounded-full overflow-hidden border-2 transition-all duration-300 ${
                      isLight ? 'border-silver-edge' : 'border-[#0F52BA]/30'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {getTeamImagePath(member.imagePath) ? (
                      <img
                        src={getTeamImagePath(member.imagePath)!}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <div
                        className={`w-full h-full flex items-center justify-center ${
                          isLight ? 'bg-silver-edge' : 'bg-[#121212]'
                        }`}
                      >
                        <span
                          className={`text-2xl ${
                            isLight ? 'text-sapphire-ink' : 'text-[#0F52BA]'
                          }`}
                        >
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Name & Role */}
                <div className="text-center mb-4">
                  <h3
                    className="text-xl font-serif font-bold mb-1"
                    style={{ color: isLight ? '#0F172A' : '#FFFFFF' }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-sm font-mono"
                    style={{ color: isLight ? '#0747A6' : '#0F52BA' }}
                  >
                    {member.role}
                  </p>
                </div>

                {/* Description */}
                <p
                  className="text-sm font-sans text-center mb-4 leading-relaxed"
                  style={{ color: isLight ? '#475569' : 'rgba(255,255,255,0.7)' }}
                >
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3 pt-4 border-t" style={{ borderColor: isLight ? '#E2E8F0' : 'rgba(15,82,186,0.2)' }}>
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors duration-300 ${
                      isLight ? 'text-sapphire-ink hover:text-forest-emerald' : 'text-[#0F52BA] hover:text-[#50C878]'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  {member.github && (
                    <motion.a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors duration-300 ${
                        isLight ? 'text-sapphire-ink hover:text-forest-emerald' : 'text-[#0F52BA] hover:text-[#50C878]'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  )}
                  {member.website && (
                    <motion.a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors duration-300 ${
                        isLight ? 'text-sapphire-ink hover:text-forest-emerald' : 'text-[#0F52BA] hover:text-[#50C878]'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Globe className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
