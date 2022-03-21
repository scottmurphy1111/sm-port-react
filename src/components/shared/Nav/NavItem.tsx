import {useAppContext} from 'common/context/useAppContext'
import {NavItemType} from 'models/nav-item'
import {RefObject, useRef} from 'react'

interface NavItemProps {
  item: NavItemType
}

const NavItem = ({item}: NavItemProps) => {
  const {state} = useAppContext()
  const navItemRef = useRef<null | HTMLLIElement>(null)

  const handleClick = () => {
    const scrollToSection = state.sectionRefs.find(
      (section: RefObject<HTMLDivElement> | null) =>
        section?.current?.dataset.section === navItemRef?.current?.textContent
    )

    scrollToSection?.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <li
      ref={navItemRef}
      onClick={handleClick}
      className={state.activeNav.value === item.value ? 'active' : undefined}
    >
      {item.value}
    </li>
  )
}

export default NavItem
