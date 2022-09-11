import classNames from 'classnames'
import {useAppContext} from 'context/useAppContext'
import {useMediaMatcher} from 'hooks/useMediaMatcher'
import {useEffect, useRef, useState} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'
import {NavItemType} from 'types/nav-item'

import {Logo} from './Logo'
import {NavStyled} from './Nav.style'
import {NavItem} from './NavItem'

const documentClick = (
  navList: HTMLUListElement | null,
  navButtonWrap: HTMLDivElement | null,
  setShowMobile: React.Dispatch<React.SetStateAction<boolean>>
) => {
  document.addEventListener('click', event => {
    if (
      !navList?.contains(event.target as HTMLUListElement) &&
      !navButtonWrap?.contains(event.target as HTMLDivElement)
    ) {
      setShowMobile(false)
    }
  })
}

export const Nav = () => {
  const [show, setShow] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
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
    state.sectionRefs[0].current?.scrollIntoView({behavior: 'smooth'})
  }

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
                  return (
                    <NavItem
                      key={`nav-key${index}`}
                      item={item}
                      setShowMobileMenu={setShowMobileMenu}
                    />
                  )
                } else {
                  return null
                }
              })}
              {useMediaMatcher('lg') && (
                <button
                  className={classNames(
                    'close-btn',
                    showMobileMenu ? 'show' : ''
                  )}
                  onClick={() => setShowMobileMenu(false)}
                >
                  X
                </button>
              )}
            </ul>
          </Col>
        </Row>
      </Grid>
    </NavStyled>
  )
}
