import { useRef, useState } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import WorkCardSkeleton from "../components/WorkCardSkeleton";
import TechStack from "../components/TechStack";
import AboutSection from "../components/AboutSection";
import StatsSection from "../components/StatsSection";
import ApiShowcase from "../components/ApiShowcase";
import TabExpertise from "../components/TabExpertise";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import { SiNodedotjs, SiPhp, SiExpress, SiPostgresql, SiMysql, SiLaravel } from "react-icons/si";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  //State
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [projectsToShow, setProjectsToShow] = useState(
    data.projects.slice(0, 6)
  );
  const [isLoading, setIsLoading] = useState(false);

  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const showMoreProjects = () => {
    setIsLoading(true);
    const remainingProjects = data.projects.slice(visibleProjects);

    // Show skeletons for 1 second, then load projects
    setTimeout(() => {
      setIsLoading(false);
      setVisibleProjects(data.projects.length);

      // Stagger adding actual projects
      remainingProjects.forEach((project, index) => {
        setTimeout(() => {
          setProjectsToShow((prev) => [...prev, project]);
        }, index * 200); // 200ms stagger
      });
    }, 1000);
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.resume_name}</title>
        <link rel="icon" href="/images/download-modified.png" />
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="hero-section laptop:mt-20 mt-10">
          <div className="hero-content px-2 laptop:px-0">
            {/* Friendly Greeting */}
            <h2 ref={textOne} className="text-3xl laptop:text-4xl font-light text-text-secondary mb-4">
              Hello 👋
            </h2>

            {/* Introduction */}
            <h1 ref={textTwo} className="hero-title mb-6">
              I&apos;m <span className="gradient-text-backend">{data.resume_name}</span> - Backend Developer
            </h1>

            {/* Location & Specialty */}
            <p ref={textThree} className="hero-subtitle flex flex-col gap-2">
              <span className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span>Based in Istanbul, Turkiye</span>
              </span>
              <span>Specialized in building scalable APIs and robust backend systems</span>
            </p>

            {/* Tech Quick Badges */}
            <div className="tech-quick-badges" ref={textFour}>
              <div className="tech-quick-badge">
                <SiNodedotjs className="text-2xl" />
                <span className="font-semibold">Node.js</span>
              </div>
              <div className="tech-quick-badge">
                <SiPhp className="text-2xl" />
                <span className="font-semibold">PHP</span>
              </div>
              <div className="tech-quick-badge">
                <SiExpress className="text-2xl" />
                <span className="font-semibold">Express</span>
              </div>
              <div className="tech-quick-badge">
                <SiLaravel className="text-2xl" />
                <span className="font-semibold">Laravel</span>
              </div>
              <div className="tech-quick-badge">
                <SiPostgresql className="text-2xl" />
                <span className="font-semibold">PostgreSQL</span>
              </div>
              <div className="tech-quick-badge">
                <SiMysql className="text-2xl" />
                <span className="font-semibold">MySQL</span>
              </div>
            </div>

            <Socials className="mt-6" />
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 laptop:mt-30">
          <StatsSection stats={data.stats} />
        </div>

        {/* About Section - Moved up */}
        <div ref={aboutRef}>
          <AboutSection aboutpara={data.aboutpara} />
        </div>

        {/* API Showcase Section */}
        <div className="mt-10 laptop:mt-30">
          <ApiShowcase />
        </div>

        {/* Projects Section */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <div className="flex justify-between">
            <h1 className="text-2xl text-bold">Projects</h1>
            <p>Found {data.projects.length} Projects</p>
          </div>

          <div className="mt-5 laptop:mt-10 grid grid-cols-2 tablet:grid-cols-2 laptop:grid-cols-3 gap-3 mob:gap-4">
            {projectsToShow.map((project, index) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
                className={`transition-all transform duration-500 ease-out opacity-0 translate-y-5 ${index < visibleProjects ? "opacity-100 translate-y-0" : ""
                  }`}
              />
            ))}

            {/* Skeleton loaders */}
            {isLoading && Array.from({ length: data.projects.length - visibleProjects }).map((_, i) => (
              <WorkCardSkeleton key={`skeleton-${i}`} />
            ))}
          </div>

          {/* Eğer gösterilen proje sayısı toplam projelerden azsa "More Projects" butonunu göster */}
          {visibleProjects < data.projects.length && (
            <div className="flex justify-center mt-5">
              {" "}
              {/* Butonu ortalamak için flex kullanıyoruz */}
              <button
                className="px-4 py-2 rounded-lg text-lg font-bold transition-all duration-500 bg-text-primary text-bg-primary hover:bg-bg-secondary hover:text-text-primary hover:scale-105"
                onClick={showMoreProjects}
              >
                Show More Projects
              </button>
            </div>
          )}
        </div>

        {/* Expertise Section */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <div className="mt-5 tablet:m-10">
            <TabExpertise services={data.services} />
          </div>
        </div>

        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <a>
                <Button type="primary">Edit Data</Button>
              </a>
            </Link>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}
