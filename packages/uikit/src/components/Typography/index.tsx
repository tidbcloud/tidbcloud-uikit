import { MantineStyleSystemProps, Text, TextProps } from '@mantine/core'
import { createPolymorphicComponent } from '@mantine/utils'

type TypographyVariants =
  | 'title'
  | 'display'
  | 'heading'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'btn'
  | 'comment3'

type TypographyVariantsV2 =
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
  variant?: TypographyVariants | TypographyVariantsV2
}

export const TYPOGRAPHY_STYLES_MAP: Record<
  TypographyVariants | TypographyVariantsV2,
  MantineStyleSystemProps & Pick<TextProps, 'size' | 'color' | 'weight'>
> = {
  title: {
    weight: 700,
    size: 18,
    lh: '28px',
    color: 'gray.8'
  },
  display: {
    weight: 700,
    size: 24,
    lh: '32px'
  },
  heading: {
    weight: 700,
    size: 20,
    lh: '30px'
  },
  subtitle2: {
    weight: 700,
    size: 16,
    lh: '24px',
    color: 'gray.7'
  },
  body1: {
    weight: 400,
    size: 14,
    lh: '20px',
    color: 'gray.7'
  },
  body2: {
    weight: 500,
    size: 14,
    lh: '20px',
    color: 'gray.8'
  },
  body3: {
    weight: 600,
    size: 14,
    lh: '20px',
    color: 'gray.9'
  },
  btn: {
    weight: 700,
    size: 14,
    lh: '20px',
    color: 'gray.8'
  },
  comment3: {
    size: 12,
    lh: '18px',
    weight: 600
  },
  // v2 variants
  'headline-lg': {
    size: 24,
    lh: '32px',
    weight: 700,
    color: 'gray.9'
  },
  'headline-md': {
    size: 20,
    lh: '30px',
    weight: 700,
    color: 'gray.9'
  },
  'headline-sm': {
    size: 18,
    lh: '28px',
    weight: 700,
    color: 'gray.9'
  },
  'title-lg': {
    size: 16,
    lh: '24px',
    weight: 700,
    color: 'gray.9'
  },
  'title-md': {
    size: 14,
    lh: '20px',
    weight: 700,
    color: 'gray.9'
  },
  'title-sm': {
    size: 12,
    lh: '18px',
    weight: 700,
    color: 'gray.9'
  },
  'action-lg': {
    size: 16,
    lh: '24px',
    weight: 600,
    color: 'cyan.7'
  },
  'action-md': {
    size: 14,
    lh: '20px',
    weight: 600,
    color: 'cyan.7'
  },
  'action-sm': {
    size: 12,
    lh: '18px',
    weight: 600,
    color: 'cyan.7'
  },
  'label-lg': {
    size: 14,
    lh: '20px',
    weight: 500,
    color: 'gray.8'
  },
  'label-md': {
    size: 13,
    lh: '18px',
    weight: 500,
    color: 'gray.8'
  },
  'label-sm': {
    size: 12,
    lh: '18px',
    weight: 500,
    color: 'gray.8'
  },
  'label-xs': {
    size: 11,
    lh: '16px',
    weight: 500,
    color: 'gray.8'
  },
  'body-lg': {
    size: 14,
    lh: '20px',
    weight: 400,
    color: 'gray.7'
  },
  'body-md': {
    size: 13,
    lh: '18px',
    weight: 400,
    color: 'gray.7'
  },
  'body-sm': {
    size: 12,
    lh: '18px',
    weight: 400,
    color: 'gray.7'
  },
  'body-xs': {
    size: 11,
    lh: '16px',
    weight: 400,
    color: 'gray.7'
  }
}

const _Typography: React.FC<TypographyProps> = ({ children, variant, ...rest }) => {
  const style = variant ? TYPOGRAPHY_STYLES_MAP[variant] : {}

  return (
    <Text {...style} {...rest}>
      {children}
    </Text>
  )
}

export const Typography = createPolymorphicComponent<'div', TypographyProps>(_Typography)
