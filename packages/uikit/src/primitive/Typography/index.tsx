import { createPolymorphicComponent, MantineStyleProps, Text, TextProps } from '@mantine/core'
import { forwardRef } from 'react'

type TypographyVariants =
  | 'headline-lg'
  | 'headline-md'
  | 'headline-sm'
  | 'title-lg'
  | 'title-md'
  | 'title-sm'
  | 'action-lg'
  | 'action-md'
  | 'action-sm'
  | 'label-lg'
  | 'label-md'
  | 'label-sm'
  | 'label-xs'
  | 'body-lg'
  | 'body-md'
  | 'body-sm'
  | 'body-xs'

export interface TypographyProps extends Omit<TextProps, 'variant'> {
  variant?: TypographyVariants
}

export const TYPOGRAPHY_STYLES_MAP: Record<TypographyVariants, MantineStyleProps> = {
  // v2 variants
  'headline-lg': {
    fz: 24,
    lh: '32px',
    fw: 700,
    c: 'carbon.9'
  },
  'headline-md': {
    fz: 20,
    lh: '30px',
    fw: 700,
    c: 'carbon.9'
  },
  'headline-sm': {
    fz: 18,
    lh: '28px',
    fw: 700,
    c: 'carbon.9'
  },
  'title-lg': {
    fz: 16,
    lh: '24px',
    fw: 700,
    c: 'carbon.9'
  },
  'title-md': {
    fz: 14,
    lh: '20px',
    fw: 700,
    c: 'carbon.9'
  },
  'title-sm': {
    fz: 12,
    lh: '18px',
    fw: 700,
    c: 'carbon.9'
  },
  'action-lg': {
    fz: 16,
    lh: '24px',
    fw: 600,
    c: 'peacock.7'
  },
  'action-md': {
    fz: 14,
    lh: '20px',
    fw: 600,
    c: 'peacock.7'
  },
  'action-sm': {
    fz: 12,
    lh: '18px',
    fw: 600,
    c: 'peacock.7'
  },
  'label-lg': {
    fz: 14,
    lh: '20px',
    fw: 500,
    c: 'carbon.8'
  },
  'label-md': {
    fz: 13,
    lh: '18px',
    fw: 500,
    c: 'carbon.8'
  },
  'label-sm': {
    fz: 12,
    lh: '18px',
    fw: 500,
    c: 'carbon.8'
  },
  'label-xs': {
    fz: 11,
    lh: '16px',
    fw: 500,
    c: 'carbon.8'
  },
  'body-lg': {
    fz: 14,
    lh: '20px',
    fw: 400,
    c: 'carbon.8'
  },
  'body-md': {
    fz: 13,
    lh: '18px',
    fw: 400,
    c: 'carbon.8'
  },
  'body-sm': {
    fz: 12,
    lh: '18px',
    fw: 400,
    c: 'carbon.8'
  },
  'body-xs': {
    fz: 11,
    lh: '16px',
    fw: 400,
    c: 'carbon.8'
  }
}

const _Typography = forwardRef<HTMLDivElement, React.PropsWithChildren<TypographyProps>>(
  ({ children, variant, ...rest }, ref) => {
    const styleProps = variant ? TYPOGRAPHY_STYLES_MAP[variant] : {}
    return (
      <Text ref={ref} {...styleProps} {...rest}>
        {children}
      </Text>
    )
  }
)

export const Typography = createPolymorphicComponent<'div', TypographyProps>(_Typography)
