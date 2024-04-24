import { ReactNode, Children, cloneElement } from 'react'

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
  labelProps?: TypographyProps
  valueProps?: TypographyProps
}

const PropertyCard = ({ title, children, labelProps, valueProps, ...rest }: PropertyCardProps) => {
  const renderChildren = () => {
    return Children.map(children, (child) => {
      if (!child || typeof child !== 'object' || !('props' in child)) {
        return child
      }

      return cloneElement(child, {
        ...child.props,
        labelProps: {
          ...labelProps,
          ...child.props.labelProps
        },
        valueProps: {
          ...valueProps,
          ...child.props.valueProps
        }
      })
    })
  }

  return (
    <Card p="xl" {...rest}>
      <Typography variant="headline-sm" mb={16}>
        {title}
      </Typography>
      <Stack spacing={16}>{renderChildren()}</Stack>
    </Card>
  )
}

export interface PropertyCardItemProps extends GroupProps {
  label: string
  labelProps?: TypographyProps
  valueProps?: TypographyProps
}

const Item = ({ label, children, labelProps, valueProps, ...rest }: PropertyCardItemProps) => {
  return (
    <Group spacing="md" noWrap {...rest}>
      <Typography variant="label-lg" miw={128} {...labelProps}>
        {label}
      </Typography>
      <Typography variant="body-lg" sx={{ wordBreak: 'break-all' }} {...valueProps}>
        {children}
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
