import { useDisclosure } from '../../hooks/index.js'
import { IconChevronRight } from '../../icons/index.js'
import { Box, Card, CardProps, Collapse, Group } from '../../primitive/index.js'

export interface CollapsibleCardProps extends CardProps {
  title: React.ReactNode
  children: React.ReactNode

  defaultOpened?: boolean
}

export const CollapsibleCard = ({ children, title, defaultOpened = false }: CollapsibleCardProps) => {
  const [opened, { toggle }] = useDisclosure(defaultOpened)

  return (
    <Card>
      <Card.Section>
        <Group onClick={toggle} align="center" sx={{ cursor: 'pointer', userSelect: 'none' }} p={16} bg="carbon.2">
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
          <Box p={16}>{children}</Box>
        </Collapse>
      </Card.Section>
    </Card>
  )
}
