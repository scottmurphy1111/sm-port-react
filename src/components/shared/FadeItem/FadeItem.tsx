import React, {cloneElement, ReactElement, useCallback} from 'react'

interface FadeItemProps {
  children: ReactElement | ReactElement[]
}

export const FadeItem = ({children}: FadeItemProps) => {
  const recursiveMap = (
    children: ReactElement | ReactElement[],
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
        child = React.cloneElement(child, props)
      }

      return fn(child, index)
    })
  }

  const cloneChild = useCallback(
    (child: ReactElement, index: number) => {
      return cloneElement(child, {
        computedstyle: {
          opacity: '0',
          transform: 'translateY(40px)',
          transition: `all 0.5s ease-out ${index * 0.125}s`,
        },
      })
    },
    [children]
  )

  return <>{recursiveMap(children, cloneChild)}</>
}
