import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'
import { Box } from '@tidbcloud/uikit'
// import { IconBookOpen01, IconGithub } from '@tidbcloud/uikit/icons'
import Link from 'next/link'

export default function () {
  return (
    <Box component="main" className="home-page">
      <Box mt={32}>
        <h1>Welcome to TiUI!</h1>
      </Box>
      <Box mt={32} w={800}>
        <p>
          <b>TiUI</b> is the UI library for TiDB Cloud, which includes Cloud UI, SQL editor, icons. It enhances
          development efficiency and unifies UI style and interaction experience.
        </p>
      </Box>
      <Box mt={32}>
        <Link href="/docs">
          <Button color="primary">Get Started</Button>
        </Link>
      </Box>
      <Box className="summary" mt={48}>
        <Card className="card">
          <CardBody>
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
                  <p>
                    <b>Cloud UI</b> is the component library for TiDB Cloud. It is based on Mantine and includes many
                    business-specific customizations, providing better support for Dark Mode. Additionally, it has
                    accumulated a large number of business components specifically for the Cloud Database Console.
                  </p>
                </Box>
                <Box className="ctrl">
                  <Button>Documentation</Button>
                  <Button className="mx-4">Git</Button>
                </Box>
              </Box>
            </Box>
          </CardBody>
        </Card>
        <Card className="card">
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
                TiSQLEditor is an <b>SQL Editor</b> wrapped around CodeMirror, significantly enhancing usability. It
                includes numerous improvements and refinements for common features such as syntax error handling,
                Chinese language processing, and interactive pop-ups. This component is also used in the code editor
                within TiDB Cloud.
              </Box>
              <Box className="ctrl">
                <Button>Documentation</Button>
                <Button className="mx-4">Git</Button>
              </Box>
            </Box>
          </Box>
        </Card>
        <Card className="card">
          <Box className="main">
            <Box className="img">
              <img src="https://boserverdisc.oss-cn-hangzhou.aliyuncs.com/public/tiui/icons.png" alt="cons" />
            </Box>
            <Box>
              <Box className="title">Cloud UI Icons</Box>
              <Box className="desc">
                A set of <b>icons</b> designed by the TiDB Cloud design team for the cloud database web console, meeting
                most of the needs of a complex console.
              </Box>
              <Box className="ctrl">
                <Button>Documentation</Button>
                <Button className="mx-4">Git</Button>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  )
}
