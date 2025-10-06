import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Emotional AI for Interactive Storytelling",
      description: "Designed an Emotional AI model via Ollama API, boosting user engagement by 40% through emotion-driven narratives. Analyzed 60+ user interactions to refine emotional responses.",
      technologies: ["Machine Learning", "Ollama API", "SQLite", "Python"],
      impact: "40% engagement increase",
    },
    {
      title: "Gen AI-based Recipe Website",
      description: "Built a recipe-sharing platform that converts user-provided ingredients into AI-generated cooking videos, reducing search time by 70%. Scaled to handle 500+ daily requests.",
      technologies: ["Python", "FastAPI", "Brave API", "Generative AI"],
      impact: "70% time reduction",
    },
    {
      title: "Pharmacy Management System",
      description: "Created and deployed an inventory and sales management tool, reducing tracking time by 60% and achieving 99% record accuracy with 10,000+ medicine records.",
      technologies: ["Python", "SQL", "JavaScript", "Database Management"],
      impact: "99% accuracy",
    },
    {
      title: "Sentiment Analysis using QNLP",
      description: "Developed a QNLP-based sentiment analysis model leveraging quantum circuits and tensor networks, improving classification accuracy by 18% over classical models.",
      technologies: ["Python", "PennyLane", "NumPy", "Quantum NLP"],
      impact: "18% accuracy improvement",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                    {project.impact}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs border-primary/30">
                      {tech}
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

export default Projects;
