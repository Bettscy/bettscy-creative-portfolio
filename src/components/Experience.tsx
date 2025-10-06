import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "Galvanize Global Education",
      role: "AI Intern",
      period: "Jun 2025 – Present",
      location: "Chennai, India",
      achievements: [
        "Developed AI-driven learning tools and dashboards, increasing student engagement by 25%",
        "Streamlined performance tracking for 500+ learners",
        "Collaborated on test automation scripts for AI model validation using Python and PyTest",
      ],
    },
    {
      company: "Hitachi Payment Services Pvt. Ltd.",
      role: "Web Developer Intern",
      period: "Dec 2024 - Jan 2025",
      location: "Chennai, India",
      achievements: [
        "Engineered and maintained web applications ensuring seamless functionality and intuitive UX",
        "Implemented backend solutions in SQL, Python, and C# for .NET",
        "Improved application efficiency and database management",
      ],
    },
  ];

  const certifications = [
    {
      name: "NVIDIA Deep Learning",
      year: "2022 – 2027",
    },
    {
      name: "Oracle Certified Foundations Associate",
      year: "2024 – 2025",
    },
    {
      name: "Fortinet Certified Associate Cybersecurity",
      year: "2025 – 2027",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Experience & Certifications
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h4>
                        <p className="text-lg font-semibold text-muted-foreground">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-1 mt-2 md:mt-0">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Global Certifications</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 border-border bg-card animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="text-primary mb-2">
                      <Briefcase size={24} />
                    </div>
                    <h4 className="font-bold text-foreground mb-1">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
