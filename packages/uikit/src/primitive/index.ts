import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/code-highlight/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/dropzone/styles.css'

import type { FactoryPayload } from '@mantine/core'
import type { EmotionSx } from '@mantine/emotion'

import type { ShadingColor } from '../theme/colors.js'
import type { Color } from '../theme/theme.js'
import type { EmotionStyles } from '../utils/emotion.js'

declare module '@mantine/core' {
  interface MantineThemeColorsOverride {
    colors: Record<Color | (string & {}), ShadingColor>
  }
  interface StylesApiPropsOverride<Payload extends FactoryPayload> {
    styles?: EmotionStyles<Payload>
  }
  interface BoxProps {
    sx?: EmotionSx
  }
}

/**
 * Don't use multiple wildcard exports(`export *`) from other third party packages to avoid ambiguous external namespace resolution
 * otherwisw tsc will make guess from one of the packages when importing
 */
export * from '@mantine/core'

export { TextInput, type TextInputProps } from './TextInput/index.js'

// Re-export @mantine/notifications with custom theme
export { notifier, Notifications } from './notifier/index.js'

// Re-export @mantine/dropzone
export {
  Dropzone,
  MIME_TYPES,
  MS_EXCEL_MIME_TYPE,
  MS_POWERPOINT_MIME_TYPE,
  MS_WORD_MIME_TYPE,
  EXE_MIME_TYPE,
  PDF_MIME_TYPE,
  IMAGE_MIME_TYPE
} from '@mantine/dropzone'
export type {
  DropzoneAcceptProps,
  DropzoneFullScreenProps,
  DropzoneFullScreenStylesNames,
  DropzoneIdleProps,
  DropzoneProps,
  DropzoneRejectProps,
  DropzoneStylesNames
} from '@mantine/dropzone'

// Re-export @mantine/carousel
export { Carousel, useAnimationOffsetEffect } from '@mantine/carousel'
export type { CarouselProps, CarouselStylesNames, Embla } from '@mantine/carousel'

// Re-export @mantine/modals
export {
  ModalsProvider,
  useModals,
  openModal,
  openConfirmModal,
  openContextModal,
  closeModal,
  closeAllModals
} from '@mantine/modals'
export type { ModalsProviderProps, ContextModalProps } from '@mantine/modals'

// Re-export @mantine/dates
export { DatePicker, DatePickerInput, Calendar, Month, TimeInput } from '@mantine/dates'
export type {
  CalendarProps,
  CalendarBaseProps,
  DatePickerType,
  DatePickerProps,
  DatePickerInputProps,
  DatePickerStylesNames,
  MonthProps,
  TimeInputProps,
  MonthSettings
} from '@mantine/dates'

export * from './Typography/index.js'
export * from '../theme/ThemeProvider.js'
