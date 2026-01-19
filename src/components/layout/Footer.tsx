"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import { getTeamImagePath } from "@/lib/imageUtils";
import { socialConfig, siteConfig, contactConfig } from "@/lib/env";

const teamMembers = [
  {
    name: "Rupali B",
    role: "Founder & Lead Developer",
    imagePath: "/images/team/rupali-b.jpeg",
    linkedin: "https://linkedin.com/in/rupali-bhatnagar-b4864957",
  },
  {
    name: "Keerti Kaushik",
    role: "UI/UX Designer",
    imagePath: "/images/team/keerti-kaushik.jpeg",
    linkedin: "https://linkedin.com/in/kumkirt",
  },
  {
    name: "Khushboo P",
    role: "Business Development",
    imagePath: "/images/team/khushboo-p.jpeg",
    linkedin: "https://www.linkedin.com/in/khushbooparasrampuria/",
  },
  {
    name: "Tipu Ali Khan",
    role: "Technical Consultant",
    imagePath: "/images/team/tipu-ali-khan.jpeg",
    linkedin: "https://www.linkedin.com/in/tipu-ali-khan/",
  },
  {
    name: "Pooja H Patel",
    role: "Marketing & Communications",
    imagePath: "/images/team/pooja-h-patel.webp",
    linkedin: "https://www.linkedin.com/in/poojahpatel/",
  },
];

const socialLinks = [
  { icon: Github, url: socialConfig.github, label: "GitHub" },
  { icon: Linkedin, url: socialConfig.linkedin, label: "LinkedIn" },
  { icon: Twitter, url: socialConfig.twitter, label: "Twitter" },
  { icon: Globe, url: siteConfig.url, label: "Website" },
];

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-pure-black border-t border-sapphire-blue-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Photos Section */}
        <div className="mb-12">
          <h4 className="text-lg font-serif font-semibold mb-6 text-white text-center">
            Our Team
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  className="relative w-20 h-20 rounded-full overflow-hidden mb-2
                           border-2 border-sapphire-blue-20
                           hover:border-sapphire-blue transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {getTeamImagePath(member.imagePath) ? (
                    <img
                      src={getTeamImagePath(member.imagePath)!}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-dark-charcoal flex items-center justify-center">
                      <span className="text-white text-xs">{member.name.charAt(0)}</span>
                    </div>
                  )}
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-sapphire-blue/0 group-hover:bg-sapphire-blue/20 transition-all duration-300" />
                </motion.div>
                <p className="text-white/70 text-xs font-mono">{member.name}</p>
                <p className="text-white/50 text-xs">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-12 h-12 rounded-full border-2 border-sapphire-blue-20
                         flex items-center justify-center text-white/70
                         hover:border-sapphire-blue hover:text-sapphire-blue
                         hover:border-emerald-green hover:text-emerald-green
                         transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent className="w-5 h-5" />
              </motion.a>
            );
          })}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-sapphire-blue-20 pt-8">
          <div className="text-center text-white/50 text-sm font-mono">
            <p className="mb-2">&copy; 2024 Tathya. All rights reserved.</p>
            <div className="flex justify-center gap-4 text-xs">
              <a
                href="/privacy"
                className="hover:text-sapphire-blue transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span>•</span>
              <a
                href="/terms"
                className="hover:text-sapphire-blue transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
