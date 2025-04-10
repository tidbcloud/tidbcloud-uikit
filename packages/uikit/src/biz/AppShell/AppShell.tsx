import { useEffect, useRef, useState } from 'react'

import { Box, Divider, Stack } from '../../primitive/index.js'

import { AppShellBody } from './container/AppShellBody.js'
import { AppShellMain } from './container/AppShellMain.js'
import { AppShellRoot } from './container/AppShellRoot.js'
import { NavMenuRefContext } from './navbar/context/nav-menu-ref-context.js'
import { Navbar } from './navbar/Navbar.js'
import { NavbarHeader } from './navbar/NavbarHeader.js'
import { NavbarSection } from './navbar/NavbarSection.js'

const DEFAULT_NAVBAR_WIDTH = 240

interface AppShellProps {
  /**
   * The banner to display at the top of the app
   */
  banner?: React.ReactNode
  /**
   * Sections of the navbar for user to customize
   */
  navbar: {
    /**
     * Custom width of the navbar
     */
    width?: number
    /**
     * The logo to display in the navbar
     */
    logo: React.ReactNode
    /**
     * The callback function to handle logo click
     */
    onLogoClick?: () => void
    /**
     * The resource shortcut section of the navbar
     */
    resourceShortcut: React.ReactNode
    /**
     * The footer section of the navbar
     */
    footer: React.ReactNode
  }
}

/**
 * The app shell component is purely for display
 * and not related to any business feature
 */
export const AppShell = ({ banner, navbar, children }: React.PropsWithChildren<AppShellProps>) => {
  const navMenuRef = useRef<HTMLDivElement>(null)
  const bannerRef = useRef<HTMLDivElement>(null)
  const [withBanner, setWithBanner] = useState(false)

  useEffect(() => {
    if (bannerRef.current) {
      setWithBanner(bannerRef.current.children?.length > 0)
    }
  }, [banner])

  return (
    <AppShellRoot>
      <Box ref={bannerRef}>{banner}</Box>
      <AppShellMain
        mod={withBanner ? ['height-flex'] : undefined}
        style={{
          '--app-shell-navbar-width': navbar.width ? `${navbar.width}px` : `${DEFAULT_NAVBAR_WIDTH}px`
        }}
      >
        <Navbar withBorder>
          <NavbarSection px="md" py={8}>
            <NavbarHeader logo={navbar.logo} onLogoClick={navbar.onLogoClick} />
          </NavbarSection>
          <NavbarSection>
            <Box px="md">{navbar.resourceShortcut}</Box>
          </NavbarSection>
          <NavbarSection grow scrollable py={8}>
            <Stack ref={navMenuRef} gap={8} px="md" />
          </NavbarSection>
          <NavbarSection px="md" py="8">
            <Divider mx="-md" mb={8} />
            <Stack gap={8}>{navbar.footer}</Stack>
          </NavbarSection>
        </Navbar>
        <AppShellBody>
          <NavMenuRefContext.Provider value={navMenuRef}>
            {/* Main content */}
            {children}
          </NavMenuRefContext.Provider>
        </AppShellBody>
      </AppShellMain>
    </AppShellRoot>
  )
}
