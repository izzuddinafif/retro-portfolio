import { useState, useEffect } from 'react'
import { Github, Mail, FileText, Book } from 'lucide-react'

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

  const projects = [
    {
      title: 'Design of Corrugated Road Detection System',
      description: 'Developed a system to detect and map corrugated road conditions using LoRa technology, GPS data, and webGIS. Achieved low transmission delay and high GPS accuracy to enhance road safety.',
      types: ['Publication'],
      technologies: ['LoRa', 'GPS', 'webGIS'],
      link: 'https://doi.org/10.1109/IES55876.2022.9888636',
      icon: <Book className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />,
    },
    {
      title: 'BitTorrent Client',
      description: 'Built a BitTorrent client from scratch in Go as part of <a href="https://codecrafters.io/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accentLight transition-colors">Codecrafters</a> challenge, implementing the core BitTorrent protocol. Features include peer wire protocol, piece management, and concurrent downloads.',
      types: ['Codecrafters', 'Project'],
      technologies: ['Go', 'BitTorrent', 'Networking'],
      link: 'https://github.com/izzuddinafif',
      icon: <Github className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />,
    },
    {
      title: 'IoT Vulnerability Scanner',
      description: 'Full-stack vulnerability scanner for IoT devices using Laravel, Go, and Python with Nmap integration.',
      types: ['Project'],
      technologies: ['Laravel', 'Go', 'Python', 'IoT', 'Security'],
      link: 'https://github.com/izzuddinafif',
      icon: <Github className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />,
    },
    {
      title: 'Elevator Predictive Maintenance ML',
      description: 'Machine learning model for predicting elevator maintenance needs using sensor data and Machine Learning algorithms.',
      types: ['Project'],
      technologies: ['Python', 'Machine Learning', 'Scikit-Learn'],
      link: 'https://github.com/izzuddinafif',
      icon: <Github className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />,
    },
  ]

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-transparent text-text font-mono">
      {/* Gradient background */}
      <div 
        className="fixed inset-0 pointer-events-none bg-gradient -z-10"
        style={{ 
          backgroundPosition: `${scrollPosition}% ${scrollPosition}%`
        }}
      ></div>

      <div className="w-full max-w-6xl px-4 py-8">
        <header className="text-center mb-12">
          <section className="bg-surface p-4 sm:p-8 rounded-lg">
            <div className="flex flex-col items-center">
              <div className="w-24 sm:w-32 md:w-48 h-24 sm:h-32 md:h-48 mb-4 sm:mb-6 md:mb-8 rounded-full overflow-hidden transform transition-transform hover:scale-105">
                <img 
                  src="/me.jpeg" 
                  alt="Izzuddin Ahmad Afif" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h1 className="pixelated text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 md:mb-8 tracking-normal sm:tracking-[-50em] text-accent">Izzuddin Ahmad Afif</h1>
              <p className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6 text-textLight">Internet Engineering Student & Cybersecurity Enthusiast</p>
              <div className="flex justify-center space-x-2 sm:space-x-3 md:space-x-4">
                <a
                  href="https://github.com/izzuddinafif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all hover:scale-110 hover:text-accentLight"
                >
                  <Github className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />
                </a>
                <a
                  href="https://www.linkedin.com/in/izzuddinafif/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all hover:scale-110 hover:text-accentLight"
                >
                  <svg className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/izzuddinaafif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all hover:scale-110 hover:text-accentLight"
                >
                  <svg className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/izzuddin.afif"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all hover:scale-110 hover:text-accentLight"
                >
                  <svg className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="mailto:izzuddinafif@gmail.com"
                  className="transform transition-all hover:scale-110 hover:text-accentLight"
                >
                  <Mail className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />
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
                  className="inline-flex items-center px-6 py-3 bg-surfaceHover hover:bg-accent/20 rounded-lg transition-colors hover-pop"
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
              {projects.map((project, index) => (
                <div key={index} className="bg-surfaceHover p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.types.map((type, index) => (
                      <span key={index} className="text-base bg-surface px-2 py-1 rounded inline-block">
                        {type}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-base bg-surface px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accentLight transition-all duration-300 inline-flex items-center group"
                  >
                    View {project.title} {project.icon}
                  </a>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-surfaceHover hover:bg-accent/20 rounded-lg transition-colors hover-pop"
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
