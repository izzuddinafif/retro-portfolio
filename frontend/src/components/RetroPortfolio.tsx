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
      document.documentElement.style.setProperty('--scroll-position', `${scrollPercentage}%`)
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
        style={{ backgroundPosition: `0 ${scrollPosition}%` }}
      ></div>

      <div className="relative z-10 w-full max-w-6xl px-4 py-8">
        {/* Existing content */}
        <div className="mb-8">
          {/* Pixelated overlay */}
          <div className="fixed inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAeSURBVHgBzc4xAQAACAIw+f/RBZgkbkDTdXd3x8oABHcCAbLFhywAAAAASUVORK5CYII=')] opacity-5 bg-blend-overlay bg-accent pointer-events-none"></div>

          <header className="text-center mb-12">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
              <img 
                src="/me.jpg" 
                alt="Izzuddin Ahmad Afif" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-6xl font-bold mb-4 pixelated">Izzuddin Ahmad Afif</h1>
            <p className="text-xl">Internet Engineering Technology Student & Cybersecurity Enthusiast</p>
          </header>

          <nav className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, label: 'GitHub', url: 'https://github.com/izzuddinafif' },
              { icon: Mail, label: 'Email', url: 'mailto:izzuddinafif@gmail.com' },
              { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/izzuddinafif/' },
              { icon: FileText, label: 'Resume', url: '/resume.pdf' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-4 bg-surface rounded-lg hover:bg-surfaceHover transition-colors"
              >
                <item.icon className="w-8 h-8 mb-2" />
                <span className="text-sm">{item.label}</span>
              </a>
            ))}
          </nav>

          <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="bg-surface p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 pixelated text-center">ABOUT ME</h2>
              <p className="leading-relaxed mb-6">
                Enthusiastic Internet Engineering Technology student with a strong passion for cybersecurity, AI, and blockchain. 
                Known for a proactive learning approach, strong problem-solving abilities, and effective collaboration. 
                Experienced in collaborating on security-focused projects, and developing innovative solutions using modern 
                programming languages and tools.
              </p>
            </section>

            <section className="bg-surface p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 pixelated text-center">SKILLS</h2>
              <ul className="grid grid-cols-1 gap-2 mb-6">
                <li className="mb-2">
                  <strong>Programming:</strong> Proficient in Go, Python, C and Bash Shell scripting
                </li>
                <li className="mb-2">
                  <strong>Technologies:</strong> Hyperledger Fabric, Docker, Kubernetes, Linux
                </li>
                <li className="mb-2">
                  <strong>Cybersecurity:</strong> Reverse Engineering, Forensics, Penetration Testing
                </li>
                <li>
                  <strong>Soft Skills:</strong> Problem solving, critical and creative thinking, teamwork
                </li>
              </ul>
            </section>

            <section className="bg-surface p-8 rounded-lg md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 pixelated text-center">FEATURED WORK</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Publication */}
                <div className="bg-surfaceHover p-6 rounded-lg">
                  <span className="text-xs bg-surface px-2 py-1 rounded mb-2 inline-block">Publication</span>
                  <h3 className="text-lg font-bold mb-2">Design of Corrugated Road Detection System</h3>
                  <p className="text-sm mb-4">
                  Developed a system to detect and map corrugated road conditions using LoRa technology, GPS data, and webGIS. Achieved low transmission delay and high GPS accuracy to enhance road safety.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['LoRa', 'GPS', 'webGIS'].map((tech, index) => (
                      <span key={index} className="text-xs bg-surface px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://doi.org/10.1109/IES55876.2022.9888636"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-text text-sm inline-flex items-center"
                  >
                    View Publication <Book className="w-4 h-4 ml-1" />
                  </a>
                </div>

                {/* BitTorrent Client */}
                <div className="bg-surfaceHover p-6 rounded-lg">
                  <span className="text-xs bg-surface px-2 py-1 rounded mb-2 inline-block">Project</span>
                  <h3 className="text-lg font-bold mb-2">BitTorrent Client</h3>
                  <p className="text-sm mb-4">
                    Built a BitTorrent client in Go implementing core protocol features including bencoding parsing, 
                    peer discovery, and concurrent piece downloading.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Go', 'BitTorrent', 'Concurrency'].map((tech, index) => (
                      <span key={index} className="text-xs bg-surface px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/izzuddinafif/codecrafters-bittorrent-go"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-text text-sm inline-flex items-center"
                  >
                    View Project <Github className="w-4 h-4 ml-1" />
                  </a>
                </div>

                {/* IoT Vulnerability Scanner */}
                <div className="bg-surfaceHover p-6 rounded-lg">
                  <span className="text-xs bg-surface px-2 py-1 rounded mb-2 inline-block">Project</span>
                  <h3 className="text-lg font-bold mb-2">IoT Vulnerability Scanner</h3>
                  <p className="text-sm mb-4">
                    Full-stack vulnerability scanner for IoT devices using Laravel, Go, and Python with Nmap integration.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Laravel', 'Go', 'Python', 'IoT', 'Security'].map((tech, index) => (
                      <span key={index} className="text-xs bg-surface px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/izzuddinafif/iot-vuln-scanner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-text text-sm inline-flex items-center"
                  >
                    View Project <Github className="w-4 h-4 ml-1" />
                  </a>
                </div>

                {/* Predictive Maintenance */}
                <div className="bg-surfaceHover p-6 rounded-lg">
                  <span className="text-xs bg-surface px-2 py-1 rounded mb-2 inline-block">Project</span>
                  <h3 className="text-lg font-bold mb-2">Elevator Predictive Maintenance ML</h3>
                  <p className="text-sm mb-4">
                    Machine learning model for predicting elevator maintenance needs using sensor data and advanced algorithms.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Python', 'Machine Learning', 'Scikit-Learn'].map((tech, index) => (
                      <span key={index} className="text-xs bg-surface px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/izzuddinafif/predictive-maintenance-elevator-ml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-text text-sm inline-flex items-center"
                  >
                    View Project <Github className="w-4 h-4 ml-1" />
                  </a>
                </div>
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
