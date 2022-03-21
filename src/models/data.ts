import {AboutItem} from './about-item'
import {NavItemType} from './nav-item'
import {ProjectItem} from './project-item'
import {Skillset} from './skillset'
import {Social} from './social'
import {TestimonialItem} from './testimonial-item'

export interface NavData {
  navItems: NavItemType[]
}

export interface HomeData {
  name: string
  position: string
  subHeadingA: string
  subHeadingB: string
}

export interface SkillsData {
  title: string
  skillset: Skillset[]
}

export interface ProjectsData {
  title: string
  projectsItems: ProjectItem[]
}

export interface AboutData {
  title: string
  aboutItems: AboutItem[]
}

export interface TestimonialsData {
  title: string
  testimonialsItems: TestimonialItem[]
}

export interface ContactData {
  title: string
  socials: Social[]
}

// export interface SectionRefs {

// }

export interface AppData {
  home: HomeData
  skills: SkillsData
  projects: ProjectsData
  about: AboutData
  testimonials: TestimonialsData
  contact: ContactData
}
