const size = {
  mobile: '320px',
  mobileM: '375px',
  tablet: '768px',
  tabletL: '1024px',
  laptop: '1366px',
  desktop: '1440px',
  desktopM: '1920px'
}

export const baseTheme = {
  typography: {
    size: {
      xs: '12px',
      sm: '16px',
      md: '20px',
      lg: '28px',
      xl: '36px'
    }
  },
  breakpoint: {
    mobile: `(min-width: ${size.mobile})`,
    mobileM: `(min-width: ${size.mobileM})`,
    tablet: `(min-width: ${size.tablet})`,
    tabletL: `(min-width: ${size.tabletL})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopM: `(min-width: ${size.desktopM})`
  }
}
