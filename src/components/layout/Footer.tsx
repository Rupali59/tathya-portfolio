"use client";

import { motion } from "framer-motion";
import { Github, Globe, Linkedin, Twitter } from "lucide-react";
import OptimizedImage from "@/components/common/OptimizedImage";
import NextLink from "next/link";
import TrustLedger from "@/components/sections/TrustLedger";
import Logo from "@/components/common/Logo";
import { contactConfig, siteConfig, socialConfig } from "@/lib/env";
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

const socialLinks = [
  { icon: Github, url: socialConfig.github, label: "GitHub" },
  { icon: Linkedin, url: socialConfig.linkedin, label: "LinkedIn" },
  { icon: Twitter, url: socialConfig.twitter, label: "Twitter" },
  { icon: Globe, url: siteConfig.url, label: "Website" },
];

export default function Footer(): JSX.Element {
  return (
    <footer className="relative border-t py-16 md:py-24 border-border bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* System Identification */}
          <div>
            <Logo size="sm" className="!items-start mb-4" />
            <h4 className="text-sm sm:text-base font-mono font-bold uppercase tracking-widest mb-3 text-foreground">
              [ SYSTEM_ID ]
            </h4>
            <p className="text-xs sm:text-sm font-mono text-muted-foreground">
              {contactConfig.email}
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm sm:text-base font-serif font-semibold mb-3 text-foreground">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans text-muted-foreground">
              <li>
                <NextLink
                  href="/services/web-development"
                  className="hover:text-primary transition-colors min-h-[32px] flex items-center"
                >
                  Web Infrastructure
                </NextLink>
              </li>
              <li>
                <NextLink
                  href="/services/crm-integration"
                  className="hover:text-primary transition-colors min-h-[32px] flex items-center"
                >
                  CRM Integration
                </NextLink>
              </li>
              <li>
                <NextLink
                  href="/services/performance"
                  className="hover:text-primary transition-colors min-h-[32px] flex items-center"
                >
                  Performance
                </NextLink>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm sm:text-base font-serif font-semibold mb-3 text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans text-muted-foreground">
              <li>
                <NextLink
                  href="/about"
                  className="hover:text-primary transition-colors min-h-[32px] flex items-center"
                >
                  About
                </NextLink>
              </li>
              <li>
                <NextLink
                  href="/pricing"
                  className="hover:text-primary transition-colors min-h-[32px] flex items-center"
                >
                  Pricing
                </NextLink>
              </li>
              <li>
                <NextLink
                  href="/#configuration-bay"
                  className="hover:text-primary transition-colors min-h-[32px] flex items-center"
                >
                  Demo
                </NextLink>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm sm:text-base font-mono font-bold uppercase tracking-widest mb-3 text-white">
              [ EXTERNAL_HOOKS ]
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans">
              {socialLinks.map((link, _index) => {
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
                      className="flex items-center gap-2 hover:text-primary transition-colors text-zinc-400 min-h-[32px]"
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-primary opacity-50 hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="border-t pt-20 mb-12 mt-20 border-zinc-800">
          <div className="text-center mb-6">
            <h3 className="text-foreground text-2xl font-bold mb-2">
              System Architects
            </h3>
            <p className="text-muted-foreground text-sm">
              The experts behind the Motherboard infrastructure
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 list-none m-0 p-0">
            {teamMembers.map((member, index) => (
              <motion.li
                key={member.id}
                className="text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <article>
                  {/* Profile Image */}
                  <figure className="mb-3">
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 grayscale hover:grayscale-0"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {getTeamImagePath(member.imagePath) ? (
                        <OptimizedImage
                          src={getTeamImagePath(member.imagePath)!}
                          alt={`${member.name}, ${member.role}`}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div
                          className="w-full h-full flex items-center justify-center bg-card"
                          aria-hidden="true"
                        >
                          <span className="text-lg text-primary">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </motion.a>
                  </figure>

                  {/* Name & Role */}
                  <header>
                    <h4 className="text-foreground text-sm font-semibold mb-1">
                      {member.name}
                    </h4>
                    <p className="text-primary text-xs font-mono mb-2">
                      {member.role}
                    </p>
                  </header>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <nav
                    className="flex justify-center gap-2"
                    aria-label={`${member.name} social links`}
                  >
                    <motion.a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`${member.name} LinkedIn profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    {member.github && (
                      <motion.a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`${member.name} GitHub profile`}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                    {member.website && (
                      <motion.a
                        href={member.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-secondary transition-colors"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`${member.name} website`}
                      >
                        <Globe className="w-4 h-4" />
                      </motion.a>
                    )}
                  </nav>
                </article>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Live Ticker */}
        <div className="mb-8">
          <TrustLedger />
        </div>

        {/* Copyright */}
        <div className="border-t pt-6 text-center border-zinc-800">
          <p className="text-sm sm:text-base font-serif mb-2 text-foreground">
            Crafted in India for Global Growth
          </p>
          <p className="text-sm font-sans text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4 text-xs font-sans text-muted-foreground opacity-60">
            <NextLink
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </NextLink>
            <NextLink
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </NextLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
