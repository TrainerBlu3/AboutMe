import { useState, useEffect } from 'react'

function Projects () {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('/src/data/projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])

    return (
        <main className="min-h-screen bg-gray-950 text-white">
            <div className="max-w-6xl mx-auto px-4 py-32">

                <h1 className="text-4xl font-bold text-blue-500 mb-16">
                    My <span className="text-blue-500">Projects</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-900 rounded-xl overflow-hidden flex flex-col">

                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-6 flex flex-col flex-1">
                                <h2 className="text-xl font-bold mb-2">
                                    {project.title} <span className="text-blue-500">{project.titleHighlight}</span>
                                </h2>

                                <p className="text-gray-400 text-sm mb-4 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span key={i} className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-center border border-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg text-sm transition-colors"
                                    >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    )
}

export default Projects