"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Layers, Paintbrush, Smartphone } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Placeholder from '@/public/placeholder.svg';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Home() {
  // Refs for scroll animations
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)

  // Check if sections are in view
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 })
  const experienceInView = useInView(experienceRef, { once: true, amount: 0.3 })
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 })

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F9] dark:bg-[#121212]">
      {/* iOS-style header with blur effect */}
      <header className="sticky top-0 z-10 backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="container flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-xl"
          >
            <Link href="/">John Doe</Link>
          </motion.div>
          <nav className="hidden md:flex gap-6">
            {["About", "Skills", "Experience", "Projects", "Contact"].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * i }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Button size="sm" className="hidden md:flex rounded-full">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </motion.div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section with animations */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Front-End Developer
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  I build accessible, responsive, and performant web experiences.
                </p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <Button
                    size="lg"
                    className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-2 hover:bg-muted/50 transition-all duration-300"
                  >
                    View My Work
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                  <Image
                    src={Placeholder}
                    alt="John Doe"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white/50 dark:bg-gray-900/30 backdrop-blur-sm">
          <div className="container" ref={aboutRef}>
            <motion.h2
              className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div variants={fadeIn} initial="hidden" animate={aboutInView ? "visible" : "hidden"}>
                <p className="text-lg mb-4">
                  Hello! I'm John, a passionate front-end developer with 5 years of experience creating beautiful and
                  functional web applications. I specialize in React, Next.js, and modern CSS frameworks.
                </p>
                <p className="text-lg mb-4">
                  My approach to development focuses on creating intuitive user experiences while maintaining clean,
                  efficient code. I'm constantly learning new technologies and techniques to stay at the forefront of
                  web development.
                </p>
                <p className="text-lg">
                  When I'm not coding, you can find me hiking, reading tech blogs, or experimenting with new design
                  tools.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col gap-4"
                variants={staggerContainer}
                initial="hidden"
                animate={aboutInView ? "visible" : "hidden"}
              >
                <motion.div
                  variants={itemFadeIn}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="font-bold text-xl mb-2">Education</h3>
                  <p className="font-medium">Bachelor of Science in Computer Science</p>
                  <p className="text-muted-foreground">University of Technology, 2018</p>
                </motion.div>
                <motion.div
                  variants={itemFadeIn}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <h3 className="font-bold text-xl mb-2">Certifications</h3>
                  <ul className="space-y-2">
                    <li>Advanced React Patterns</li>
                    <li>Web Accessibility (WCAG 2.1)</li>
                    <li>Performance Optimization</li>
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="container" ref={skillsRef}>
            <motion.h2
              className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              Skills
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              animate={skillsInView ? "visible" : "hidden"}
            >
              {[
                {
                  icon: <Code className="h-6 w-6 text-blue-500" />,
                  title: "Frontend",
                  skills: [
                    "HTML5, CSS3, JavaScript (ES6+)",
                    "React, Next.js",
                    "TypeScript",
                    "Tailwind CSS, Styled Components",
                    "Redux, Context API",
                  ],
                },
                {
                  icon: <Layers className="h-6 w-6 text-purple-500" />,
                  title: "Tools & Workflow",
                  skills: [
                    "Git, GitHub",
                    "Webpack, Vite",
                    "Jest, React Testing Library",
                    "CI/CD Pipelines",
                    "Agile/Scrum Methodology",
                  ],
                },
                {
                  icon: <Paintbrush className="h-6 w-6 text-pink-500" />,
                  title: "Design",
                  skills: [
                    "Figma, Adobe XD",
                    "UI/UX Principles",
                    "Responsive Design",
                    "Design Systems",
                    "Animation & Micro-interactions",
                  ],
                },
                {
                  icon: <Smartphone className="h-6 w-6 text-green-500" />,
                  title: "Other",
                  skills: [
                    "RESTful APIs",
                    "GraphQL",
                    "Performance Optimization",
                    "Accessibility (WCAG)",
                    "SEO Best Practices",
                  ],
                },
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={itemFadeIn}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    {category.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-white/50 dark:bg-gray-900/30 backdrop-blur-sm">
          <div className="container" ref={experienceRef}>
            <motion.h2
              className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={experienceInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              Work Experience
            </motion.h2>
            <motion.div
              className="space-y-8"
              variants={staggerContainer}
              initial="hidden"
              animate={experienceInView ? "visible" : "hidden"}
            >
              {[
                {
                  title: "Senior Front-End Developer",
                  company: "TechCorp Inc.",
                  period: "Jan 2021 - Present",
                  achievements: [
                    "Led the development of a React-based dashboard that improved user engagement by 40%",
                    "Implemented performance optimizations that reduced load time by 60%",
                    "Mentored junior developers and conducted code reviews",
                    "Collaborated with designers to create and maintain a company-wide design system",
                  ],
                },
                {
                  title: "Front-End Developer",
                  company: "WebSolutions Ltd.",
                  period: "Mar 2019 - Dec 2020",
                  achievements: [
                    "Developed responsive websites for clients across various industries",
                    "Converted Figma and Adobe XD designs into pixel-perfect websites",
                    "Implemented accessibility improvements across all client projects",
                    "Integrated third-party APIs and services into web applications",
                  ],
                },
                {
                  title: "Junior Web Developer",
                  company: "Digital Agency",
                  period: "Jun 2018 - Feb 2019",
                  achievements: [
                    "Assisted in the development of client websites using HTML, CSS, and JavaScript",
                    "Maintained and updated existing client websites",
                    "Collaborated with the design team to implement visual elements",
                    "Participated in client meetings and requirement gathering",
                  ],
                },
              ].map((job, index) => (
                <motion.div
                  key={job.title}
                  variants={itemFadeIn}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex flex-col sm:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-blue-500 dark:text-blue-400">{job.company}</p>
                    </div>
                    <p className="text-muted-foreground">{job.period}</p>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="container" ref={projectsRef}>
            <motion.h2
              className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              Featured Projects
            </motion.h2>
            <motion.div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              animate={projectsInView ? "visible" : "hidden"}
            >
              {[
                {
                  title: "E-commerce Platform",
                  description:
                    "A full-featured online store built with Next.js, featuring product filtering, cart functionality, and payment integration.",
                  tags: ["Next.js", "TypeScript", "Stripe"],
                  image: Placeholder,
                },
                {
                  title: "Analytics Dashboard",
                  description:
                    "A responsive dashboard with interactive charts, data visualization, and real-time updates.",
                  tags: ["React", "D3.js", "Tailwind"],
                  image: Placeholder,
                },
                {
                  title: "Task Management App",
                  description:
                    "A productivity app with drag-and-drop task management, notifications, and team collaboration features.",
                  tags: ["React", "Redux", "Firebase"],
                  image: Placeholder,
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemFadeIn}
                  whileHover={{ y: -10 }}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="aspect-video relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="rounded-full">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button size="sm" className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white/50 dark:bg-gray-900/30 backdrop-blur-sm">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h2
                className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Get In Touch
              </motion.h2>
              <motion.p
                className="text-lg text-muted-foreground mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll do my
                best to get back to you!
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="gap-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600"
                >
                  <Mail className="h-5 w-5" />
                  hello@johndoe.com
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 rounded-full border-2 hover:bg-muted/50 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t border-gray-200 dark:border-gray-800">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </div>
            <div className="flex gap-4">
              <Link href="https://github.com" target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
              <Link href="mailto:hello@johndoe.com" aria-label="Email">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

