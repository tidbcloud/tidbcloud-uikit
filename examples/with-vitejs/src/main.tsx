import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@tidbcloud/uikit/style.css'

import App from './App.tsx'
import { ThemeProvider } from '@tidbcloud/uikit/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider colorScheme="light">
      <App />
    </ThemeProvider>
  </StrictMode>
)
