import {AppContext} from 'common/context/AppContext'
import {useAppContext} from 'common/context/useAppContext'
import useMediaMatcher from 'hooks/useMediaMatcher'
import {NavItemType} from 'models/nav-item'
import {type} from 'os'
import React, {
  MouseEvent,
  RefObject,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'

import Logo from './Logo'
import {NavStyled} from './Nav.style'
import NavItem from './NavItem'

// const navItems: NavItem[] = [
//   {
//     value: 'home',
//     active: true,
//   },
//   {
//     value: 'skills',
//     active: false,
//   },
//   {
//     value: 'projects',
//     active: false,
//   },
//   {
//     value: 'about',
//     active: false,
//   },
//   {
//     value: 'testimonials',
//     active: false,
//   },
//   {
//     value: 'contact',
//     active: false,
//   },
// ]

const documentClick = (
  navList: any,
  navButtonWrap: any,
  setShowMobile: any
) => {
  document.addEventListener('click', event => {
    if (
      !navList.contains(event.target) &&
      !navButtonWrap.contains(event.target)
    ) {
      setShowMobile(false)
    }
  })
}

const Nav = () => {
  const [show, setShow] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const navItemsList = useRef<HTMLUListElement>(null)
  const navButtonWrapper = useRef<HTMLDivElement>(null)

  const {state, dispatch} = useAppContext()
  const {navItems} = state.nav

  useEffect(() => {
    if (state.introAnimDone) {
      setShow(true)
    }
  }, [state.introAnimDone])

  const handleHomeClick = () => {
    dispatch({type: 'SET_ACTIVE_NAV', payload: {value: 'home'}})
  }

  // useEffect(() => {
  //   const scrollToSection = () => {
  //     const {sectionRefs} = state
  //     sectionRefs.map((sectionRef: RefObject<HTMLDivElement>) => {
  //       if (sectionRef.current?.dataset.section === state.activeNav.value) {
  //         sectionRef.current.scrollIntoView({behavior: 'smooth'})
  //         setShowMobileMenu(false)
  //       }
  //     })
  //   }

  //   scrollToSection()
  // }, [state.activeNav])

  const handleNavButtonClick = () => {
    setShowMobileMenu(true)
  }

  useEffect(() => {
    documentClick(
      navItemsList.current,
      navButtonWrapper.current,
      setShowMobileMenu
    )
  }, [])

  return (
    <NavStyled className={`nav ${show ? 'show' : ''}`}>
      <Grid>
        <Row>
          <Col xs={4} md={3}>
            <span className="logo" data-nav="home" onClick={handleHomeClick}>
              <Logo />
            </span>
          </Col>
          <Col xs={8} md={8} mdOffset={1} className="nav-wrapper">
            <div
              ref={navButtonWrapper}
              className="nav-button-wrapper"
              onClick={() => handleNavButtonClick()}
            >
              <div className="nav-button"></div>
            </div>
            <ul
              ref={navItemsList}
              className="nav-items"
              data-active={showMobileMenu}
            >
              {navItems?.map((item: NavItemType, index: number) => {
                if (index !== 0) {
                  return <NavItem key={`nav-key${index}`} item={item} />
                } else {
                  return null
                }
              })}
            </ul>
          </Col>
        </Row>
      </Grid>
    </NavStyled>
  )
}

export default Nav
