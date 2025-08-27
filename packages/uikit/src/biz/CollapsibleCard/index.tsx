import { useDisclosure } from '../../hooks/index.js'
import { IconChevronRight } from '../../icons/index.js'
import { Box, BoxProps, Card, CardProps, Collapse, Group, GroupProps } from '../../primitive/index.js'

export interface CollapsibleCardProps extends CardProps {
  title: React.ReactNode
  children: React.ReactNode

  defaultOpened?: boolean
  headerProps?: GroupProps
  contentProps?: BoxProps
}

export const CollapsibleCard = ({
  children,
  title,
  defaultOpened = false,
  headerProps,
  contentProps
}: CollapsibleCardProps) => {
  const [opened, { toggle }] = useDisclosure(defaultOpened)

  return (
    <Card>
      <Card.Section>
        <Group
          onClick={toggle}
          align="center"
          sx={{
            cursor: 'pointer',
            userSelect: 'none',
            borderBottom: opened ? '1px solid var(--mantine-color-carbon-3)' : undefined
          }}
          p={16}
          bg="carbon.2"
          {...headerProps}
        >
          <IconChevronRight
            size={18}
            sx={{
              transform: opened ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 200ms ease'
            }}
          />

          {title}
        </Group>
      </Card.Section>

      <Card.Section>
        <Collapse in={opened}>
          <Box p={16} {...contentProps}>
            {children}
          </Box>
        </Collapse>
      </Card.Section>
    </Card>
  )
}
