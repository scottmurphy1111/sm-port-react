import {useAppContext} from 'context/useAppContext'
import {RefObject, useRef} from 'react'
import {NavItemType} from 'types/nav-item'

interface NavItemProps {
  item: NavItemType
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavItem = ({item, setShowMobileMenu}: NavItemProps) => {
  const {state} = useAppContext()
  const navItemRef = useRef<null | HTMLLIElement>(null)

  const handleClick = () => {
    const scrollToSection = state.sectionRefs.find(
      (section: RefObject<HTMLDivElement> | null) =>
        section?.current?.dataset.section === navItemRef?.current?.textContent
    )

    scrollToSection?.current?.scrollIntoView({behavior: 'smooth'})
    setShowMobileMenu(false)
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
