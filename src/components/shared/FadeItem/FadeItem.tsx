import React, {
  cloneElement,
  ReactElement,
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import {transform} from 'typescript'

import {FadeItemStyled} from './FadeItem.style'

interface FadeItemProps {
  children: any
}

const FadeItem = ({children}: FadeItemProps) => {
  // const [visible, setVisible] = useState(false)
  const childrenRef = useRef<RefObject<any>>()

  const initStyles = {
    opacity: 0,
    transform: 'translateY(-40px)',
  }

  const animateStyles = {
    opacity: 1,
    transform: 'translateY(0px)',
  }

  const recursiveMap = useCallback(
    (
      children: ReactElement[],
      fn: (child: ReactElement, index: number) => ReactElement
    ): ReactElement[] => {
      // console.log(children)
      return React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) {
          return child
        }

        if ((child as ReactElement).props.children) {
          const props = {
            children: recursiveMap((child as ReactElement).props.children, fn),
          }
          child = React.cloneElement(child, props, null)
        }

        return fn(child, index)
      })
    },
    []
  )

  const cloneChild = (child: ReactElement, index: number) => {
    console.log(child)
    return cloneElement(
      child,
      {
        computedStyle: {
          opacity: '0',
          transform: 'translateY(40px)',
          transition: `all 0.5s ease-out ${index * 0.125}s`,
        },
      },
      null
    )
  }

  // const renderChildren = (children: any, callback: any) => {
  //   return React.Children.map(children, (child, index) => {
  //     console.log(child)
  //     child.props.children
  //       ? [
  //           callback(child, index),
  //           renderChildren(child.props.children, callback),
  //         ]
  //       : callback(child, index)
  //   })
  // }

  // function renderChildren(children: any) {
  //   return React.Children.map(children, (child, index) => {
  //     console.log(child)
  //     console.log(`index =  ${index}`)
  //     return cloneElement(child, {
  //       style: {
  //         opacity: '0',
  //         transform: 'translateY(40px)',
  //         transitionDelay: `${index * 0.25}s`,
  //         transition: 'all 0.5s ease-out',
  //       },
  //     })
  //   })
  // }

  return (
    // <div ref={itemRef}>
    /* <div ref={itemRef}>{renderChildren(children, cloneChild)}</div> */
    <>{recursiveMap(children, cloneChild)}</>
    // </div>
  )
}

export default FadeItem
