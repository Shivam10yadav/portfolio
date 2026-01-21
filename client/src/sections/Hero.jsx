import { Button } from "../components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
  Instagram,
  Code2,
  Rocket,
  Coffee,
  Bug,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const SKILLS = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Docker",
  "Git",
  "GitHub",
  "Socket.io",
  "JavaScript",
  "Vercel",
  "HTML5",
  "Kubernetes",
  "Zustand",
  "Framer Motion"
];

const STATS = [
  { icon: Code2, label: "Projects Built", value: "5+" },
  { icon: Rocket, label: "Technologies", value: "15+" },
  { icon: Bug, label: "Bugs Squashed", value: "100+" },
  { icon: Coffee, label: "Cups of Coffee", value: "∞" },
];

export const Hero = () => {
  const firstRow = SKILLS.slice(0, 6);
  const secondRow = SKILLS.slice(6);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20 relative z-10">
        {/* HERO CONTENT */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-6 sm:space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass text-xs sm:text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Developer • MERN Stack
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
              Creating <span className="text-primary">Full Stack</span>
              <br />
              Solutions with
              <br />
              <span className="font-serif italic font-normal text-white">
                Passion.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
              Hi, I'm Shivam Yadav — a software developer specializing in MERN
              Technologies. I build scalable, performant web applications that
              users love.
            </p>

            {/* CTA - FIXED */}
<div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                <a href="#contact" className="inline-block">
                <Button size="lg" className="inline-flex">
                  Contact Me <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>

              <a href="/resume10.pdf" download className="inline-block">
                <AnimatedBorderButton className="inline-flex">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3 sm:gap-4 animate-fade-in animation-delay-400">
              {[
                { icon: Github, href: "https://github.com/Shivam10yadav" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/shivam-yadav-15851328b",
                },
                { icon: Twitter, href: "https://x.com/Y80Shivam" },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/shivam05_10",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full glass hover:text-primary transition"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT - Flipping Card */}
          <div className="relative animate-fade-in animation-delay-300 mt-8 lg:mt-0">
            <div className="flex justify-center lg:justify-end lg:mr-[4rem]">
              <FlippingProfileCard />
            </div>
          </div>
        </div>

        {/* 🚀 SKILLS CARD MARQUEE */}
        <div className="mt-16 sm:mt-24 space-y-6 sm:space-y-8">
          <p className="text-xs sm:text-sm text-muted-foreground text-center uppercase tracking-widest">
            Technologies I work with
          </p>

          {/* Row 1 → */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 sm:gap-6 animate-marquee marquee-pause">
              {[...firstRow, ...firstRow].map((skill, i) => (
                <SkillCard key={i} name={skill} />
              ))}
            </div>
          </div>

          {/* Row 2 ← */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 sm:gap-6 animate-marquee-reverse marquee-pause">
              {[...secondRow, ...secondRow].map((skill, i) => (
                <SkillCard key={i} name={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-6 h-6 animate-bounce text-muted-foreground" />
      </div>
    </section>
  );
};

/* Flipping Profile Card Component */
const FlippingProfileCard = () => {
  return (
    <div className="group w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] h-[440px] sm:h-[480px] lg:h-[520px] [perspective:1000px] cursor-pointer">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* FRONT SIDE - Photo */}
        <div className="absolute w-full h-full [backface-visibility:hidden] rounded-2xl overflow-hidden">
          <div className="relative w-full h-full glass p-1.5 sm:p-2 border border-primary/10 rounded-2xl shadow-2xl">
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-xl" />
            
            <div className="relative h-full bg-background/80 backdrop-blur-xl rounded-xl overflow-hidden border border-primary/5">
              <img
                src="/profile.png"
                alt="Shivam Yadav"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              
              {/* Name & Title at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-1 sm:mb-2">Shivam Yadav</h2>
                <p className="text-sm sm:text-base text-primary font-medium">Software Developer</p>
              </div>

              {/* Available Badge */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 glass rounded-full px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-foreground">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BACK SIDE - Stats + Tech */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl">
          <div className="w-full h-full glass p-4 sm:p-6 border border-primary/10 rounded-2xl shadow-2xl">
            <div className="relative h-full bg-background/90 backdrop-blur-xl rounded-xl p-6 sm:p-8 flex flex-col justify-between border border-primary/5">
              
              {/* Header */}
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Quick Stats</h3>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-1 content-center">
                {STATS.map((stat, i) => (
                  <div
                    key={i}
                    className="glass rounded-xl p-4 sm:p-6 text-center hover:scale-105 transition-transform border border-primary/10"
                  >
                    <stat.icon className="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-2 sm:mb-3 text-primary" />
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Hint */}
              <div className="text-center">
                <p className="text-xs text-muted-foreground/60 italic">
                  Hover to flip back
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Skill Card */
const SkillCard = ({ name }) => {
  return (
    <div
      className="
        min-w-[130px] sm:min-w-[160px] h-[90px] sm:h-[110px]
        glass rounded-xl
        flex items-center justify-center
        text-base sm:text-lg font-semibold text-primary
        transform transition-all duration-300
        hover:-translate-y-2 hover:scale-105
        hover:shadow-xl hover:shadow-primary/20
        cursor-default
      "
    >
      {name}
    </div>
  );
};