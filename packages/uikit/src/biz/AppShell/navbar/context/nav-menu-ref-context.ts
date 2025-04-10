import { createContext } from 'react'

export const NavMenuRefContext = createContext<React.RefObject<HTMLDivElement> | null>(null)
