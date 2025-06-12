import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Smart Home IoT Platform",
      description:
        "A comprehensive IoT platform for home automation with real-time sensor monitoring, device control, and machine learning-based energy optimization.",
      technologies: ["Python", "FastAPI", "MQTT", "ESP32", "TensorFlow", "PostgreSQL", "React"],
      category: "IoT",
      github: "https://github.com/username/smart-home-platform",
      demo: "https://demo.smarthome.com",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Predictive Maintenance API",
      description:
        "Machine learning-powered API that predicts equipment failures using sensor data and historical patterns, reducing downtime by 40%.",
      technologies: ["Python", "Django", "Scikit-learn", "Docker", "AWS", "PostgreSQL"],
      category: "Machine Learning",
      github: "https://github.com/username/predictive-maintenance",
      demo: null,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Industrial Sensor Network",
      description:
        "Scalable sensor network system for industrial monitoring with edge computing capabilities and real-time data processing.",
      technologies: ["C++", "Arduino", "LoRaWAN", "Node.js", "InfluxDB", "Grafana"],
      category: "IoT",
      github: "https://github.com/username/sensor-network",
      demo: "https://monitoring.industrial.com",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "ML Model Deployment Pipeline",
      description:
        "Automated CI/CD pipeline for machine learning model deployment with A/B testing, monitoring, and rollback capabilities.",
      technologies: ["Python", "MLflow", "Kubernetes", "Docker", "Jenkins", "Prometheus"],
      category: "Machine Learning",
      github: "https://github.com/username/ml-pipeline",
      demo: null,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Microservices E-commerce Backend",
      description:
        "Scalable e-commerce backend built with microservices architecture, handling 10k+ concurrent users with 99.9% uptime.",
      technologies: ["Node.js", "Express", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS"],
      category: "Backend",
      github: "https://github.com/username/ecommerce-backend",
      demo: null,
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Environmental Monitoring System",
      description:
        "Real-time environmental monitoring system with wireless sensors, data visualization, and automated alerting for critical conditions.",
      technologies: ["Python", "Raspberry Pi", "ESP8266", "MQTT", "InfluxDB", "Vue.js"],
      category: "IoT",
      github: "https://github.com/username/env-monitoring",
      demo: "https://env-monitor.demo.com",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const categories = ["All", "Backend", "IoT", "Machine Learning"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my work in backend development, IoT systems, and machine learning applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={
                category === "All"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                  : "border-slate-600 text-slate-300 hover:bg-slate-800"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">{project.category}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl text-white mb-3">{project.title}</CardTitle>
                <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800"
                  >
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  {project.demo && (
                    <Button
                      asChild
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                    >
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
