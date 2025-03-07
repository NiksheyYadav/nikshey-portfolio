import NeonIsometricMaze from "../neon-isometric-maze"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black/30 text-white">
      {/* Background animation */}
      <NeonIsometricMaze />

      {/* Content overlay */}
      <div className="relative z-10">
        {/* Header/Navigation */}
        <header className="container mx-auto p-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
              Nikshey Yadav
            </span>
          </div>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[80vh] text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-500">
              Nikshey Yadav
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8">AI Developer & Tools Specialist</h2>
          <p className="max-w-2xl text-lg mb-10 text-gray-300">
            I build innovative AI solutions and tools that solve real-world problems. Specializing in machine learning,
            natural language processing, and AI integration for modern applications.
          </p>
          <div className="flex gap-4">
            <Button className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-600 hover:to-fuchsia-600">
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-950">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 backdrop-blur-sm bg-black/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
                My Projects
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg overflow-hidden border border-cyan-900/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="h-48 bg-gradient-to-br from-cyan-900/50 to-fuchsia-900/50 flex items-center justify-center">
                  <div className="text-5xl text-cyan-300 opacity-50">🌪️</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Disaster Predictor</h3>
                  <p className="text-gray-400 mb-4">
                    An advanced system that predicts natural disasters using machine learning algorithms and data
                    analysis.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-cyan-900/50 text-cyan-300">Python</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-fuchsia-900/50 text-fuchsia-300">
                      JavaScript
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-900/50 text-yellow-300">
                      ML Libraries
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg overflow-hidden border border-cyan-900/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="h-48 bg-gradient-to-br from-cyan-900/50 to-fuchsia-900/50 flex items-center justify-center">
                  <div className="text-5xl text-cyan-300 opacity-50">🩺</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">AI Diagnosis</h3>
                  <p className="text-gray-400 mb-4">
                    A sophisticated diagnostic tool capable of detecting multiple diseases using AI and machine learning
                    algorithms.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-cyan-900/50 text-cyan-300">Python</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-fuchsia-900/50 text-fuchsia-300">
                      TensorFlow
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-900/50 text-yellow-300">
                      scikit-learn
                    </span>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-gray-900/70 backdrop-blur-sm rounded-lg overflow-hidden border border-cyan-900/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/20">
                <div className="h-48 bg-gradient-to-br from-cyan-900/50 to-fuchsia-900/50 flex items-center justify-center">
                  <div className="text-5xl text-cyan-300 opacity-50">🤖</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Personal Jarvis Assistant</h3>
                  <p className="text-gray-400 mb-4">
                    A high-level voice assistant with two versions: one using OpenAI API and another using Python
                    libraries for natural language processing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs rounded-full bg-cyan-900/50 text-cyan-300">Python</span>
                    <span className="px-2 py-1 text-xs rounded-full bg-fuchsia-900/50 text-fuchsia-300">
                      OpenAI API
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-yellow-900/50 text-yellow-300">NLP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
                Get In Touch
              </span>
            </h2>

            <div className="flex justify-center gap-6 mb-10">
              <a
                href="https://www.github.com/NiksheyYadav"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Github className="h-6 w-6 text-cyan-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/nikshey-yadav-51143224a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-cyan-400" />
              </a>
              <a
                href="mailto:relativity1905e@gmail.com"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Mail className="h-6 w-6 text-cyan-400" />
              </a>
            </div>

            <p className="text-gray-400 mb-4">Feel free to reach out for collaborations or just a friendly hello!</p>
            <p className="text-cyan-400">relativity1905e@gmail.com</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 backdrop-blur-sm bg-black/50">
          <div className="container mx-auto px-4 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Nikshey Yadav. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

