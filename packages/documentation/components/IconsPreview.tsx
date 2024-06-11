import { Button } from '@components/ui/button'
import { Card } from '@components/ui/card'
import { Input } from '@components/ui/input'
import { Box, CopyButton, Flex, Typography, Center, Stack, Modal, Tooltip } from '@tidbcloud/uikit'
import { useDisclosure } from '@tidbcloud/uikit/hooks'
import * as icons from '@tidbcloud/uikit/icons'
import { IconCopy01, IconSearchLg } from '@tidbcloud/uikit/icons'
import { useInfiniteScroll, useMemoizedFn, useInViewport } from 'ahooks'
import { useState, useDeferredValue, useRef, useEffect } from 'react'

const iconsData = Object.keys(icons).filter((i) => i !== 'Icon')

function IconCard({ name, onClick }: { name: string; onClick: (name: string) => void }) {
  // @ts-ignore
  const Icon = icons[name] as any

  return (
    <>
      <Card className="w-32 p-2" style={{ cursor: 'pointer' }} onClick={() => onClick(name)}>
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

export default function IconsPreview() {
  const [value, setValue] = useState('')
  const deferredValue = useDeferredValue(value)
  const iconCount = iconsData.length
  const { data, loadMore, loadingMore } = useInfiniteScroll((d) => getLoadMoreList(d?.nextId, 100))
  const hasMore = data && data.list.length < data.total
  const [opened, handlers] = useDisclosure()
  const [iconName, setIconName] = useState('')
  const onIconClick = useMemoizedFn((name: string) => {
    setIconName(name)
    handlers.open()
  })

  // @ts-ignore
  const Icon = icons[iconName] ?? (() => null)

  const isLoadingMoreRef = useRef(false)
  const loadMoreButtonRef = useRef(null)
  const [inViewport] = useInViewport(loadMoreButtonRef)

  useEffect(() => {
    if (inViewport && !isLoadingMoreRef.current) {
      isLoadingMoreRef.current = true
      loadMore()
      isLoadingMoreRef.current = false
    }
  }, [inViewport, loadMore])

  return (
    <Box p={16}>
      <Input
        size="lg"
        placeholder={`Search all ${iconCount} icons`}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        startContent={<IconSearchLg size={24} className="mr-4" />}
        className="mb-8"
      />

      <Flex wrap="wrap" gap={16}>
        {deferredValue
          ? iconsData
              .filter((i) => i.toLowerCase().includes(deferredValue))
              .slice(0, 50)
              .map((i) => <IconCard name={i} onClick={onIconClick} key={i} />)
          : data?.list.map((i) => <IconCard name={i} onClick={onIconClick} key={i} />)}
      </Flex>

      {!deferredValue && hasMore && (
        <Center mt={16}>
          <Button type="button" onClick={loadMore} ref={loadMoreButtonRef}>
            {loadingMore ? 'Loading more...' : 'Load more icons'}
          </Button>
        </Center>
      )}

      <Modal opened={opened} onClose={() => handlers.close()} closeOnClickOutside centered size={600}>
        <Flex gap={32}>
          <Box
            sx={(theme) => ({
              border: `1px solid ${theme.colors.gray[3]}`,
              borderRadius: 4
            })}
          >
            <Icon size={180} />
          </Box>
          <Stack>
            <CopyButton value={iconName}>
              {({ copied, copy }) => (
                <Tooltip label={copied ? 'Copied!' : 'Copy name'} withArrow>
                  <Typography
                    variant="headline-lg"
                    onClick={copy}
                    sx={{
                      cursor: 'pointer',
                      '&:hover': { textDecoration: 'underline' }
                    }}
                  >
                    {iconName}
                  </Typography>
                </Tooltip>
              )}
            </CopyButton>

            <CopyButton value={`import { ${iconName} } from '@tidbcloud/uikit/icons'`}>
              {({ copied, copy }) => (
                <Button leftIcon={<IconCopy01 />} onClick={copy} variant="default">
                  {copied ? 'Copied!' : 'Copy Import'}
                </Button>
              )}
            </CopyButton>
            <CopyButton value={`<${iconName} />`}>
              {({ copied, copy }) => (
                <Button leftIcon={<IconCopy01 />} onClick={copy}>
                  {copied ? 'Copied!' : 'Copy JSX'}
                </Button>
              )}
            </CopyButton>
          </Stack>
        </Flex>
      </Modal>
    </Box>
  )
}
