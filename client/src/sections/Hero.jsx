import { Button } from "../components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
  Instagram,
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

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        {/* HERO CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Developer • MERN Stack
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
              Creating <span className="text-primary">Full Stack</span>
              <br />
              Solutions with
              <br />
              <span className="font-serif italic font-normal text-white">
                Passion.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
              Hi, I'm Shivam Yadav — a software developer specializing in MERN
              Technologies. I build scalable, performant web applications that
              users love.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>

              <a href="/cv.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 animate-fade-in animation-delay-400">
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

          {/* RIGHT */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />

              <div className="relative glass rounded-3xl p-2 glow-border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30">
                <img
                  src="/profile.png"
                  alt="Shivam Yadav"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-xl font-bold text-primary">
                    Building & Learning
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Full Stack Apps
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🚀 SKILLS CARD MARQUEE */}
        <div className="mt-24 space-y-8">
          <p className="text-sm text-muted-foreground text-center uppercase tracking-widest">
            Technologies I work with
          </p>

          {/* Row 1 → */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-marquee marquee-pause">
              {[...firstRow, ...firstRow].map((skill, i) => (
                <SkillCard key={i} name={skill} />
              ))}
            </div>
          </div>

          {/* Row 2 ← */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-marquee-reverse marquee-pause">
              {[...secondRow, ...secondRow].map((skill, i) => (
                <SkillCard key={i} name={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="w-6 h-6 animate-bounce text-muted-foreground" />
      </div>
    </section>
  );
};

/* Skill Card */
const SkillCard = ({ name }) => {
  return (
    <div
      className="
        min-w-[160px] h-[110px]
        glass rounded-xl
        flex items-center justify-center
        text-lg font-semibold text-primary
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