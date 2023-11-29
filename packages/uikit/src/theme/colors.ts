import { MantineThemeOther } from '@mantine/core'
import type { Tuple } from '@mantine/styles/lib/theme/types'

export type ShadingColor = Tuple<string, 10>

// Colors refer to https://www.figma.com/file/O562Fj2W2zpG2jQsmjeFeB/Color?node-id=280%3A7160&t=y7XkeNLqQTK4SvXK-1

export const gray = [
  '#FDFDFD',
  '#F9F9F9',
  '#F4F4F4',
  '#EDEDED',
  '#E6E6E6',
  '#BBBBBB',
  '#737373',
  '#555555',
  '#333333',
  '#191919'
] as ShadingColor

export const blue = [
  '#FAFDFF',
  '#F3FAFE',
  '#E7F7FE',
  '#CEEDFC',
  '#B6E4FB',
  '#85D2F8',
  '#54C0F5',
  '#0CA6F2',
  '#0B88E0',
  '#095EB2'
] as ShadingColor

/**
 * we do not have cyan for now
 */
export const cyan = blue
export const sky = blue

export const red = [
  '#FFFCFC',
  '#FEF7F7',
  '#FDEFEF',
  '#FBE7E7',
  '#F8CECE',
  '#F3AEAE',
  '#F08D83',
  '#E65C5C',
  '#C5434E',
  '#851D38'
] as ShadingColor

export const green = [
  '#FCFEFC',
  '#F6FDF8',
  '#EEFAF2',
  '#E5F7EB',
  '#CBF0D7',
  '#A8E5BD',
  '#7BE092',
  '#52CC7A',
  '#3BAF6D',
  '#1A7653'
] as ShadingColor

export const purple = [
  '#F9F5FF',
  '#F3E4FD',
  '#E5CAFC',
  '#D1ADF7',
  '#BE96EF',
  '#A273E5',
  '#7D54C4',
  '#5D39A4',
  '#402484',
  '#2B166D'
] as ShadingColor

export const slate = [
  '#FDFDFD',
  '#F9FAFB',
  '#F4F6F8',
  '#ECF0F4',
  '#E5ECEF',
  '#CBD7DD',
  '#85A1AE',
  '#517889',
  '#305C70',
  '#18475C'
] as ShadingColor

export const yellow = [
  '#FFFDFA',
  '#FEFBF4',
  '#FEF7E8',
  '#FDF2DC',
  '#FBE6BA',
  '#F9D48B',
  '#F7C550',
  '#F2AA18',
  '#D08A11',
  '#8C5307'
] as ShadingColor

export const themeColors = {
  gray,
  sky,
  cyan,
  red,
  yellow,
  green,
  slate,
  blue,
  purple
}

/**
 * @deprecated
 * Do not use this directly, use theme.other instead
 */
export const Colors: MantineThemeOther = {
  black: '#111111',
  white: '#FFFFFF',
  transparent: 'transparent',
  red: themeColors.red[5],
  yellow: themeColors.yellow[5],
  green: themeColors.green[5],
  blue: themeColors.blue[5],
  purple: themeColors.purple[5],
  gray: themeColors.gray[5],
  cyan: themeColors.cyan[5],

  hover: themeColors.gray[2],
  disabled: themeColors.gray[5],
  /** primary theme color */
  primary: themeColors.blue[7],
  success: themeColors.green[7],
  alert: themeColors.red[7],
  warning: themeColors.yellow[7]
}
