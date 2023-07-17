import { MantineThemeOther } from '@mantine/core'
import type { Tuple } from '@mantine/styles/lib/theme/types'

export type ShadingColor = Tuple<string, 10>

// Colors refer to https://www.figma.com/file/O562Fj2W2zpG2jQsmjeFeB/Color?node-id=280%3A7160&t=y7XkeNLqQTK4SvXK-1

export const gray = [
  '#171717',
  '#222222',
  '#292929',
  '#353535',
  '#393939',
  '#707070',
  '#888888',
  '#C6C6C6',
  '#E8E8E8',
  '#F4F4F4'
] as ShadingColor

export const blue = [
  '#021422',
  '#032943',
  '#04365A',
  '#064470',
  '#085F9D',
  '#096CB4',
  '#0B88E0',
  '#0CA6F2',
  '#54C0F5',
  '#85D2F8'
] as ShadingColor

/**
 * we do not have cyan for now
 */
export const cyan = blue
export const sky = blue

export const red = [
  '#1E0A0C',
  '#3B1417',
  '#4F1B1F',
  '#622127',
  '#8A2F37',
  '#9E363E',
  '#C5434E',
  '#E65C5C',
  '#F08D83',
  '#F3AEAE'
] as ShadingColor

export const green = [
  '#091A10',
  '#123521',
  '#18462C',
  '#1D5737',
  '#297B4C',
  '#2F8C57',
  '#3BAF6D',
  '#52CC7A',
  '#7BE092',
  '#A8E5BD'
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
  '#1A282D',
  '#1A282D',
  '#1D2F37',
  '#203740',
  '#274553',
  '#2A4D5D',
  '#305C70',
  '#517889',
  '#85A1AE',
  '#CBD7DD'
] as ShadingColor

export const yellow = [
  '#1F1503',
  '#3E2905',
  '#533707',
  '#684508',
  '#92610C',
  '#A66E0E',
  '#D08A11',
  '#F2AA18',
  '#F7C550',
  '#F9D48B'
] as ShadingColor

export const themeColors = {
  gray,
  cyan,
  red,
  yellow,
  green,
  slate,
  sky,
  blue,
  purple
}

export const Colors: MantineThemeOther = {
  black: '#FFFFFF',
  white: '#111111',
  transparent: 'transparent',
  red: themeColors.red[7],
  yellow: themeColors.yellow[7],
  green: themeColors.green[7],
  blue: themeColors.blue[7],
  purple: themeColors.purple[7],
  gray: themeColors.gray[7],
  cyan: themeColors.cyan[7],

  hover: themeColors.gray[2],
  disabled: themeColors.gray[5],
  /** primary theme color */
  primary: themeColors.blue[7],
  success: themeColors.green[7],
  alert: themeColors.red[7],
  warning: themeColors.yellow[7]
}
