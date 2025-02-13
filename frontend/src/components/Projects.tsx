import { useState, useEffect } from 'react'
import { Github, Book } from 'lucide-react'
import { getProjects, Project } from '../services/api'

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects()
        // Sort projects by date in descending order, parsing date strings correctly
        const sortedProjects = data.sort((a, b) => {
          // Parse date strings in format "MMM DD, YYYY" or "MMM YYYY" or "MMM YYYY - MMM YYYY"
          const parseDate = (dateStr: string) => {
            // Handle date ranges by taking the end date
            const dates = dateStr.split(' - ')
            const targetDate = dates[dates.length - 1].trim() // Use the end date if it's a range
            
            // Convert month name to number (Jan = 0, Feb = 1, etc.)
            const months: { [key: string]: number } = {
              'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
              'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
            }
            
            const parts = targetDate.split(' ')
            const month = months[parts[0]]
            const year = parseInt(parts[parts.length - 1])
            const day = parts.length === 3 ? parseInt(parts[1].replace(',', '')) : 1
            
            return new Date(year, month, day).getTime()
          }
          
          return parseDate(b.date) - parseDate(a.date)
        })
        setProjects(sortedProjects)
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load projects')
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

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

  if (loading) {
    return (
      <div className="flex flex-col items-center min-h-screen w-full bg-transparent text-text font-mono">
        {/* Gradient background */}
        <div 
          className="fixed inset-0 pointer-events-none bg-gradient -z-10"
          style={{ 
            backgroundPosition: '50% 50%'
          }}
        ></div>

        <div className="w-full max-w-4xl px-4 py-8">
          {/* Back button */}
          <div className="mb-8">
            <a
              href="/"
              className="inline-flex items-center text-accent hover:text-accentLight transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </a>
          </div>

          <h1 className="pixelated text-2xl mb-6 text-center">All Projects</h1>
          
          <div className="flex justify-center items-center">
            <div className="animate-pulse text-xl font-bold text-accent">
              Loading projects
              <span className="animate-[blink_1s_infinite]">.</span>
              <span className="animate-[blink_1s_infinite_200ms]">.</span>
              <span className="animate-[blink_1s_infinite_400ms]">.</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center min-h-screen w-full bg-transparent text-text font-mono">
        <div className="w-full max-w-4xl px-4 py-8">
          <div className="bg-surface p-8 rounded-lg text-center">
            <h2 className="pixelated mb-4 text-red-500">{error}</h2>
          </div>
        </div>
      </div>
    )
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
        {/* Back button */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center text-accent hover:text-accentLight transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </a>
        </div>

        <header className="text-center mb-12">
          <h1 className="pixelated text-2xl sm:text-3xl mb-6">All Projects</h1>
          <p className="text-base text-accent">A comprehensive list of my work and contributions</p>
        </header>

        <main>
          <div className="timeline">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="timeline-item"
                style={{ '--section-index': index } as React.CSSProperties}
              >
                <span className="text-xs sm:text-sm text-accent mb-1 block">{project.date}</span>
                <div className="bg-surfaceHover p-4 sm:p-6 rounded-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.types.map((type, typeIndex) => (
                      <span key={typeIndex} className="text-xs sm:text-base bg-surface px-2 py-1 rounded inline-block hover:bg-accent hover:text-white transition-colors">{type}</span>
                    ))}
                  </div>
                  <h3 className="text-base sm:text-xl font-bold mb-2 hover:text-accent transition-colors">{project.title}</h3>
                  <div className="text-xs sm:text-base mb-4" dangerouslySetInnerHTML={{ __html: project.description }}></div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs sm:text-base bg-surface px-2 py-1 rounded hover:bg-accent hover:text-white transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2">
                    {(project.link || project.links?.go || project.links?.python || project.links?.overthewire || project.links?.hackthebox) && (
                      <div className="flex flex-col gap-2 w-full">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accentLight transition-all duration-300 inline-flex items-center group text-sm sm:text-base"
                          >
                            View {project.title} <Github className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
                          </a>
                        )}
                        {project.links?.go && (
                          <a
                            href={project.links.go}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accentLight transition-all duration-300 inline-flex items-center group text-sm sm:text-base"
                          >
                            View {project.title} (Go) <Github className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
                          </a>
                        )}
                        {project.links?.python && (
                          <a
                            href={project.links.python}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accentLight transition-all duration-300 inline-flex items-center group text-sm sm:text-base"
                          >
                            View {project.title} (Python) <Github className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
                          </a>
                        )}
                        {project.links?.overthewire && (
                          <a
                            href={project.links.overthewire}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accentLight transition-all duration-300 inline-flex items-center group text-sm sm:text-base"
                          >
                            View {project.title} <Github className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
                          </a>
                        )}
                        {project.links?.hackthebox && (
                          <a
                            href={project.links.hackthebox}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:text-accentLight transition-all duration-300 inline-flex items-center group text-sm sm:text-base"
                          >
                            View {project.title} <Github className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
                          </a>
                        )}
                      </div>
                    )}
                    {project.doi && (
                      <a
                        href={`https://doi.org/${project.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accentLight transition-all duration-300 inline-flex items-center group text-sm sm:text-base"
                      >
                        View {project.title} <Book className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

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