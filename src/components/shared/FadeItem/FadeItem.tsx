import React, {cloneElement, ReactElement, useCallback} from 'react'

interface FadeItemProps {
  children: ReactElement[]
}

const FadeItem = ({children}: FadeItemProps) => {
  const recursiveMap = useCallback(
    (
      children: ReactElement[],
      fn: (child: ReactElement, index: number) => ReactElement
    ): ReactElement[] => {
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
    // console.log(child)
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

  return <>{recursiveMap(children, cloneChild)}</>
}

export default FadeItem
