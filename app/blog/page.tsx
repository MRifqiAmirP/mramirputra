import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const posts = [
    {
      title: "Building Scalable IoT Architectures with MQTT and Edge Computing",
      excerpt:
        "Learn how to design robust IoT systems that can handle thousands of devices while maintaining low latency and high reliability.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["IoT", "MQTT", "Edge Computing", "Architecture"],
      slug: "scalable-iot-architectures",
    },
    {
      title: "Machine Learning Model Deployment: From Jupyter to Production",
      excerpt:
        "A comprehensive guide to deploying ML models in production environments with proper monitoring and versioning.",
      date: "2024-01-08",
      readTime: "12 min read",
      tags: ["Machine Learning", "MLOps", "Python", "Docker"],
      slug: "ml-model-deployment",
    },
    {
      title: "Microservices Communication Patterns: Beyond REST APIs",
      excerpt:
        "Exploring event-driven architectures, message queues, and gRPC for building resilient distributed systems.",
      date: "2024-01-01",
      readTime: "10 min read",
      tags: ["Microservices", "Architecture", "gRPC", "Event-Driven"],
      slug: "microservices-communication",
    },
    {
      title: "ESP32 Deep Sleep Optimization for Battery-Powered IoT Devices",
      excerpt:
        "Techniques to extend battery life in IoT devices using ESP32's deep sleep modes and power management features.",
      date: "2023-12-20",
      readTime: "6 min read",
      tags: ["ESP32", "IoT", "Power Management", "Embedded"],
      slug: "esp32-deep-sleep",
    },
    {
      title: "Real-time Data Processing with Apache Kafka and Python",
      excerpt:
        "Building high-throughput data pipelines for IoT sensor data using Kafka, Python, and stream processing.",
      date: "2023-12-15",
      readTime: "15 min read",
      tags: ["Kafka", "Python", "Data Processing", "Streaming"],
      slug: "kafka-python-streaming",
    },
    {
      title: "Securing IoT Communications: TLS, Certificates, and Best Practices",
      excerpt:
        "Essential security measures for IoT devices including certificate management, secure communication protocols, and threat mitigation.",
      date: "2023-12-08",
      readTime: "11 min read",
      tags: ["Security", "IoT", "TLS", "Certificates"],
      slug: "iot-security-best-practices",
    },
  ]

  const categories = ["All", "IoT", "Machine Learning", "Backend", "Security"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Tech <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Insights, tutorials, and thoughts on backend development, IoT systems, and machine learning.
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

        {/* Blog Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 mb-4 leading-relaxed">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button asChild variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 p-0">
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Subscribe to get notified about new articles on backend development, IoT, and machine learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500"
                />
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
