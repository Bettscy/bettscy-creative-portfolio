import { Code2, Database, Wrench, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "text-primary",
      skills: ["Python", "Java", "C", "C++", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Web Technologies & Frameworks",
      icon: Wrench,
      color: "text-secondary",
      skills: [
        "Django",
        "FastAPI",
        "RESTful APIs",
        "Selenium",
        "Postman",
        "PyTest",
      ],
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-accent",
      skills: ["MySQL", "MongoDB (NoSQL)", "SQLite"],
    },
    {
      title: "AI & Tools",
      icon: Brain,
      color: "text-primary",
      skills: [
        "Docker",
        "AWS",
        "Git",
        "Generative AI",
        "Quantum NLP",
        "Ollama",
        "OpenAI API",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in border-primary/20 bg-card shadow-md"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`${category.color} mb-2 group-hover:scale-110 transition-transform`}>
                  <category.icon size={32} />
                </div>
                <CardTitle className="text-lg text-card-foreground">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
