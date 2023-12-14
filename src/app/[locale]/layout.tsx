// import '../globals.css'
import Introduction from '@/components/Introduction'
import AboutMe from '@/components/AboutMe'
// import NavBar from '@/components/NavBar'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
// import BottomBar from '@/components/BottomBar'
import Contact from '@/components/Contact'

import {notFound} from 'next/navigation';
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import {locales} from '@/config/config';

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params: {locale}
}: Omit<Props, 'children'>) {
  const t = await getTranslations({locale, namespace: 'LocaleLayout'});

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Enable static rendering
  unstable_setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale}>
      <body className='bg-gradient-to-b from-black via-blue-900 to-blue-500 h-full bg-no-repeat bg-fixed'>
        <div className='flex flex-row max-lg:flex-col gap-5 mt-16'>
          <header className='lg:w-1/2'>
            <div className='lg:w-1/2 flex flex-col justify-center items-center lg:fixed gap-3'>
              {/* Short Introduction */}
              <section>
                <Introduction /> 
              </section>
              {/* About Me */}
              <section className='flex text-center items-center lg:px-20 px-10'>
                <AboutMe/>
              </section>
              {/* Contact */}
              <div className=''>
                <Contact/>
              </div>
              {/* Navigation Links */}
              {/* <div className='max-lg:hidden '>
                <NavBar/>
              </div> */}
            </div>
          </header>
          <main className='lg:w-1/2 px-10 flex flex-col gap-5'>
            {/* Experience */}
            <section>
              <Experience/>
            </section>
            {/* Projects */}
            <section className='max-lg:mb-16'>
              <Projects/>
            </section>
          </main>
          {/* BottomBar to easy navigate on mobile devices */}
          {/* <div className='lg:hidden fixed bottom-0 w-full'>
            <BottomBar/>
          </div> */}
        </div>
      </body>
    </html>
  )
}