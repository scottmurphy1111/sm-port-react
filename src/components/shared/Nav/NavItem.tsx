import {useAppContext} from 'common/context/useAppContext'
import {NavItemType} from 'models/nav-item'
import React, {RefObject, useEffect, useRef} from 'react'

interface NavItemProps {
  item: NavItemType
}

const NavItem = ({item}: NavItemProps) => {
  const {state, dispatch} = useAppContext()
  const navItemRef = useRef(null)

  const handleClick = () => {
    dispatch({type: 'SET_ACTIVE_NAV', payload: item})
  }

  return (
    <li ref={navItemRef} onClick={handleClick}>
      {item.value}
    </li>
  )
}

export default NavItem
