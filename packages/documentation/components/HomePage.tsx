import { Button, Center, Box } from '@tidbcloud/uikit'
import Link from 'next/link'

export default function () {
  return (
    <main className="home-page">
      <Box component="h1" mt={32}>
        Welcome to TiDB Cloud UIKit
      </Box>
      <Box component="p" mb={16}>
        A collection of beautifully designed and well-crafted React components for your next project.
      </Box>

      <Center>
        <Link href="/docs">
          <Button>Get Started</Button>
        </Link>
      </Center>
    </main>
  )
}
