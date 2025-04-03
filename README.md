<p align="center">
  <a href="https://tidbcloud.com" target="_blank"><img src="media/tidbcloud-logo.svg" width="256" alt="TiDB Cloud Logo" /></a>
</p>
<h1 align="center">TiUI</h1>

This repo hosts TiUI (TiDB Cloud UIKit), including primitive, business, and pro components.

### Quick Start

Visit [here](https://tidbcloud-uikit.netlify.app/docs/cloud-ui-getting-started) to learn more about how to use this component library.

```jsx
import { ThemeProvider } from '@tidbcloud/uikit/theme'
import { Button } from '@tidbcloud/uikit'
import '@tidbcloud/uikit/style.css'

function App() {
  return (
    <ThemeProvider colorScheme="auto">
      <Button>Click me!</Button>
    </ThemeProvider>
  )
}
```
