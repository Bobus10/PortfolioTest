import Image from 'next/image'
import { projects } from '@/../constants'
import { github } from '@/../constants/icons'
import Link from 'next/link'

export default function Projects() {

  return (
    <div className='text-white'>
        <p className='text-head'>
            Projects
        </p>
        <ul className='list-disc'>

          {projects.map((project, index) => {
            const isRoute = (project.route && project.route.length > 0)

            return (
              <li className='py-2' key={index}>
                <p className='text-lg py-1'>
                  {project.name}
                </p>
                {/* Route to Github */}
                {isRoute && 
                  <Link
                    href={project.route}
                    className='hover:underline underline-offset-1 flex flex-row gap-1 items-center text-center'
                    target="_blank"
                  >
                    Code on GitHub
                      <Image
                        src={github.src}
                        alt={github.label}
                        width={24}
                        height={24}
                      />
                  </Link>
                }
                {/* Project Description */}
                <p className='py-2'>
                  {project.description}
                </p>
                {/* Icons of technologies used to create the project */}
                <div className='flex flex-row gap-2'>
                  {project.technologies.map((technology) => {
                    const isSrc = (technology.src && technology.src.length > 0 && technology.src.endsWith('.svg'))
                    return (
                      isSrc ? (
                        <Image
                          key={technology.label}
                          src={technology.src}
                          alt={technology.label}
                          width={24}
                          height={24}
                          title={technology.label}
                        />
                      ) : (
                        <p className='text-sm'>
                          {technology.label}
                        </p>
                      )
                    )
                  })}
                </div> 
              </li>
              )
          })}
        </ul>
    </div>
  )
}
