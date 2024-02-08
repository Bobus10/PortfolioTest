import '#/public/styles/globals.css'
import Introduction from '@/components/Introduction'
import AboutMe from '@/components/AboutMe'
// import NavBar from '@/components/NavBar'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
// import BottomBar from '@/components/BottomBar'
import Contact from '@/components/Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio Robert Kosieradzki',
  description: 'Portfolio Robert Kosieradzki',
}
// bg-[url('./assets/images/banner.JPG')]
export default function RootLayout() {
  return (
    <html className="h-full" lang='en'>
      <body className='body'>
        <div className='body-div'>
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