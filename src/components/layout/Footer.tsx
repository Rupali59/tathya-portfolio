"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import { getTeamImagePath } from "@/lib/imageUtils";
import { socialConfig, siteConfig, contactConfig } from "@/lib/env";
import { useTheme } from "@/contexts/ThemeContext";

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
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const isLight = resolvedTheme === "light";

  return (
    <footer className={`border-t py-8 architect-section ${
      isLight 
        ? 'bg-[#F8F9FA] border-[#E2E8F0]' 
        : 'bg-[#000000] border-[#0F52BA]/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Contact */}
          <div>
            <h4 className="text-sm font-serif font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              {siteConfig.name}
            </h4>
            <p className="text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>
              {contactConfig.email}
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-serif font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Services
            </h4>
            <ul className="space-y-2 text-xs font-sans" style={{ color: 'var(--text-secondary)' }}>
              <li><a href="/services/web-development" className="hover:underline">Web Infrastructure</a></li>
              <li><a href="/services/crm-integration" className="hover:underline">CRM Integration</a></li>
              <li><a href="/services/performance" className="hover:underline">Performance</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-serif font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Company
            </h4>
            <ul className="space-y-2 text-xs font-sans" style={{ color: 'var(--text-secondary)' }}>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/pricing" className="hover:underline">Pricing</a></li>
              <li><a href="/demo" className="hover:underline">Demo</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-serif font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
              Connect
            </h4>
            <ul className="space-y-2 text-xs font-sans">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.li
                    key={link.label}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 hover:underline"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <IconComponent className="w-4 h-4" />
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Understated Team Profiles - Grayscale to Color */}
        <div className="border-t pt-6 mb-6" style={{ borderColor: isDark ? 'rgba(15,82,186,0.2)' : 'rgba(229,231,235,1)' }}>
          <p className="text-xs font-mono mb-4 text-center" style={{ color: 'var(--text-tertiary)' }}>
            System Architects
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {teamMembers.map((member, index) => (
              <motion.a
                key={member.name}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-12 h-12 rounded-full overflow-hidden group
                         border border-transparent hover:border-opacity-50
                         transition-all duration-300 grayscale hover:grayscale-0"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {getTeamImagePath(member.imagePath) ? (
                  <img
                    src={getTeamImagePath(member.imagePath)!}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${
                    isDark ? 'bg-[#121212]' : 'bg-gray-200'
                  }`}>
                    <span className={`text-xs ${
                      isDark ? 'text-white/50' : 'text-gray-500'
                    }`}>{member.name.charAt(0)}</span>
                  </div>
                )}
                {/* Hover tooltip */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright & CTA */}
        <div className="border-t pt-6 text-center space-y-4" style={{ borderColor: isDark ? 'rgba(15,82,186,0.2)' : 'rgba(229,231,235,1)' }}>
          <div>
            <p className="text-sm font-serif mb-2" style={{ color: isLight ? '#0F172A' : '#FFFFFF' }}>
              Crafted in India for Global Growth
            </p>
            <a
              href="/contact"
              className={`inline-block px-6 py-2 rounded-lg font-sans text-sm font-semibold transition-all duration-300 ${
                isLight
                  ? 'bg-sapphire-ink text-white hover:bg-sapphire-ink/90'
                  : 'bg-[#0F52BA] text-white hover:bg-[#0F52BA]/80'
              }`}
            >
              Talk to an Architect
            </a>
          </div>
          <p className="text-xs font-sans" style={{ color: 'var(--text-tertiary)' }}>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
