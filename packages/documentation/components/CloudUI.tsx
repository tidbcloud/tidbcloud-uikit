import { Button, Center, Box } from '@tidbcloud/uikit'
import { IconBookOpen01, IconGithub } from '@tidbcloud/uikit/icons'
import Link from 'next/link'

export default function () {
  return (
    <Box component="main" className="home-page">
      <Box mt={32}>
        <h1>Cloud UI</h1>
      </Box>
      <Box mt={32} w={800}>
        WIP
      </Box>
      <Box mt={32}>
        <Link href="/docs">
          <Button>Get Started</Button>
        </Link>
      </Box>
      <Box className="summary" mt={48}>
        <Box className="card">
          <Box className="main">
            <Box className="img">
              <img
                src="https://boserverdisc.oss-cn-hangzhou.aliyuncs.com/public/tiui/tidb-cloud.png"
                alt="tidb-cloud"
              />
            </Box>
            <Box>
              <Box className="title">Cloud UI</Box>
              <Box className="desc">
                Cloud UI is the component library for TiDB Cloud. It is based on Mantine and includes many
                business-specific customizations, providing better support for Dark Mode. Additionally, it has
                accumulated a large number of business components specifically for the Cloud Database Console.
              </Box>
              <Box className="ctrl">
                <Button variant="default" leftIcon={<IconBookOpen01 />}>
                  Documentation
                </Button>
                <Button variant="default" ml={8} leftIcon={<IconGithub />}>
                  Git
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="card">
          <Box className="main">
            <Box className="img">
              <img
                src="https://boserverdisc.oss-cn-hangzhou.aliyuncs.com/public/tiui/sql-editor.png"
                alt="sql-editor"
              />
            </Box>
            <Box>
              <Box className="title">TiSQLEditor</Box>
              <Box className="desc">
                TiSQLEditor is an SQL Editor wrapped around CodeMirror, significantly enhancing usability. It includes
                numerous improvements and refinements for common features such as syntax error handling, Chinese
                language processing, and interactive pop-ups. This component is also used in the code editor within TiDB
                Cloud.
              </Box>
              <Box className="ctrl">
                <Button variant="default" leftIcon={<IconBookOpen01 />}>
                  Documentation
                </Button>
                <Button variant="default" ml={8} leftIcon={<IconGithub />}>
                  Git
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
