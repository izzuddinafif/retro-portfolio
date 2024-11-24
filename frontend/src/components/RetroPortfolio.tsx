import { useEffect, useState } from 'react'
import { Github, Mail, Linkedin, FileText, Book } from 'lucide-react'

export default function RetroPortfolio() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercentage = (position / maxScroll) * 100
      setScrollPosition(scrollPercentage)
      setShowScrollTop(position > 400)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-transparent text-text font-mono">
      {/* Gradient background */}
      <div 
        className="fixed inset-0 pointer-events-none bg-gradient -z-10"
        style={{ 
          backgroundPosition: `${scrollPosition}% ${scrollPosition}%`
        }}
      ></div>

      <div className="w-full max-w-4xl px-4 py-8">
        <header className="text-center mb-12">
          <section className="bg-surface p-4 sm:p-8 rounded-lg">
            <div className="flex flex-col items-center">
              <div className="w-32 sm:w-48 h-32 sm:h-48 mb-4 sm:mb-8 rounded-full overflow-hidden transform transition-transform hover:scale-105">
                <img 
                  src="/me.jpeg" 
                  alt="Izzuddin Ahmad Afif" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h1 className="pixelated text-2xl mb-8 tracking-[-50em] text-accent">Izzuddin Ahmad Afif</h1>
              <p className="text-sm sm:text-base mb-4 sm:mb-6 text-textLight ">Internet Engineering Student & Cybersecurity Enthusiast</p>
              <div className="flex justify-center space-x-3 sm:space-x-4">
                <a
                  href="https://github.com/izzuddinafif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all hover:scale-110 hover:text-accentLight"
                >
                  <Github className="w-8 h-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/izzuddin-ahmad-afif-6b5784244/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all hover:scale-110 hover:text-accentLight"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/izzuddinaafif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all hover:scale-110 hover:text-accentLight"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/izzuddin.afif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all hover:scale-110 hover:text-accentLight"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="mailto:izzuddin.afif@gmail.com"
                  className="transform transition-all hover:scale-110 hover:text-accentLight"
                >
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>
          </section>
        </header>

        <main className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-surface p-8 rounded-lg mb-12">
              <h2 className="pixelated text-lg sm:text-xl mb-8 text-center">ABOUT ME</h2>
              <div className="text-left">
                <p className="text-sm sm:text-base leading-relaxed mb-6">
                  Enthusiastic Internet Engineering Technology student with a strong passion for cybersecurity, AI, and blockchain. Currently exploring the intersection of these technologies to create innovative solutions.
                </p>
                
              </div>
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

            <section className="bg-surface p-8 rounded-lg mb-12">
              <h2 className="pixelated text-lg sm:text-xl mb-8 text-center">SKILLS</h2>
              <div className="text-left">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-accent mb-2">Languages</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Go</li>
                      <li>Python</li>
                      <li>C</li>
                      <li>Bash Script</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-accent mb-2">Technologies</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Hyperledger Fabric</li>
                      <li>Laravel</li>
                      <li>Docker</li>
                      <li>Linux</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="bg-surface p-8 rounded-lg mt-2">
            <h2 className="pixelated text-lg sm:text-xl mb-8 text-center">FEATURED WORKS</h2>
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
                  href="https://github.com/izzuddinafif/bittorrent-go"
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

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 bg-surface hover:bg-surfaceHover p-3 rounded-full transition-all transform ${
            showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

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
