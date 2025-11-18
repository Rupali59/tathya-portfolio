"use client";

import { motion } from "framer-motion";

export default function Services(): JSX.Element {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Building responsive websites and web applications using modern technologies.",
    },
    {
      icon: "💻",
      title: "Software Development",
      description:
        "Creating custom software solutions tailored to your business needs.",
    },
    {
      icon: "🔧",
      title: "Technical Consulting",
      description:
        "Providing technical guidance and solutions for your development challenges.",
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description:
        "Developing mobile applications and responsive web solutions.",
    },
    {
      icon: "🔍",
      title: "Reddit SEO",
      description:
        "Maximize your Reddit presence with strategic community engagement and content optimization.",
    },
    {
      icon: "🐦",
      title: "Twitter SEO",
      description:
        "Boost your Twitter engagement and reach with optimized hashtags, timing, and content strategy.",
    },
  ];

  return (
    <section className="py-20 bg-background-secondary text-text-primary alternating-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-text-primary">
            Our Services
          </h2>
          <p className="text-xl text-text-secondary">What we can do for you</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="glass rounded-lg p-6 cursor-pointer group"
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-text-primary group-hover:text-tiffany-blue transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
