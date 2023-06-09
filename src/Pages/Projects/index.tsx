import { useEffect, useState } from "react"
import { ContainerGit, ContainerProjects } from "./style"

export function Projects() {
    const [projects, setProjects] = useState<any>([])
    useEffect(() => {
        fetchProjects()
    }, [])

    const fetchProjects = async () => {

        const response = await fetch('https://api.github.com/users/bruna40/subscriptions')
        const data = await response.json()
            
        const shufledProjects = shuffleArray(data)

        const projects = shufledProjects.slice(0, 5)

        setProjects(projects)
    }

    function shuffleArray(array: any) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
      }
            
    return (
        <ContainerProjects>
            <h1>Projetos</h1>
            <div>
                {
                    projects.map((project: any) => {
                        return (
                            <ContainerGit key={project.id}>
                                <h2>{project.name}</h2>
                                <span>
                                    <p>Linguagem utilizada: {project.language}</p>
                                    <a href={project.html_url}>Ir a pagina</a>
                                </span>
                            </ContainerGit>
                        )
                    }
                    )
                }
            </div>
        </ContainerProjects>
    )
}