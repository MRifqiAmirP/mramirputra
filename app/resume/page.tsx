import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react"

export default function ResumePage() {
  const experience = [
    {
      title: "Senior Backend Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: [
        "Led development of microservices architecture serving 100k+ daily active users",
        "Implemented ML-powered recommendation system increasing user engagement by 35%",
        "Mentored junior developers and established code review best practices",
      ],
    },
    {
      title: "IoT Systems Engineer",
      company: "SmartDevices Inc",
      period: "2020 - 2022",
      description: [
        "Designed and deployed industrial IoT monitoring systems for 50+ manufacturing clients",
        "Developed edge computing solutions reducing data transmission costs by 60%",
        "Created real-time analytics dashboard for predictive maintenance",
      ],
    },
    {
      title: "Backend Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: [
        "Built scalable REST APIs using Python Django and PostgreSQL",
        "Implemented automated testing and CI/CD pipelines",
        "Optimized database queries improving application performance by 40%",
      ],
    },
  ]

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Tech University",
      period: "2017 - 2019",
      details: "Specialization in Machine Learning and Distributed Systems",
    },
    {
      degree: "Bachelor of Engineering in Electrical Engineering",
      school: "Engineering College",
      period: "2013 - 2017",
      details: "Focus on Embedded Systems and Digital Signal Processing",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Resume</span>
          </h1>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 mb-8">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">Muhammad Rifqi Amir Putra</h2>
                <p className="text-xl text-cyan-400 mb-4">Backend Developer & ML Engineer</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-slate-300">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                  john.doe@email.com
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                  San Francisco, CA
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-3 text-cyan-400" />
                  johndoe.dev
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-4 h-4 mr-3 text-cyan-400" />
                  linkedin.com/in/johndoe
                </div>
                <div className="flex items-center">
                  <Github className="w-4 h-4 mr-3 text-cyan-400" />
                  github.com/johndoe
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Professional Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 leading-relaxed">
                Experienced Backend Developer with 5+ years of expertise in building scalable systems, IoT solutions,
                and machine learning applications. Proven track record of delivering high-performance applications
                serving thousands of users while maintaining 99.9% uptime. Passionate about emerging technologies and
                their practical applications in solving real-world problems.
              </p>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Professional Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="border-l-2 border-cyan-500 pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                    <span className="text-cyan-400 font-medium">{job.period}</span>
                  </div>
                  <p className="text-slate-400 mb-3">{job.company}</p>
                  <ul className="space-y-2">
                    {job.description.map((item, idx) => (
                      <li key={idx} className="text-slate-300 flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-cyan-500 pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <span className="text-cyan-400 font-medium">{edu.period}</span>
                  </div>
                  <p className="text-slate-400 mb-2">{edu.school}</p>
                  <p className="text-slate-300">{edu.details}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
