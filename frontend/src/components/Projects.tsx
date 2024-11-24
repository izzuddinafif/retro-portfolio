import { Github, Book } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getProjects, Project } from '../services/api'

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
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

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects()
        setProjects(data)
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load projects')
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen w-full bg-transparent text-text font-mono">
        <div 
          className="fixed inset-0 pointer-events-none bg-gradient"
          style={{ backgroundPosition: `0 ${scrollPosition}%` }}
        ></div>
        <div className="relative z-10 w-full max-w-6xl px-4 py-8">
          <div className="text-center">Loading projects...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center min-h-screen w-full bg-transparent text-text font-mono">
        <div 
          className="fixed inset-0 pointer-events-none bg-gradient"
          style={{ backgroundPosition: `0 ${scrollPosition}%` }}
        ></div>
        <div className="relative z-10 w-full max-w-6xl px-4 py-8">
          <div className="text-center text-red-500">{error}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-center min-h-screen w-full bg-transparent text-text font-mono">
      {/* Gradient background */}
      <div 
        className="fixed inset-0 pointer-events-none bg-gradient"
        style={{ backgroundPosition: `0 ${scrollPosition}%` }}
      ></div>

      {/* Pixelated overlay */}
      <div className="fixed inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAeSURBVHgBzc4xAQAACAIw+f/RBZgkbkDTdXd3x8oABHcCAbLFhywAAAAASUVORK5CYII=')] opacity-5 bg-blend-overlay bg-accent pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 pixelated text-center">Projects</h1>
        
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-surface p-8 rounded-lg">
              <div className="mb-4">
                <span className="text-xs bg-surfaceHover px-2 py-1 rounded mb-2 inline-block">
                  {project.type}
                </span>
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-sm text-gray-400 mb-4">{project.date}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-surfaceHover px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="leading-relaxed mb-4">{project.description}</p>

              <div className="flex gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-text text-sm inline-flex items-center"
                  >
                    View Project <Github className="w-4 h-4 ml-1" />
                  </a>
                )}
                {project.doi && (
                  <a
                    href={`https://doi.org/${project.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-text text-sm inline-flex items-center"
                  >
                    View Publication <Book className="w-4 h-4 ml-1" />
                  </a>
                )}
                {project.links && 
                  Object.entries(project.links).map(([key, url]) => (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-text text-sm inline-flex items-center"
                    >
                      View {key.charAt(0).toUpperCase() + key.slice(1)} <Github className="w-4 h-4 ml-1" />
                    </a>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
