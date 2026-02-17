"use client";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/skills";
import SkillBadge from "./SkillBadge";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function About() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* About Me Section */}
        <motion.div variants={itemVariants} className="lg:w-1/2">
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl"
          >
            I am Yohannes Mengistie, a fifth-year BSc Electrical and Computer Engineering
            student with a strong foundation in software engineering,
            algorithms, and backend development. I have experience building
            scalable distributed systems, cloud infrastructure, and modern web
            applications. I am passionate about leveraging hardware–software
            integration to develop innovative solutions in IoT, machine
            learning, automation, and backend services, and I enjoy solving
            real-world challenges through efficient and reliable code.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl mt-6"
          >
            As an aspiring backend developer, I focus on creating modern,
            scalable, and responsive applications. I continuously explore new
            technologies and refine my skills to deliver high-quality solutions.
            My goal is to build systems that not only meet user needs but also
            provide seamless and meaningful user experiences.
          </motion.p>
        </motion.div>

        {/* Skills Section */}
        <motion.div variants={itemVariants} className="lg:w-1/2">
          <motion.h3
            variants={itemVariants}
            className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800 dark:text-white"
          >
            Skills
          </motion.h3>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SkillBadge
                  name={skill.name}
                  icon={skill.icon}
                  color={skill.color}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
