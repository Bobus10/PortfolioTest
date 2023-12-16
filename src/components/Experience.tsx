import { experience } from '@/../constants'

export default function Experience() {
  return (
    <div className='text-white'>

      <p className='text-head'>
        Work Experience
      </p>
      
      <ul className='list-disc'>
        {experience.map((exp, index) => {
          return (
            <li key={index}>
              <p>
                <span className='text-lg'>{exp.position}</span>
                {`${exp.monthStart}.${exp.yearStart} - ${exp.monthEnd}.${exp.yearEnd}`}
              </p>
              <p className='text-body'>
                {exp.duties}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}