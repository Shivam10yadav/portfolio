import { Award, Star, Trophy, Medal } from "lucide-react";

const certificates = [
  {
    id: "01",
    title: "Fundamentals of Docker and Kubernetes",
    issuer: "Scaler",
    date: "2026",
    icon: Award,
    skills: ["Docker", "Kubernetes"],
    featured: true,
  },
  {
    id: "02",
    title: "AI and Machine Learning",
    issuer: "Samsung",
    date: "2026",
    icon: Trophy,
    skills: ["Python", "Machine Learning", "Numpy"],
    featured: false,
  },
  {
    id: "03",
    title: "JavaScript Advanced",
    issuer: "Udemy",
    date: "2023",
    icon: Star,
    skills: ["ES6+", "Async/Await", "APIs", "DOM"],
    featured: false,
  },
  {
    id: "04",
    title: "Full Stack Development",
    issuer: "Coursera",
    date: "2024",
    icon: Medal,
    skills: ["MERN", "Node.js", "MongoDB", "Express"],
    featured: false,
  },
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-secondary-foreground text-xs sm:text-sm font-medium tracking-wider uppercase animate-fadeIn">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 animate-fadeIn text-secondary-foreground">
            Certificates &{" "}
            <span className="font-serif italic font-normal text-white">
              recognitions.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground animate-fadeIn">
            Professional certifications and accomplishments that showcase my continuous learning and expertise in web development.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {certificates.map((cert, idx) => (
            <div
              key={cert.id}
              className="relative group animate-fadeIn"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              {/* Card Container - Fixed height for alignment */}
              <div className="relative h-full min-h-[340px] flex flex-col overflow-hidden rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-300">
                {/* Certificate Paper (slides up on hover) */}
                <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm p-5 sm:p-6 pb-6 sm:pb-8 transition-all duration-500 ease-out group-hover:-translate-y-8 flex-1 flex flex-col">
                  {/* Icon */}
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <cert.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                  </div>

                  {/* Certificate Label */}
                  <div className="text-center mb-3">
                    <span className="text-xs font-bold text-primary tracking-wider">
                      CERTIFICATE
                    </span>
                  </div>

                  {/* Certificate Details - flex-1 to push content evenly */}
                  <div className="text-center flex-1 flex flex-col justify-center">
                    <h3 className="text-base sm:text-lg font-bold mb-1 leading-tight px-2">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {cert.date}
                    </p>
                  </div>

                  {/* Featured Badge */}
                  {cert.featured && (
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                        Featured
                      </div>
                    </div>
                  )}
                </div>

                {/* Envelope Base (visible part) - Fixed at bottom */}
                <div className="glass px-4 sm:px-6 py-3 sm:py-4 mt-auto">
                  {/* View Certificate Text (shown by default) */}
                  <div className="text-center mb-3 group-hover:opacity-0 transition-opacity duration-300">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      View Certificate
                    </p>
                  </div>

                  {/* Skills (hidden by default, shown on hover) */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 -mt-3 min-h-[32px]">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center">
                      {cert.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="px-2 py-1 bg-surface text-xs rounded-full text-muted-foreground whitespace-nowrap"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;