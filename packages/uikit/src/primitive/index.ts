/**
 * Don't use wildcard exports(`export *`) from other packages to avoid ambiguous external namespace resolution
 * otherwisw tsc will make guess from one of the packages when importing
 */
export * from '@mantine/core'

// Re-export `mantine` components with laoder patch
export { ActionIcon } from './ActionIcon'
export { Button } from './Button'
export { Loader } from './Loader'
export { LoadingOverlay } from './LoadingOverlay'
export { Notification } from './Notification'
export { Stepper } from './Stepper'

// Re-export @mantine/prims with custom theme
export * from './Prism'

// Re-export @mantine/notifications with custom theme
export { notifier, NotificationsProvider, type NotificationProviderProps } from './notifier'

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
  DropzoneFullScreenStylesName,
  DropzoneIdleProps,
  DropzoneProps,
  DropzoneRejectProps,
  DropzoneStylesNames,
  DropzoneStylesParams
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
export { DatePicker, DateRangePicker, Calendar, RangeCalendar, Month, TimeInput } from '@mantine/dates'
export type {
  CalendarProps,
  DatePickerProps,
  DatePickerStylesNames,
  DateRangePickerProps,
  DateRangePickerValue,
  RangeCalendarProps,
  MonthProps,
  TimeInputProps,
  DayKeydownPayload,
  DayModifiers,
  MonthSettings
} from '@mantine/dates'

// Re-export Typography for convenience
export * from '../biz/Typography'
