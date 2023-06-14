import { useMergedRef } from '@mantine/hooks'
import { FixedFunctionComponent } from '@tidb-cloud-uikit/utils'
import { useMount, useMutationObserver } from 'ahooks'
import React, { useRef } from 'react'

import { loaderClassName } from './Loader.styles'

function fixOvalLoader(node: Element) {
  if (node instanceof SVGSVGElement) {
    // Match oval loader
    const viewBoxMatched = node.getAttribute('viewBox') === '0 0 38 38'
    const svgPath = node.querySelector('path[d="M32 16c0-9.94-8.06-16-16-16"]')

    // Adjust attributes and child nodes
    if (viewBoxMatched && !!svgPath) {
      node.setAttribute('viewBox', '0 0 40 40')
      node.querySelector('g[transform="translate(2.5 2.5)"]')?.removeAttribute('transform')

      const circle = node.querySelector('circle')

      circle?.setAttribute('cx', '50%')
      circle?.setAttribute('cy', '50%')
      node.querySelector('animateTransform')?.remove()
      svgPath?.setAttribute('d', 'M36 20c0-9.94-8.06-16-16-16')

      /**
       * Inject static class name to use CSS animation
       */
      const classNames = node.getAttribute('class')

      if (!classNames?.includes(loaderClassName)) {
        node.setAttribute('class', [classNames, loaderClassName].filter(Boolean).join(' '))
      }
    }
  } else if ('querySelectorAll' in node) {
    node.querySelectorAll('svg').forEach(fixOvalLoader)
  }
}

export function withLoaderPatch<
  R extends HTMLElement | SVGElement,
  P extends Record<string, any>,
  S extends Record<string, any> = {}
>(Component: FixedFunctionComponent<P>, staticProps?: S) {
  const wrappedComponent = React.forwardRef<R, P>((props, ref) => {
    const innerRef = useRef<R>(null)
    const mergedRef = useMergedRef<R>(ref, innerRef)

    useMount(() => {
      if (innerRef.current) {
        fixOvalLoader(innerRef.current)
      }
    })

    useMutationObserver(
      (mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach(fixOvalLoader)
        })
      },
      innerRef.current,
      {
        childList: true,
        subtree: true
      }
    )

    return <Component {...props} ref={mergedRef} />
  }) as React.NamedExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<R>> & S

  wrappedComponent.displayName = `withLoaderPatch(${Component.displayName})`

  if (staticProps) {
    Object.entries(staticProps).forEach(([key, value]: [keyof S, any]) => {
      wrappedComponent[key] = value
    })
  }

  return wrappedComponent
}
