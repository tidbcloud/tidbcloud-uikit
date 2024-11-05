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

export type ColorScheme = 'light' | 'dark'

export {
  // Layout
  AppShell,
  type AppShellProps,
  AspectRatio,
  type AspectRatioProps,
  Center,
  type CenterProps,
  Container,
  type ContainerProps,
  Flex,
  type FlexProps,
  Grid,
  type GridProps,
  Group,
  type GroupProps,
  SimpleGrid,
  type SimpleGridProps,
  Space,
  type SpaceProps,
  Stack,
  type StackProps,

  // Inputs
  Checkbox,
  type CheckboxProps,
  type CheckboxGroupProps,
  Chip,
  type ChipProps,
  type ChipGroupProps,
  ColorInput,
  type ColorInputProps,
  ColorPicker,
  type ColorPickerProps,
  HueSlider,
  AlphaSlider,
  Fieldset,
  type FieldsetProps,
  FileInput,
  type FileInputProps,
  Input,
  type InputProps,
  type InputWrapperProps,
  type InputErrorProps,
  type InputLabelProps,
  type InputPlaceholderProps,
  InputBase,
  type InputBaseProps,
  JsonInput,
  type JsonInputProps,
  NativeSelect,
  type NativeSelectProps,
  NumberInput,
  type NumberInputProps,
  PasswordInput,
  type PasswordInputProps,
  PinInput,
  type PinInputProps,
  Radio,
  RadioGroup,
  RadioCard,
  type RadioProps,
  type RadioGroupProps,
  type RadioCardProps,
  Rating,
  type RatingProps,
  SegmentedControl,
  type SegmentedControlProps,
  type SegmentedControlItem,
  Slider,
  type SliderProps,
  RangeSlider,
  type RangeSliderProps,
  Switch,
  type SwitchProps,
  Textarea,
  type TextareaProps,

  // Combobox
  Autocomplete,
  type AutocompleteProps,
  Combobox,
  type ComboboxProps,
  MultiSelect,
  type MultiSelectProps,
  Pill,
  type PillProps,
  PillsInput,
  type PillsInputProps,
  Select,
  type SelectProps,
  TagsInput,
  type TagsInputProps,

  // Buttons
  ActionIcon,
  type ActionIconProps,
  Button,
  type ButtonProps,
  CloseButton,
  type CloseButtonProps,
  CopyButton,
  type CopyButtonProps,
  FileButton,
  type FileButtonProps,
  UnstyledButton,
  type UnstyledButtonProps,

  // Navigation
  Anchor,
  type AnchorProps,
  Breadcrumbs,
  type BreadcrumbsProps,
  Burger,
  type BurgerProps,
  NavLink,
  type NavLinkProps,
  Pagination,
  type PaginationProps,
  Stepper,
  type StepperProps,
  Tabs,
  type TabsProps,
  Tree,
  type TreeProps,

  // Feedback
  Alert,
  type AlertProps,
  Loader,
  type LoaderProps,
  Notification,
  type NotificationProps,
  Progress,
  type ProgressProps,
  RingProgress,
  type RingProgressProps,
  SemiCircleProgress,
  type SemiCircleProgressProps,
  Skeleton,
  type SkeletonProps,

  // Overlays
  Affix,
  type AffixProps,
  Dialog,
  type DialogProps,
  Drawer,
  type DrawerProps,
  FloatingIndicator,
  type FloatingIndicatorProps,
  HoverCard,
  type HoverCardProps,
  LoadingOverlay,
  type LoadingOverlayProps,
  Menu,
  type MenuProps,
  Modal,
  type ModalProps,
  Overlay,
  type OverlayProps,
  Popover,
  type PopoverProps,
  Tooltip,
  type TooltipProps,

  // Data display
  Accordion,
  type AccordionProps,
  Avatar,
  type AvatarProps,
  BackgroundImage,
  type BackgroundImageProps,
  Badge,
  type BadgeProps,
  Card,
  type CardProps,
  ColorSwatch,
  type ColorSwatchProps,
  Image,
  type ImageProps,
  Indicator,
  type IndicatorProps,
  Kbd,
  type KbdProps,
  NumberFormatter,
  type NumberFormatterProps,
  Spoiler,
  type SpoilerProps,
  ThemeIcon,
  type ThemeIconProps,
  Timeline,
  type TimelineProps,

  // Typography
  Blockquote,
  type BlockquoteProps,
  Code,
  type CodeProps,
  Highlight,
  type HighlightProps,
  List,
  type ListProps,
  Mark,
  type MarkProps,
  Table,
  type TableProps,
  Text,
  type TextProps,
  Title,
  type TitleProps,
  TypographyStylesProvider,
  type TypographyStylesProviderProps,

  // Misc
  Box,
  type BoxProps,
  Collapse,
  type CollapseProps,
  Divider,
  type DividerProps,
  FocusTrap,
  type FocusTrapProps,
  Paper,
  type PaperProps,
  Portal,
  type PortalProps,
  ScrollArea,
  type ScrollAreaProps,
  Transition,
  type TransitionProps,
  VisuallyHidden,
  type VisuallyHiddenProps,

  // Utils
  ColorSchemeScript,
  type ColorSchemeScriptProps,
  type MantineSize,
  type ElementProps,

  // Better only for internal usage but exceptions are allowed
  useInputProps,
  useMantineTheme,
  useCombobox,
  useComputedColorScheme
} from '@mantine/core'

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
export { Typography, TYPOGRAPHY_STYLES_MAP, type TypographyProps } from './Typography/index.js'
