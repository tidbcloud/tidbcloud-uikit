import { ReactNode } from 'react'

import {
  Card,
  CardProps,
  DividerProps,
  Group,
  GroupProps,
  Divider as MantineDivider,
  Stack,
  Typography,
  TypographyProps
} from '../../primitive/index.js'

export interface PropertyCardProps extends CardProps {
  title: string
}

const PropertyCard = ({ title, children, ...rest }: PropertyCardProps) => {
  return (
    <Card p="xl" {...rest}>
      <Typography variant="headline-sm" mb={16}>
        {title}
      </Typography>
      <Stack spacing={16}>{children}</Stack>
    </Card>
  )
}

export interface PropertyCardItemProps extends GroupProps {
  label: string
  value: ReactNode
  labelProps?: TypographyProps
  valueProps?: TypographyProps
}

const Item = ({ label, value, labelProps, valueProps, ...rest }: PropertyCardItemProps) => {
  return (
    <Group spacing="md" noWrap {...rest}>
      <Typography variant="body2" miw={128} {...labelProps}>
        {label}
      </Typography>
      <Typography variant="body1" sx={{ wordBreak: 'break-all' }} {...valueProps}>
        {value}
      </Typography>
    </Group>
  )
}

const Divider = (props: DividerProps) => {
  return <MantineDivider color="gray.3" my="xs" {...props} />
}

PropertyCard.Item = Item
PropertyCard.Divider = Divider

export { PropertyCard }
