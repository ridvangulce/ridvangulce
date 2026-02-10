import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import Section from '../components/Section';
import CaseStudyCard from '../components/CaseStudyCard';
import { caseStudies } from '../data/caseStudies';
import { experience } from '../data/experience';
import { projects } from '../data/projects';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

// Dynamically import heavy 3D components
const HeroObject = dynamic(() => import('../components/canvas/HeroObject'), { ssr: false });
const ShaderBackground = dynamic(() => import('../components/canvas/ShaderBackground'), { ssr: false });

export default function Home() {
  return (
    <Layout>
      <ShaderBackground />

      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* 3D Background Layer */}
        <div className="absolute inset-0 z-0">
          <HeroObject />
        </div>

        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pointer-events-none">
          <Section className="pointer-events-auto">
            <p className="text-primary font-mono mb-4 tracking-wider">Hi, I&apos;m Rıdvan Gülçe</p>
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6 leading-tight">
              Backend Developer <br /> & Scalable APIs
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              Passionate Backend Developer with 3+ years of experience building robust, API-driven systems.
              Specializing in Node.js, Express, and Laravel.
            </p>
            <div className="flex gap-4">
              <Link href="#projects" className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-all shadow-lg shadow-primary/25">
                View Projects
              </Link>
              <Link href="https://github.com/ridvangulce" target="_blank" className="px-8 py-3 bg-bg-tertiary border border-border-subtle text-white font-medium rounded-lg hover:bg-bg-secondary transition-all flex items-center gap-2">
                <FaGithub /> GitHub
              </Link>
              <Link href="https://www.linkedin.com/in/ridvangulce/" target="_blank" className="px-8 py-3 bg-bg-tertiary border border-border-subtle text-white font-medium rounded-lg hover:bg-bg-secondary transition-all flex items-center gap-2">
                <FaLinkedin /> LinkedIn
              </Link>
            </div>
          </Section>

          {/* Spacer for 3D object visibility on desktop */}
          <div className="hidden lg:block h-[500px]"></div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-text-secondary">
          <span className="text-sm font-mono">SCROLL</span>
        </div>
      </div>

      {/* Stats Row */}
      <div className="border-y border-border-subtle bg-bg-secondary/30 backdrop-blur-sm">
        <div className="container-custom py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Years Experience", value: "7+" },
            { label: "Systems Architected", value: "20+" },
            { label: "Uptime Maintained", value: "99.9%" },
            { label: "Coffee Consumed", value: "∞" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs font-mono text-text-secondary uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Case Studies */}
      <Section id="case-studies" className="bg-bg-primary">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Selected Work</h2>
              <p className="text-text-secondary max-w-xl">Deep dives into complex technical challenges and how I solved them.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={study.id} study={study} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* Experience Timeline */}
      <Section id="experience" className="bg-bg-secondary/20">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">Experience</h2>
          <div className="relative border-l border-border-subtle ml-4 md:ml-0 md:pl-8 space-y-12">
            {experience.map((exp) => (
              <div key={exp.id} className="relative pl-8 md:pl-0">
                {/* Timeline Dot */}
                <span className="absolute -left-[5px] md:-left-[9px] top-2 w-3 h-3 bg-primary rounded-full ring-4 ring-bg-secondary" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                    <p className="text-text-secondary font-mono text-sm mt-1">{exp.period}</p>
                  </div>
                  <div className="md:col-span-9">
                    <h4 className="text-lg text-primary mb-2 font-medium">{exp.role}</h4>
                    <p className="text-text-secondary mb-4 leading-relaxed">{exp.description}</p>
                    <ul className="space-y-2 mb-4 list-disc list-inside text-text-secondary text-sm">
                      {exp.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map(t => (
                        <span key={t} className="text-xs px-2 py-1 bg-bg-tertiary rounded text-text-secondary border border-border-subtle">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Other Projects */}
      <Section id="projects" className="bg-bg-primary">
        <div className="container-custom">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link href={project.link} key={project.id} target="_blank" className="group p-6 bg-bg-secondary border border-border-subtle rounded-xl hover:border-primary/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
                <p className="text-text-secondary text-sm mb-6 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs text-text-secondary font-mono">#{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Footer / Contact */}
      <Section className="py-20 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Let&apos;s build something scalable.</h2>
        <Link href="mailto:contact@example.com" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:scale-105 transition-transform">
          Get in Touch
        </Link>
        <div className="flex justify-center gap-6 mt-12 text-2xl text-text-secondary">
          <Link href="#" className="hover:text-white transition-colors"><FaGithub /></Link>
          <Link href="#" className="hover:text-white transition-colors"><FaLinkedin /></Link>
          <Link href="#" className="hover:text-white transition-colors"><FaTwitter /></Link>
        </div>
      </Section>

    </Layout>
  );
}
