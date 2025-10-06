import { Award, Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="mb-12 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a senior-year Computer Science undergraduate with hands-on experience in AI development, 
              automation testing, and full-stack application design. Skilled in Python and modern frameworks 
              such as FastAPI, Django, and Selenium.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionate about building efficient, data-driven systems that combine AI innovation and software 
              quality assurance to deliver scalable, user-focused solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                  <GraduationCap size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  SRM University of Science and Technology
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Computer Science · GPA: 9.14/10
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 text-secondary group-hover:scale-110 transition-transform">
                  <Briefcase size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Experience</h3>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">•</span>
                    <span>AI Intern at Galvanize Global Education</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Web Developer Intern at Hitachi</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 text-accent group-hover:scale-110 transition-transform">
                  <Award size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Recognition</h3>
                <p className="text-muted-foreground">
                  1st Place at Techknow 2022-23
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Multiple Global Certifications
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
