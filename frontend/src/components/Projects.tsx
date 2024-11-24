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
      const position = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setScrollPosition(position)
    }

    window.addEventListener('scroll', handleScroll)
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
      <div className="min-h-screen bg-base text-text">
        {/* Gradient background */}
        <div 
          className="fixed inset-0 pointer-events-none bg-gradient"
          style={{ backgroundPosition: `0 ${scrollPosition}%` }}
        ></div>
        {/* Pixelated overlay */}
        <div className="fixed inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAeSURBVHgBzc4xAQAACAIw+f/RBZgkbkDTdXd3x8oABHcCAbLFhywAAAAASUVORK5CYII=')] opacity-5 bg-blend-overlay bg-accent pointer-events-none"></div>
        <div className="relative z-10 max-w-5xl mx-auto p-8">
          <div className="bg-surface p-8 rounded-lg text-center">
            <h2 className="pixelated mb-4">Loading Projects<span className="loading-dots"></span></h2>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-base text-text">
        <div className="relative z-10 max-w-5xl mx-auto p-8">
          <div className="bg-surface p-8 rounded-lg text-center">
            <h2 className="pixelated mb-4 text-red-500">{error}</h2>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-base text-text">
      {/* Gradient background */}
      <div 
        className="fixed inset-0 pointer-events-none bg-gradient"
        style={{ backgroundPosition: `0 ${scrollPosition}%` }}
      ></div>
      {/* Pixelated overlay */}
      <div className="fixed inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAeSURBVHgBzc4xAQAACAIw+f/RBZgkbkDTdXd3x8oABHcCAbLFhywAAAAASUVORK5CYII=')] opacity-5 bg-blend-overlay bg-accent pointer-events-none"></div>
      <div className="relative z-10 max-w-5xl mx-auto p-8">
        <div className="bg-surface p-8 rounded-lg">
          <h2 className="pixelated mb-8 text-center">ALL PROJECTS</h2>
          <div className="flex flex-col space-y-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-surfaceHover p-6 rounded-lg">
                <span className="text-base bg-surface px-2 py-1 rounded mb-2 inline-block">{project.type}</span>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-base mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-base bg-surface px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accentLight transition-colors inline-flex items-center"
                    >
                      View Project <Github className="w-4 h-4 ml-1" />
                    </a>
                  )}
                  {project.doi && (
                    <a
                      href={`https://doi.org/${project.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accentLight transition-colors inline-flex items-center"
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
                        className="text-accent hover:text-accentLight transition-colors inline-flex items-center"
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
    </div>
  )
}
