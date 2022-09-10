import {useMonitorScrolling} from 'hooks/useMonitorScrolling'

import {About} from './About/About'
import {Contact} from './Contact/Contact'
import {Home} from './Home/Home'
import {Projects} from './Projects/Projects'
import {Skills} from './Skills/Skills'
import {Testimonials} from './Testimonials/Testimonials'

export const Portfolio = () => {
  const {
    setHomeOffset,
    setSkillsOffset,
    setProjectsOffset,
    setAboutOffset,
    setTestimonialsOffset,
    setContactOffset,
    isAbout,
  } = useMonitorScrolling()

  return (
    <>
      <Home setHomeOffset={setHomeOffset} />
      <Skills setSkillsOffset={setSkillsOffset} />
      <Projects setProjectsOffset={setProjectsOffset} />
      <About setAboutOffset={setAboutOffset} isAbout={isAbout} />
      <Testimonials setTestimonialsOffset={setTestimonialsOffset} />
      <Contact setContactOffset={setContactOffset} />
    </>
  )
}
