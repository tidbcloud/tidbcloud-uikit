import { MantineStyleSystemProps, Text, TextProps } from '@mantine/core'
import { createPolymorphicComponent } from '@mantine/utils'
import React from 'react'

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

export const TYPOGRAPHY_STYLES_MAP: Record<TypographyVariants | TypographyVariantsV2, MantineStyleSystemProps> = {
  title: {
    fw: 700,
    fz: 18,
    lh: '28px',
    c: 'gray.8'
  },
  display: {
    fw: 700,
    fz: 24,
    lh: '32px'
  },
  heading: {
    fw: 700,
    fz: 20,
    lh: '30px'
  },
  subtitle2: {
    fw: 700,
    fz: 16,
    lh: '24px',
    c: 'gray.7'
  },
  body1: {
    fw: 400,
    fz: 14,
    lh: '20px',
    c: 'gray.7'
  },
  body2: {
    fw: 500,
    fz: 14,
    lh: '20px',
    c: 'gray.8'
  },
  body3: {
    fw: 600,
    fz: 14,
    lh: '20px',
    c: 'gray.9'
  },
  btn: {
    fw: 700,
    fz: 14,
    lh: '20px',
    c: 'gray.8'
  },
  comment3: {
    fz: 12,
    lh: '18px',
    fw: 600
  },
  // v2 variants
  'headline-lg': {
    fz: 24,
    lh: '32px',
    fw: 700,
    c: 'gray.9'
  },
  'headline-md': {
    fz: 20,
    lh: '30px',
    fw: 700,
    c: 'gray.9'
  },
  'headline-sm': {
    fz: 18,
    lh: '28px',
    fw: 700,
    c: 'gray.9'
  },
  'title-lg': {
    fz: 16,
    lh: '24px',
    fw: 700,
    c: 'gray.9'
  },
  'title-md': {
    fz: 14,
    lh: '20px',
    fw: 700,
    c: 'gray.9'
  },
  'title-sm': {
    fz: 12,
    lh: '18px',
    fw: 700,
    c: 'gray.9'
  },
  'action-lg': {
    fz: 16,
    lh: '24px',
    fw: 600,
    c: 'cyan.7'
  },
  'action-md': {
    fz: 14,
    lh: '20px',
    fw: 600,
    c: 'cyan.7'
  },
  'action-sm': {
    fz: 12,
    lh: '18px',
    fw: 600,
    c: 'cyan.7'
  },
  'label-lg': {
    fz: 14,
    lh: '20px',
    fw: 500,
    c: 'gray.8'
  },
  'label-md': {
    fz: 13,
    lh: '18px',
    fw: 500,
    c: 'gray.8'
  },
  'label-sm': {
    fz: 12,
    lh: '18px',
    fw: 500,
    c: 'gray.8'
  },
  'label-xs': {
    fz: 11,
    lh: '16px',
    fw: 500,
    c: 'gray.8'
  },
  'body-lg': {
    fz: 14,
    lh: '20px',
    fw: 400,
    c: 'gray.7'
  },
  'body-md': {
    fz: 13,
    lh: '18px',
    fw: 400,
    c: 'gray.7'
  },
  'body-sm': {
    fz: 12,
    lh: '18px',
    fw: 400,
    c: 'gray.7'
  },
  'body-xs': {
    fz: 11,
    lh: '16px',
    fw: 400,
    c: 'gray.7'
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
