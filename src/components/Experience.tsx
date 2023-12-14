import { experience } from '@/../constants'
import { useLocale, useTranslations } from 'next-intl'

export default function Experience() {

  const t = useTranslations('Experience');
  const currentLocale = useLocale();

  return (
    <div className='text-white'>

      <p className='text-head'>
        {t('header')}
      </p>

      <ul className='list-disc'>
        {experience.map((exp, index) => {

          const duties: {[key: string]: string} = {
            pl: exp.duties.pl,
            en: exp.duties.en
          };
          const position: {[key: string]: string} = {
            pl: exp.position.pl,
            en: exp.position.en
          };

          const expPosition = position[currentLocale] || '-';
          const expDuties = duties[currentLocale] || '-';

          return (
            <li key={index}>
              <p>
                <span className='text-lg'>{expPosition} </span>
                {`${exp.monthStart}.${exp.yearStart} - ${exp.monthEnd}.${exp.yearEnd}`}
              </p>
              <p className='text-body'>
                {expDuties}
              </p>
            </li>
          )
        })}

      </ul>
    </div>
  )
}