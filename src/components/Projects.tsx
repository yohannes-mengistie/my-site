import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
{
  title: "Prompt-Share",
  description: "Designed and implemented a web-based prompt sharing platform enabling users to publish, browse, and manage AI prompts. Focused on clean UI/UX, scalable architecture, and efficient content management.",
  image: "/uploads/prompt.png",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
  liveUrl: "https://share-prompt-two-zeta.vercel.app",
  githubUrl: "https://github.com/yohannes-mengistie/share-prompt",
},
  {
    title: "Employee Management App",
    description: "A collaborative employee management application with real-time updates and team features.",
    image: "/uploads/employee.jpg",
    technologies: ["Flutter","restApi", "firebase", "Dart"],
    liveUrl: "#",
    githubUrl: "https://github.com/yohannes-mengistie/2024-project-phase-mobile-tasks",
  },
  {
    title: "Sun Farms",
    description: "A responsive Ethiopian farm products listing website",
    image: "/uploads/sun-farms.png",
    technologies: ["wordpress", "Chart.js", "Elementor", "CSS Grid"],
    liveUrl: "https://yohannes.zergaw.et/",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills.",
    image: "/uploads/portfolio.png",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveUrl: "#",
    githubUrl: "https://github.com/yohannes-mengistie/my-site",
  },
{
  title: "ERP System",
  description: "Designed and implemented a modular ERP system using the Laravel framework, featuring authentication, role-based authorization, CRUD operations, and database-driven business workflows. Focused on clean architecture, security, and performance optimization.",
  image: "/uploads/erp.jpg",
  technologies: ["react.js", "Tailwind CSS", "Framer Motion", "PHP" , "LARAVEL"],
  liveUrl: "#",
  githubUrl: "https://github.com/yohannes-mengistie/erp-system",
},
{
  title: "LiveFlow",
  description: "Built a chat platform that connects users through random matchmaking, allowing instant conversations with new people. The project emphasizes real-time communication, efficient user pairing, and scalable system design.",
  image: "/uploads/liveflow.jpg",
  technologies: ["react.js", "Tailwind CSS", "Framer Motion", "PHP" , "LARAVEL"],
  liveUrl: "#",
  githubUrl: "https://github.com/yohannes-mengistie/LiveFlow",
},
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card border-border">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader>
                <CardTitle className="text-card-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
