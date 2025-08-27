import { useUncontrolled } from '../../hooks/index.js'
import { IconChevronRight } from '../../icons/index.js'
import { Box, BoxProps, Card, CardProps, Collapse, Group, GroupProps } from '../../primitive/index.js'

export interface CollapsibleCardProps extends Omit<CardProps, 'onChange'> {
  title: React.ReactNode
  children: React.ReactNode
  opened?: boolean
  defaultOpened?: boolean
  headerProps?: GroupProps
  contentProps?: BoxProps
  onToggle?: (opened: boolean) => void
  onTransitionEnd?: (opened: boolean) => void
}

export const CollapsibleCard = ({
  children,
  title,
  opened,
  defaultOpened = false,
  headerProps,
  contentProps,
  onToggle,
  onTransitionEnd
}: CollapsibleCardProps) => {
  const [finalOpened, setOpened] = useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange: onToggle
  })

  const handleToggle = () => {
    setOpened(!finalOpened)
  }

  return (
    <Card>
      <Card.Section>
        <Group
          onClick={handleToggle}
          align="center"
          sx={{
            cursor: 'pointer',
            userSelect: 'none',
            borderBottom: finalOpened ? '1px solid var(--mantine-color-carbon-3)' : undefined
          }}
          p={16}
          bg="carbon.2"
          {...headerProps}
        >
          <IconChevronRight
            size={18}
            sx={{
              transform: finalOpened ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 200ms ease'
            }}
          />

          {title}
        </Group>
      </Card.Section>

      <Card.Section>
        <Collapse in={finalOpened} onTransitionEnd={onTransitionEnd ? () => onTransitionEnd(finalOpened) : undefined}>
          <Box p={16} {...contentProps}>
            {children}
          </Box>
        </Collapse>
      </Card.Section>
    </Card>
  )
}
