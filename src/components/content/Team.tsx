"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { teamCardEnter, staggerContainer, staggerItem } from "@/lib/animations";
import { getTeamImagePath, getTeamImageFallback } from "@/lib/imageUtils";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  emoji: string;
  imagePath?: string; // Optional profile image path
  links: {
    label: string;
    url: string;
  }[];
  specialties: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Rupali B",
    role: "Founder & Lead Developer",
    description:
      "Passionate developer with extensive experience in web development and software engineering. I love learning new technologies and building solutions that make a real difference in people's lives.",
    emoji: "👩‍💻",
    imagePath: "/images/team/rupali-b.jpeg",
    links: [
      { label: "GitHub", url: "https://github.com/Rupali59" },
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/rupali-bhatnagar-b4864957",
      },
    ],
    specialties: [
      "Full-Stack Development",
      "Problem Solving",
      "Tech Leadership",
    ],
  },
  {
    id: 2,
    name: "Keerti Kaushik",
    role: "UI/UX Designer",
    description:
      "Creative designer with a passion for creating beautiful and functional user interfaces. Focused on delivering exceptional user experiences through thoughtful design and attention to detail.",
    emoji: "👩‍🎨",
    imagePath: "/images/team/keerti-kaushik.jpeg",
    links: [
      { label: "LinkedIn", url: "https://linkedin.com/in/kumkirt" },
      { label: "Dribbble", url: "https://dribbble.com/keertikaushik" },
    ],
    specialties: ["UI/UX Design", "Visual Design", "User Research"],
  },
  {
    id: 3,
    name: "Khushboo P",
    role: "Business Development & Strategy",
    description:
      "Strategic business professional with expertise in market analysis, client relations, and growth strategies. Passionate about building meaningful partnerships and driving business success.",
    emoji: "💼",
    imagePath: "/images/team/khushboo-p.jpeg",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/khushbooparasrampuria/",
      },
    ],
    specialties: ["Business Strategy", "Client Relations", "Market Analysis"],
  },
  {
    id: 4,
    name: "Tipu Ali Khan",
    role: "Technical Consultant & Developer",
    description:
      "Experienced technical consultant with deep expertise in software architecture and development. Committed to delivering high-quality solutions and mentoring the next generation of developers.",
    emoji: "👨‍💻",
    imagePath: "/images/team/tipu-ali-khan.jpeg",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/tipu-ali-khan/" },
    ],
    specialties: ["Software Architecture", "Technical Consulting", "Mentoring"],
  },
  {
    id: 5,
    name: "Pooja H Patel",
    role: "Marketing & Communications",
    description:
      "Creative marketing professional specializing in digital marketing, brand strategy, and content creation. Expert in building compelling narratives that connect with audiences and drive engagement.",
    emoji: "📈",
    imagePath: "/images/team/pooja-h-patel.webp",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/poojahpatel/" },
    ],
    specialties: ["Digital Marketing", "Brand Strategy", "Content Creation"],
  },
];

export default function Team(): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 bg-background-primary text-text-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-interactive-primary/5 via-transparent to-interactive-secondary/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-text-primary"
            variants={staggerItem}
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            className="text-xl text-text-secondary max-w-2xl mx-auto"
            variants={staggerItem}
          >
            The passionate individuals behind Tathya, working together to create
            exceptional digital experiences
          </motion.p>
        </motion.div>

        {/* Motion Ticker Container */}
        <motion.div
          className="relative overflow-hidden carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Motion Ticker */}
          <div
            className={`flex space-x-4 md:space-x-6 py-8 ${
              isHovered ? "pause-animation" : "auto-scroll-medium"
            }`}
            style={{
              willChange: isHovered ? "auto" : "transform",
            }}
          >
            {/* Duplicate team members for seamless loop */}
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <motion.div
                key={`${member.id}-${index}`}
                className="flex-shrink-0 w-72 md:w-80 glass p-4 md:p-6 rounded-xl text-center cursor-pointer team-card"
                variants={teamCardEnter}
                whileHover={{
                  y: -15,
                  scale: 1.08,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="mb-3 md:mb-4 flex justify-center">
                  {getTeamImagePath(member.imagePath) ? (
                    <img
                      src={getTeamImagePath(member.imagePath)!}
                      alt={`${member.name} profile`}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-interactive-primary/20"
                      onError={(e) => {
                        // Fallback to emoji if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-3xl md:text-4xl">${getTeamImageFallback(
                            member.emoji
                          )}</span>`;
                        }
                      }}
                    />
                  ) : (
                    <span className="text-3xl md:text-4xl">
                      {getTeamImageFallback(member.emoji)}
                    </span>
                  )}
                </div>

                <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-text-primary">
                  {member.name}
                </h4>

                <p className="text-interactive-primary text-xs md:text-sm mb-2 md:mb-3">
                  {member.role}
                </p>

                <p className="text-text-secondary text-xs mb-3 md:mb-4 leading-relaxed">
                  {member.description.length > 80
                    ? `${member.description.substring(0, 80)}...`
                    : member.description}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap justify-center gap-1 mb-3 md:mb-4">
                  {member.specialties.slice(0, 2).map((specialty) => (
                    <motion.span
                      key={specialty}
                      className="px-2 py-1 bg-interactive-primary/10 text-interactive-primary rounded text-xs"
                      whileHover={{ scale: 1.05 }}
                    >
                      {specialty}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-center space-x-2 md:space-x-3">
                  {member.links.slice(0, 2).map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-interactive-primary transition-colors duration-300 text-xs flex items-center space-x-1"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>{link.label}</span>
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-r from-background-primary to-transparent pointer-events-none z-20"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-20 bg-gradient-to-l from-background-primary to-transparent pointer-events-none z-20"></div>
        </motion.div>
      </div>
    </section>
  );
}
