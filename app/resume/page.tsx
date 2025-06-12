import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Github,
} from "lucide-react";

export default function ResumePage() {
  const experience = [
    {
      title: "Backend Developer",
      company: "ATR/BPN Ogan Komering Ilir",
      period: "January 2025 - Present",
      description: [
        "Designing the database schema using MySQL and Prisma ORM",
        "Developing a RESTful API with Node.js and Express.js",
        "Implementing secure user authentication",
        "Architecting a scalable and well-structured backend logic",
        "Configuring the local server for on-premise deployment",
        "Setting up Cloudflare Tunnel to make the local server accessible online",
        "Integrating ESP32-based indicator lights programmed via Arduino IDE to assist operators in locating physical documents in the storage racks",
      ],
    },
    {
      title: "Operasional Informasi dan Teknologi",
      company: "PT. Bukit Asam Tbk",
      period: "July 2024 - October 2024",
      description: [
        "Designing and developing an internal web application for virtual server requests using PHP (Laravel) and MySQL",
        "Gained hands-on experience with VMWare virtualization, enterprise server infrastructure, and VPN setup, which was essential for secure access to PTBA's internal network",
        "Successfully built a system to manage requests for virtual server provisioning, helping digitize and simplify the approval processe",
      ],
    },
    {
      title: "Programmer",
      company: "Allbright Project",
      period: "Juni 2024 - May 2025",
      description: [
        "Programming embedded system ESP32-based microcontrollers",
        "Designing and implementing electronic circuit wiring",
        "Building functional and reliable embedded systems ready for field deployment",
      ],
    },
  ];

  const education = [
    {
      degree: "Associate Degree in Computer Engineering",
      school: "Politeknik Negeri Sriwijaya",
      period: "2022 - Present",
      details: "",
    },
    {
      degree: "Mathematics and Natural Sciences",
      school: "SMA Negeri 1 Gelumbang",
      period: "2019 - 2022",
      details: "",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Resume
            </span>
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
                <h2 className="text-3xl font-bold text-white mb-2">
                  Muhammad Rifqi Amir Putra
                </h2>
                <p className="text-xl text-cyan-400 mb-4">
                  Backend Developer & ML Engineer
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-slate-300">
                <div className="flex flex-col items-start">
                  {" "}
                  {/* flex-col untuk tata letak kolom, items-start untuk rata kiri */}
                  <div className="flex items-center mb-1">
                    {" "}
                    {/* Membungkus ikon dan sedikit margin bawah */}
                    <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                    <span className="sr-only">Email:</span>{" "}
                    {/* Untuk aksesibilitas */}
                  </div>
                  <span className="break-all text-base lg:text-[15px]">
                    muhammadrifqiamirp20@gmail.com
                  </span>{" "}
                  {/* break-all untuk memutus kata yang sangat panjang */}
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center mb-1">
                    <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                    <span className="sr-only">Phone:</span>
                  </div>
                  <span>+62 853 6683 0291</span>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center mb-1">
                    <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                    <span className="sr-only">Location:</span>
                  </div>
                  <span>Palembang, South Sumatra, Indonesia</span>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center mb-1">
                    <Globe className="w-4 h-4 mr-3 text-cyan-400" />
                    <span className="sr-only">Website:</span>
                  </div>
                  <a
                    href="https://mrifqiamirp.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all hover:underline text-cyan-200"
                  >
                    https://mrifqiamirp.vercel.app/
                  </a>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center mb-1">
                    <Linkedin className="w-4 h-4 mr-3 text-cyan-400" />
                    <span className="sr-only">LinkedIn:</span>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/mrifqiamirp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all hover:underline text-cyan-200"
                  >
                    https://www.linkedin.com/in/mrifqiamirp/
                  </a>
                </div>
                <div className="flex flex-col items-start">
                  <div className="flex items-center mb-1">
                    <Github className="w-4 h-4 mr-3 text-cyan-400" />
                    <span className="sr-only">GitHub:</span>
                  </div>
                  <a
                    href="https://github.com/MRifqiAmirP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all hover:underline text-cyan-200"
                  >
                    https://github.com/MRifqiAmirP
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Summary */}
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-300 leading-relaxed text-justify">
                I am Muhammad Rifqi Amir Putra, a final-year Computer
                Engineering student at Politeknik Negeri Sriwijaya with a strong
                interest in the fields of Internet of Things (IoT), Backend
                Developer, Robotics, Microcontrollers, and Machine Learning.
                
                Throughout my academic journey, I have gained hands-on
                experience in various technologies such as Python, TensorFlow,
                Node.js, Express.js, Laravel, and PHP. I had the opportunity to
                work on impactful projects, including developing an autonomous
                robot for the Indonesian Robot Contest (KRI – KRAI division) and
                building a backend API system for inventory document management
                at ATRBPN Ogan Komering Ilir. 
                
                I have completed an internship at PT Bukit Asam as IT Operation and worked as a freelance
                Programming and Wiring Project IoT and Automation at Allbright
                Project. In addition, I actively participate in the Automation
                and Robotic Club of Sriwijaya, which has further enhanced my
                leadership and technical skills. 
                
                I am currently seeking full-time opportunities where I can contribute, learn, and grow,
                particularly in roles involving embedded systems, IoT, or
                backend development.
              </p>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-white">
                Professional Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="border-l-2 border-cyan-500 pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {job.title}
                    </h3>
                    <span className="text-cyan-400 font-medium">
                      {job.period}
                    </span>
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
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <span className="text-cyan-400 font-medium">
                      {edu.period}
                    </span>
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
  );
}
