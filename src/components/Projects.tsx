import Image from 'next/image'
import { projects } from '@/../constants'
import { github } from '@/../constants/icons'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

export default function Projects() {
  const t = useTranslations('Projects')
  const currentLocale = useLocale();

  return (
    <div className='text-white'>
        <p className='text-head'>
            {t('header')}
        </p>
        <ul className='list-disc'>

          {projects.map((project, index) => {
            const isRoute = (project.route && project.route.length > 0)

            const projectNames: {[key: string]: string} = {
              pl: project.name.pl,
              en: project.name.en,
            };
            const projectDescriptions: {[key: string]: string} = {
              pl: project.description.pl,
              en: project.description.en
            };
  
            const projectName = projectNames[currentLocale] || '-';
            const projectDesc = projectDescriptions[currentLocale] || '-';
            return (
              <li className='py-2' key={index}>
                <p className='text-lg py-1'>
                  {projectName}
                </p>
                {/* Route to Github */}
                {isRoute && 
                  <Link
                    href={project.route}
                    className='hover:underline underline-offset-1 flex flex-row gap-1 items-center text-center'
                    target="_blank"
                  >
                    {t('code_on')} {'GitHub'}
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
                  {projectDesc}
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
