import useMediaMatcher from 'hooks/useMediaMatcher'
import {NavItem} from 'models/nav-item'
import React, {useEffect, useRef, useState} from 'react'
import {Col, Grid, Row} from 'react-flexbox-grid'

import Logo from './Logo'
import {NavStyled} from './Nav.style'

const navItems: NavItem[] = [
  {
    value: 'home',
    active: true,
  },
  {
    value: 'skills',
    active: false,
  },
  {
    value: 'projects',
    active: false,
  },
  {
    value: 'about',
    active: false,
  },
  {
    value: 'testimonials',
    active: false,
  },
  {
    value: 'contact',
    active: false,
  },
]

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

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 3400)
  })

  const handleClick = (e: any) => {
    const selectedNav = e.target.dataset.nav
    const section: HTMLElement | null = document.querySelector(
      `[data-section=${selectedNav}`
    )

    if (section) {
      section.scrollIntoView({behavior: 'smooth'})
      setShowMobileMenu(false)
    }
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
            <span className="logo" data-nav="home" onClick={handleClick}>
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
              {navItems.map((item: NavItem, index: number) => {
                if (index !== 0) {
                  return (
                    <li key={index} data-nav={item.value} onClick={handleClick}>
                      {item.value}
                    </li>
                  )
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
