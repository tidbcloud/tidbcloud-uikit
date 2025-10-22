import { createContext, useContext, useMemo } from 'react'

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
  title?: string
  labelProps?: TypographyProps
  valueProps?: TypographyProps
}

interface PropertyCardContextValue {
  labelProps?: TypographyProps
  valueProps?: TypographyProps
}

const PropertyCardContext = createContext<PropertyCardContextValue | undefined>(undefined)

const PropertyCard = ({ title, children, labelProps, valueProps, ...rest }: PropertyCardProps) => {
  const contextValue = useMemo(
    () => ({
      labelProps,
      valueProps
    }),
    [labelProps, valueProps]
  )

  return (
    <Card p="xl" {...rest}>
      {title && (
        <Typography variant="headline-sm" mb={16}>
          {title}
        </Typography>
      )}
      <PropertyCardContext.Provider value={contextValue}>
        <Stack gap={16}>{children}</Stack>
      </PropertyCardContext.Provider>
    </Card>
  )
}

export interface PropertyCardItemProps extends GroupProps {
  label: string
  labelProps?: TypographyProps
  valueProps?: TypographyProps
}

const Item = ({ label, children, labelProps, valueProps, ...rest }: PropertyCardItemProps) => {
  const context = useContext(PropertyCardContext)
  const mergedLabelProps = {
    ...context?.labelProps,
    ...labelProps
  }
  const mergedValueProps = {
    ...context?.valueProps,
    ...valueProps
  }

  return (
    <Group gap="md" wrap="nowrap" {...rest}>
      <Typography variant="label-lg" miw={128} {...mergedLabelProps}>
        {label}
      </Typography>
      <Typography variant="body-lg" sx={{ wordBreak: 'break-all' }} {...mergedValueProps}>
        {children}
      </Typography>
    </Group>
  )
}

const Divider = (props: DividerProps) => {
  return <MantineDivider color="carbon.4" my="xs" {...props} />
}

PropertyCard.Item = Item
PropertyCard.Divider = Divider

export { PropertyCard }
