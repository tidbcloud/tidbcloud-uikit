import { Button, Box, Input, Card, CopyButton, Flex, Typography, Center, Stack, Modal, Tooltip } from '@tidbcloud/uikit'
import { useDisclosure } from '@tidbcloud/uikit/hooks'
import * as icons from '@tidbcloud/uikit/icons'
import { IconCopy01, IconSearchLg } from '@tidbcloud/uikit/icons'
import { useInfiniteScroll } from 'ahooks'
import { useState, useDeferredValue } from 'react'

const iconsData = ['Icon', ...Object.keys(icons)]
console.log('iconsData: ', iconsData)

function IconCard({ name }: { name: string }) {
  // @ts-ignore
  const Icon = icons[name] as any
  const [opened, handlers] = useDisclosure()

  if (!Icon) {
    console.log('name: ', name)
    return null
  }

  return (
    <>
      <Card w={120} p={16} sx={{ cursor: 'pointer' }} onClick={() => handlers.open()}>
        <Stack>
          <Center>
            <Icon size={24} />
          </Center>
          <Center>
            <Typography variant="body-sm" truncate>
              {name}
            </Typography>
          </Center>
        </Stack>
      </Card>

      <Modal opened={opened} onClose={() => handlers.close()} closeOnClickOutside centered size={600}>
        <Flex gap={32}>
          <Box sx={(theme) => ({ border: `1px solid ${theme.colors.gray[3]}`, borderRadius: 4 })}>
            <Icon size={180} />
          </Box>
          <Stack>
            <CopyButton value={name}>
              {({ copied, copy }) => (
                <Tooltip label={copied ? 'Copied!' : 'Copy name'} withArrow>
                  <Typography
                    variant="headline-lg"
                    onClick={copy}
                    sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                  >
                    {name}
                  </Typography>
                </Tooltip>
              )}
            </CopyButton>

            <CopyButton value={`import { ${name} } from '@tidbcloud/uikit/icons'`}>
              {({ copied, copy }) => (
                <Button leftIcon={<IconCopy01 />} onClick={copy} variant="default">
                  {copied ? 'Copied!' : 'Copy Import'}
                </Button>
              )}
            </CopyButton>
            <CopyButton value={`<${name} />`}>
              {({ copied, copy }) => (
                <Button leftIcon={<IconCopy01 />} onClick={copy}>
                  {copied ? 'Copied!' : 'Copy JSX'}
                </Button>
              )}
            </CopyButton>
          </Stack>
        </Flex>
      </Modal>
    </>
  )
}

interface Result {
  list: string[]
  nextId: string | undefined
  total: number
}

function getLoadMoreList(nextId: string | undefined, limit: number): Promise<Result> {
  let start = 0
  if (nextId) {
    start = iconsData.findIndex((i) => i === nextId)
  }
  const end = start + limit
  const list = iconsData.slice(start, end)

  const nId = iconsData.length >= end ? iconsData[end] : undefined
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        list,
        nextId: nId,
        total: iconsData.length
      })
    })
  })
}

export function IconsPreview() {
  const [value, setValue] = useState('')
  const deferredValue = useDeferredValue(value)
  const iconCount = iconsData.length
  const { data, loadMore, loadingMore } = useInfiniteScroll((d) => getLoadMoreList(d?.nextId, 100))
  const hasMore = data && data.list.length < data.total

  return (
    <Box p={16}>
      <Input
        size="lg"
        radius={32}
        placeholder={`Search all ${iconCount} icon`}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        icon={<IconSearchLg size={24} />}
        mb={32}
      />

      {/* <Flex wrap="wrap" gap={16}>
        {deferredValue
          ? iconsData
              .filter((i) => i.toLowerCase().includes(deferredValue))
              .slice(0, 50)
              .map((i) => <IconCard name={i} key={i} />)
          : data?.list.map((i) => <IconCard name={i} key={i} />)}
      </Flex> */}

      {!deferredValue && hasMore && (
        <Center mt={16}>
          <Button type="button" color="dark" variant="subtle" onClick={loadMore}>
            {loadingMore ? 'Loading more...' : 'Load more icons'}
          </Button>
        </Center>
      )}
    </Box>
  )
}
