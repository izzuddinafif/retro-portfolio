import { useEffect, useState } from 'react'
import { Github, Mail, Linkedin, FileText, Book } from 'lucide-react'

export default function RetroPortfolio() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = (position / maxScroll) * 100
      setScrollPosition(scrollPercentage)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex justify-center min-h-screen w-full bg-transparent text-text font-mono">
      {/* Gradient background */}
      <div 
        className="fixed inset-0 pointer-events-none bg-gradient -z-10"
        style={{ 
          backgroundPosition: `${scrollPosition}% ${scrollPosition}%`
        }}
      ></div>

      <div className="relative z-10 w-full max-w-6xl px-4 py-8">
        {/* Existing content */}
        <div className="mb-8">
          {/* Pixelated overlay */}
          <div className="fixed inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAeSURBVHgBzc4xAQAACAIw+f/RBZgkbkDTdXd3x8oABHcCAbLFhywAAAAASUVORK5CYII=')] opacity-5 bg-blend-overlay bg-accent pointer-events-none"></div>

          <header className="text-center mb-12">
            <section className="bg-surface p-8 rounded-lg">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 mb-8 rounded-full overflow-hidden">
                  <img 
                    src="/me.jpeg" 
                    alt="Izzuddin Ahmad Afif" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="pixelated text-2xl mb-8">Izzuddin Ahmad Afif</h1>
                <p className="text-base mb-6">Internet Engineering Student & Cybersecurity Enthusiast</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://github.com/izzuddinafif"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accentLight transition-colors"
                  >
                    <Github className="w-8 h-8" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/izzuddin-ahmad-afif/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accentLight transition-colors"
                  >
                    <Linkedin className="w-8 h-8" />
                  </a>
                  <a
                    href="https://x.com/izzuddinaafif"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accentLight transition-colors"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/izzuddin.afif"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accentLight transition-colors"
                  >
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="mailto:izzuddin.afif@gmail.com"
                    className="hover:text-accentLight transition-colors"
                  >
                    <Mail className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </section>
          </header>

          <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="bg-surface p-8 rounded-lg">
              <h2 className="pixelated mb-4 text-center">ABOUT ME</h2>
              <p className="text-base leading-relaxed mb-6">
                Enthusiastic Internet Engineering Technology student with a strong passion for cybersecurity, AI, and blockchain. 
                Currently exploring the intersection of emerging technologies while developing practical solutions for real-world challenges.
              </p>
              <div className="text-center mt-6">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-surfaceHover hover:bg-accent/20 rounded-lg transition-colors"
                >
                  <span className="text-base mr-2">View Resume</span>
                  <FileText className="w-5 h-5" />
                </a>
              </div>
            </section>

            <section className="bg-surface p-8 rounded-lg">
              <h2 className="pixelated mb-4 text-center">SKILLS</h2>
              <ul className="grid grid-cols-1 gap-2 mb-6 text-base">
                <li className="mb-2">
                  <span className="font-bold">Programming:</span> Proficient in Go, Python, C and Bash Shell scripting
                </li>
                <li className="mb-2">
                  <span className="font-bold">Web Development:</span> React, Node.js, Laravel, and RESTful APIs
                </li>
                <li className="mb-2">
                  <span className="font-bold">DevOps & Cloud:</span> Docker, Kubernetes, AWS, and CI/CD pipelines
                </li>
                <li className="mb-2">
                  <span className="font-bold">Security:</span> Network security, penetration testing, and security auditing
                </li>
              </ul>
            </section>

            <section className="bg-surface p-8 rounded-lg md:col-span-2">
              <h2 className="pixelated mb-8 text-center">FEATURED WORKS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Publication */}
                <div className="bg-surfaceHover p-6 rounded-lg">
                  <span className="text-base bg-surface px-2 py-1 rounded mb-2 inline-block">Publication</span>
                  <h3 className="text-xl font-bold mb-2">Design of Corrugated Road Detection System</h3>
                  <p className="text-base mb-4">
                    Developed a system to detect and map corrugated road conditions using LoRa technology, GPS data, and webGIS. Achieved low transmission delay and high GPS accuracy to enhance road safety.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['LoRa', 'GPS', 'webGIS'].map((tech, index) => (
                      <span key={index} className="text-base bg-surface px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://ieeexplore.ieee.org/document/10073336"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accentLight transition-colors inline-flex items-center"
                  >
                    View Publication <Book className="w-4 h-4 ml-1" />
                  </a>
                </div>

                {/* BitTorrent Client */}
                <div className="bg-surfaceHover p-6 rounded-lg">
                  <span className="text-base bg-surface px-2 py-1 rounded mb-2 inline-block">Codecrafters</span>
                  <h3 className="text-xl font-bold mb-2">BitTorrent Client</h3>
                  <p className="text-base mb-4">
                    Built a BitTorrent client in Go as part of <a href="https://codecrafters.io/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accentLight transition-colors">Codecrafters</a> challenge, implementing core protocol features including bencoding parsing, 
                    peer discovery, and concurrent piece downloading.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Go', 'BitTorrent', 'Concurrency'].map((tech, index) => (
                      <span key={index} className="text-base bg-surface px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/izzuddinafif/gotorrent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accentLight transition-colors inline-flex items-center"
                  >
                    View Project <Github className="w-4 h-4 ml-1" />
                  </a>
                </div>

                {/* IoT Vulnerability Scanner */}
                <div className="bg-surfaceHover p-6 rounded-lg">
                  <span className="text-base bg-surface px-2 py-1 rounded mb-2 inline-block">Project</span>
                  <h3 className="text-xl font-bold mb-2">IoT Vulnerability Scanner</h3>
                  <p className="text-base mb-4">
                    Full-stack vulnerability scanner for IoT devices using Laravel, Go, and Python with Nmap integration.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Laravel', 'Go', 'Python', 'IoT', 'Security'].map((tech, index) => (
                      <span key={index} className="text-base bg-surface px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/izzuddinafif"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accentLight transition-colors inline-flex items-center"
                  >
                    View Project <Github className="w-4 h-4 ml-1" />
                  </a>
                </div>

                {/* Predictive Maintenance */}
                <div className="bg-surfaceHover p-6 rounded-lg">
                  <span className="text-base bg-surface px-2 py-1 rounded mb-2 inline-block">Project</span>
                  <h3 className="text-xl font-bold mb-2">Elevator Predictive Maintenance ML</h3>
                  <p className="text-base mb-4">
                    Machine learning model for predicting elevator maintenance needs using sensor data and Machine Learning algorithms.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Python', 'Machine Learning', 'Scikit-Learn'].map((tech, index) => (
                      <span key={index} className="text-base bg-surface px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/izzuddinafif"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accentLight transition-colors inline-flex items-center"
                  >
                    View Project <Github className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <a
                  href="/projects"
                  className="inline-flex items-center px-6 py-3 bg-surfaceHover hover:bg-accent/20 rounded-lg transition-colors"
                >
                  <span className="text-base mr-2">View All Projects</span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 7h16M4 12h16M4 17h10" />
                  </svg>
                </a>
              </div>
            </section>
          </main>

          <footer className="text-center mt-12 mb-8">
            <p>&copy; {new Date().getFullYear()} Izzuddin Ahmad Afif. All rights reserved.</p>
          </footer>
        </div>
      </div>

      <style>
        {`
          @font-face {
            font-family: 'Pixelated';
            src: url('data:font/woff2;charset=utf-8;base64,d09GMgABAAAAAAKAAoAAAAAAABkAAAAIwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABmAAeAQAAgwKgQiBXAE2AiQDCAsGAAQgBYRnBzAbnALIHpGULEdJNCeiWS7Zj4YdCgbsHfAEIhWJnL3Pl8cPvO+P3P3qCUUKbaOiUCsSbBpN0ggK4+qS1b9ZfgCeAM+Tp97t3gGODGpFUWuq0UhRUT1NNWrRiNGoV6PWWGvVQSNV1ahVjQYA') format('woff2');
            font-weight: normal;
            font-style: normal;
          }

          .pixelated {
            font-family: 'Pixelated', monospace;
            letter-spacing: 2px;
          }
        `}
      </style>
    </div>
  )
}
