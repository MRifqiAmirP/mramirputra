import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Cpu, Zap } from "lucide-react"
import { TypingAnimation } from "@/components/typing-animation"
import { CyclingText } from "@/components/cycling-text"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
                  <Zap className="w-4 h-4 mr-2" />
                  Backend Developer & ML Engineer
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  <TypingAnimation text="Muhammad Rifqi Amir Putra" typingSpeed={80} className="block mb-2" />
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Building the Future with Code
                  </span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Crafting intelligent{" "}
                  <CyclingText
                    texts={["backend systems", "IoT solutions", "ML applications", "embedded systems"]}
                    typingSpeed={80}
                    deletingSpeed={40}
                    delayBetween={2000}
                    className="text-cyan-400 font-semibold"
                  />{" "}
                  that bridge the physical and digital worlds.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                >
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-500/30 bg-slate-800">
                  <Image
                    src="/placeholder.svg?height=320&width=320"
                    alt="Professional headshot"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Expertise Areas</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Specialized in cutting-edge technologies that power modern digital infrastructure
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Backend Development</h3>
              <p className="text-slate-400 leading-relaxed">
                Scalable APIs, microservices architecture, and robust server-side applications using modern frameworks
                and cloud technologies.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">IoT & Microcontrollers</h3>
              <p className="text-slate-400 leading-relaxed">
                Embedded systems programming, sensor integration, and IoT device communication with expertise in
                Arduino, ESP32, and Raspberry Pi.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Machine Learning</h3>
              <p className="text-slate-400 leading-relaxed">
                Intelligent algorithms, data analysis, and ML model deployment for predictive analytics and automation
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-slate-400 text-lg mb-8">
              Let's collaborate on your next project and bring innovative ideas to life through technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
              >
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                <Link href="/resume">View My Resume</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
