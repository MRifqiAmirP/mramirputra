import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Code, Database, Zap } from "lucide-react"
import { TypingAnimation } from "@/components/typing-animation"

export default function AboutPage() {
  const skills = {
    "Backend Development": ["Python", "Node.js", "Django", "FastAPI", "PostgreSQL", "MongoDB", "Redis", "Docker"],
    "Machine Learning": ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "Jupyter"],
    "IoT & Hardware": ["Arduino", "ESP32", "Raspberry Pi", "MQTT", "I2C/SPI", "Sensors", "Actuators"],
    "Cloud & DevOps": ["AWS", "Google Cloud", "Kubernetes", "CI/CD", "Linux", "Git", "Monitoring"],
  }

  const certifications = [
    "BNSP Database Programming",
    // "Google Cloud Professional ML Engineer",
    // "Certified IoT Professional",
    // "Python Institute PCAP",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About{" "}
            <TypingAnimation
              text="Me"
              typingSpeed={150}
              className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            />
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Passionate backend developer with 1+ years of experience building scalable systems, intelligent
            applications, and innovative IoT solutions.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Code className="w-6 h-6 mr-3 text-cyan-400" />
                My Journey
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-4 leading-relaxed">
              <p>
                My journey into technology began with a fascination for how things work under the hood. Starting with
                electrical engineering fundamentals, I discovered the power of programming to bring hardware to life and
                solve real-world problems.
              </p>
              <p>
                Over the years, I've specialized in building robust backend systems that power modern applications,
                while maintaining a strong focus on IoT integration and machine learning capabilities. I believe in the
                convergence of physical and digital systems to create intelligent, responsive solutions.
              </p>
              <p>
                When I'm not coding, you'll find me experimenting with new microcontrollers, contributing to open-source
                projects, or writing about the latest developments in backend architecture and IoT ecosystems.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white flex items-center">
                    {category === "Backend Development" && <Database className="w-5 h-5 mr-3 text-cyan-400" />}
                    {category === "Machine Learning" && <Zap className="w-5 h-5 mr-3 text-cyan-400" />}
                    {category === "IoT & Hardware" && <Code className="w-5 h-5 mr-3 text-cyan-400" />}
                    {category === "Cloud & DevOps" && <Award className="w-5 h-5 mr-3 text-cyan-400" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-slate-700 text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
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

        {/* Certifications */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Certifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <Card
                key={cert}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-cyan-500/50 transition-colors"
              >
                <CardContent className="p-6 text-center">
                  <Award className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <p className="text-slate-300 font-medium">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
