import { useContext, useEffect, useState } from 'react'

import { Portal } from '../../../../primitive/index.js'

import { NavMenuRefContext } from './nav-menu-ref-context.js'

export const NavMenuPortal = ({ children }: React.PropsWithChildren) => {
  const ctx = useContext(NavMenuRefContext)
  const [target, setTarget] = useState<HTMLDivElement>()

  /**
   * `ctx` is a ref object
   * and it will not trigger re-render
   * so we need to update `target` manually
   */
  useEffect(() => {
    if (ctx?.current) {
      setTarget(ctx.current)
    }
  }, [ctx])

  if (!ctx) {
    // This should never happen
    // NavMenuPortal must be used within a NavMenuRefContext
    return null
  }

  if (!target) {
    return null
  }

  return <Portal target={target}>{children}</Portal>
}
