import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/carousel/styles.css'
import '@mantine/dropzone/styles.css'

export type ColorScheme = 'light' | 'dark'

export type {
  AppShellProps,
  AppShellNavbarProps,
  AppShellMainProps,
  AppShellFooterProps,
  AppShellAsideProps,
  AppShellHeaderProps,
  AppShellSectionProps,
  AspectRatioProps,
  CenterProps,
  ContainerProps,
  FlexProps,
  GridProps,
  GroupProps,
  SimpleGridProps,
  SpaceProps,
  StackProps,
  CheckboxProps,
  CheckboxGroupProps,
  ChipProps,
  ChipGroupProps,
  ColorInputProps,
  ColorPickerProps,
  FieldsetProps,
  FileInputProps,
  InputProps,
  InputWrapperProps,
  InputErrorProps,
  InputLabelProps,
  InputPlaceholderProps,
  InputBaseProps,
  JsonInputProps,
  NativeSelectProps,
  PasswordInputProps,
  PinInputProps,
  RadioProps,
  RadioGroupProps,
  RadioCardProps,
  RatingProps,
  SegmentedControlProps,
  SegmentedControlItem,
  SliderProps,
  RangeSliderProps,
  SwitchProps,
  TextareaProps,
  AutocompleteProps,
  ComboboxProps,
  ComboboxItem,
  ComboboxData,
  PillProps,
  PillsInputProps,
  OptionsFilter,
  TagsInputProps,
  ActionIconProps,
  ButtonProps,
  CloseButtonProps,
  CopyButtonProps,
  FileButtonProps,
  UnstyledButtonProps,
  AnchorProps,
  BreadcrumbsProps,
  BurgerProps,
  NavLinkProps,
  PaginationProps,
  StepperProps,
  TabsProps,
  TreeProps,
  AlertProps,
  LoaderProps,
  NotificationProps,
  ProgressProps,
  RingProgressProps,
  SemiCircleProgressProps,
  SkeletonProps,
  AffixProps,
  DialogProps,
  DrawerProps,
  FloatingIndicatorProps,
  HoverCardProps,
  LoadingOverlayProps,
  MenuProps,
  ModalProps,
  OverlayProps,
  PopoverProps,
  TooltipProps,
  AccordionProps,
  AvatarProps,
  BackgroundImageProps,
  BadgeProps,
  CardProps,
  CardSectionProps,
  ColorSwatchProps,
  ImageProps,
  IndicatorProps,
  KbdProps,
  NumberFormatterProps,
  SpoilerProps,
  ThemeIconProps,
  TimelineProps,
  BlockquoteProps,
  CodeProps,
  HighlightProps,
  ListProps,
  MarkProps,
  TableProps,
  TextProps,
  TitleProps,
  TypographyStylesProviderProps,
  BoxProps,
  BoxComponentProps,
  CollapseProps,
  DividerProps,
  FocusTrapProps,
  PaperProps,
  PortalProps,
  ScrollAreaProps,
  TransitionProps,
  VisuallyHiddenProps,
  ColorSchemeScriptProps,
  MantineSize,
  ElementProps,
  OptionsData
} from '@mantine/core'

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
  PasswordInput,
  PinInput,
  Radio,
  RadioGroup,
  RadioCard,
  Rating,
  SegmentedControl,
  Slider,
  RangeSlider,
  Switch,
  Textarea,

  // Combobox
  Autocomplete,
  Combobox,
  Pill,
  PillsInput,
  TagsInput,

  // Buttons
  ActionIcon,
  CloseButton,
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
  ColorSchemeScript,

  // Better only for internal usage but exceptions are allowed
  useInputProps,
  useMantineTheme,
  useCombobox,
  useComputedColorScheme,
  defaultOptionsFilter,
  getOptionsLockup,
  getParsedComboboxData,
  isOptionsGroup,
  useProps
} from '@mantine/core'
export { useColorScheme } from '../hooks/useColorScheme.js'

// Re-export wrapped components
export { TextInput, type TextInputProps } from './TextInput/index.js'
export { notifier } from './notifier/index.js'
export { Typography, TYPOGRAPHY_STYLES_MAP, type TypographyProps } from './Typography/index.js'
export { MediaQuery, type MediaQueryProps } from './MediaQuery/index.js'
export { Select, type SelectProps, MultiSelect, type MultiSelectProps } from './Select/index.js'
export { Button } from './Button/index.js'
export { CopyButton } from './CopyButton/CopyButton.js'
export * from './Prism/index.js'
export { AnimatedNumber, type AnimatedNumberProps } from './AnimatedNumber/index.js'
export { NumberInput, type NumberInputProps } from './NumberInput/index.js'

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
