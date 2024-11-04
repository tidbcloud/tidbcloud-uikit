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

export type * from '@mantine/core'
export {
  // Layout
  AppShell,
  AspectRatio,
  Center,
  Container,
  Flex,
  Grid,
  Group,
  SimpleGrid,
  Space,
  Stack,

  // Inputs
  Checkbox,
  Chip,
  ColorInput,
  ColorPicker,
  HueSlider,
  AlphaSlider,
  Fieldset,
  FileInput,
  Input,
  InputBase,
  JsonInput,
  NativeSelect,
  NumberInput,
  PasswordInput,
  PinInput,
  Radio,
  Rating,
  SegmentedControl,
  Slider,
  RangeSlider,
  Switch,
  Textarea,

  // Combobox
  Autocomplete,
  Combobox,
  MultiSelect,
  Pill,
  PillsInput,
  Select,
  TagsInput,

  // Buttons
  ActionIcon,
  Button,
  CloseButton,
  CopyButton,
  FileButton,
  UnstyledButton,

  // Navigation
  Anchor,
  Breadcrumbs,
  Burger,
  NavLink,
  Pagination,
  Stepper,
  Tabs,
  Tree,

  // Feedback
  Alert,
  Loader,
  Notification,
  Progress,
  RingProgress,
  SemiCircleProgress,
  Skeleton,

  // Overlays
  Affix,
  Dialog,
  Drawer,
  FloatingIndicator,
  HoverCard,
  LoadingOverlay,
  Menu,
  Modal,
  Overlay,
  Popover,
  Tooltip,

  // Data display
  Accordion,
  Avatar,
  BackgroundImage,
  Badge,
  Card,
  ColorSwatch,
  Image,
  Indicator,
  Kbd,
  NumberFormatter,
  Spoiler,
  ThemeIcon,
  Timeline,

  // Typography
  Blockquote,
  Code,
  Highlight,
  List,
  Mark,
  Table,
  Text,
  Title,
  TypographyStylesProvider,

  // Misc
  Box,
  Collapse,
  Divider,
  FocusTrap,
  Paper,
  Portal,
  ScrollArea,
  Transition,
  VisuallyHidden,

  // Utils
  rgba,
  rem
} from '@mantine/core'

// should be for internal usage only
export { useInputProps } from '@mantine/core'
export { useMantineTheme, useCombobox } from '@mantine/core'

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

// Re-export wrapped components
export { TextInput, type TextInputProps } from './TextInput/index.js'
export { notifier } from './notifier/index.js'
export { Typography, type TypographyProps } from './Typography/index.js'
export { ThemeProvider, type ThemeProviderProps } from '../theme/ThemeProvider.js'
