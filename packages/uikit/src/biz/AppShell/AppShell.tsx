import { useCallback, useEffect, useRef, useState } from 'react'

import { Box, Divider, Stack } from '../../primitive/index.js'

import { AppShellBody } from './container/AppShellBody.js'
import { AppShellMain } from './container/AppShellMain.js'
import { AppShellRoot } from './container/AppShellRoot.js'
import { NavMenuRefContext } from './navbar/context/nav-menu-ref-context.js'
import { ExpandNavbarButton } from './navbar/ExpandNavbarButton.js'
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
     * Custom content rendered in the navbar section between the header and the main menu.
     */
    aboveMenu: React.ReactNode
    /**
     * The footer section of the navbar
     */
    footer: React.ReactNode
    /**
     * The callback function to handle logo click
     */
    onLogoClick?: () => void
    /**
     * Trigger when the navbar is collapsed
     */
    onCollapse?: () => void
    /**
     * Trigger when the navbar is expanded
     */
    onExpand?: () => void
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
  const [navbarCollapsed, setNavbarCollapsed] = useState(false)

  const navbarWidth = navbar.width ?? DEFAULT_NAVBAR_WIDTH

  const handleNavbarCollapse = useCallback(() => {
    setNavbarCollapsed(true)
    navbar.onCollapse?.()
  }, [navbar.onCollapse])
  const handleNavbarExpand = useCallback(() => {
    setNavbarCollapsed(false)
    navbar.onExpand?.()
  }, [navbar.onExpand])

  useEffect(() => {
    if (bannerRef.current) {
      setWithBanner(bannerRef.current.children?.length > 0)
    }
  }, [banner])

  return (
    <AppShellRoot>
      <Box ref={bannerRef} className="tiui-app-shell-banner">
        {banner}
      </Box>
      <AppShellMain
        mod={{ 'height-flex': withBanner }}
        style={{
          '--app-shell-transition-duration': '200ms',
          '--app-shell-transition-timing-function': 'ease',
          '--app-shell-navbar-width': `${navbarWidth}px`,
          '--app-shell-navbar-offset': navbarCollapsed ? '0px' : `${navbarWidth}px`,
          '--app-shell-navbar-collapsed': navbarCollapsed ? '1' : '0'
        }}
      >
        {navbarCollapsed && <ExpandNavbarButton onClick={handleNavbarExpand} />}
        <Navbar withBorder hidden={navbarCollapsed}>
          <NavbarSection>
            <NavbarHeader
              logo={navbar.logo}
              onLogoClick={navbar.onLogoClick}
              onToggleCollapse={handleNavbarCollapse}
              px="md"
              py={8}
            />
          </NavbarSection>
          <NavbarSection>
            <Box className="tiui-app-shell-navbar-above-menu" px="md">
              {navbar.aboveMenu}
            </Box>
          </NavbarSection>
          <NavbarSection className="tiui-app-shell-navbar-menu-section" grow scrollable py={8}>
            <Stack ref={navMenuRef} className="tiui-app-shell-navbar-menu" gap={8} px="md" />
          </NavbarSection>
          <NavbarSection px="md" pb="8">
            <Divider mx="-md" mb={8} />
            <Stack className="tiui-app-shell-navbar-footer" gap={8}>
              {navbar.footer}
            </Stack>
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
