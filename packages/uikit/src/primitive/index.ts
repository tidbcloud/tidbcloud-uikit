/**
 * Don't use multiple wildcard exports(`export *`) from other third party packages to avoid ambiguous external namespace resolution
 * otherwisw tsc will make guess from one of the packages when importing
 */
export * from '@mantine/core'

export { TextInput, type TextInputProps } from './TextInput/index.js'

// Re-export @mantine/prims with custom theme
export * from './Prism/index.js'

// Re-export @mantine/notifications with custom theme
export { notifier, NotificationsProvider, type NotificationProviderProps } from './notifier/index.js'

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
export {
  DatePicker,
  DatePickerBase,
  DateRangePicker,
  Calendar,
  CalendarBase,
  RangeCalendar,
  Month,
  TimeInput,
  TimeRangeInput
} from '@mantine/dates'
export type {
  CalendarProps,
  CalendarBaseProps,
  CalendarBaseStylesNames,
  DatePickerProps,
  DatePickerBaseProps,
  DatePickerBaseSharedProps,
  DatePickerStylesNames,
  DateRangePickerProps,
  DateRangePickerValue,
  RangeCalendarProps,
  MonthProps,
  TimeInputProps,
  TimeInputStylesNames,
  TimeInputStylesParams,
  DayKeydownPayload,
  DayModifiers,
  MonthSettings,
  TimeRangeInputProps,
  TimeRangeInputStylesNames,
  TimeRangeInputStylesParams
} from '@mantine/dates'

export * from './Typography/index.js'
