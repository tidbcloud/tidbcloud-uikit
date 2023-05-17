import { DARK_THEME, LIGHT_THEME, PartialTheme, Theme } from '@elastic/charts'
// @ts-ignore
import { mergePartial } from '@elastic/charts/dist/utils/common'
import { useMantineColorScheme } from '@mantine/core'
import { useEffect } from 'react'

import { themeColors as lightThemeColors } from '../colors'
import { themeColors as darkThemeColors } from '../colors.dark'

import { chartLightColors } from './chart.color'
import { chartDarkColors } from './chart.color.dark'
import { colorsWheel, alertColorsWheel } from './chart.color.wheel'

// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import echDarkTheme from '!style-loader?injectType=lazyStyleTag!css-loader!@elastic/charts/dist/theme_dark.css'

const themes = {
  dark: {
    // Behavior is undefined when unuse is called more often than use. Don't do that.
    // https://webpack.js.org/loaders/style-loader/#lazystyletag
    beUsed: false,
    theme: echDarkTheme
  }
}

export function useChartColors() {
  const { colorScheme } = useMantineColorScheme()
  const chartColors = colorScheme === 'dark' ? chartDarkColors : chartLightColors
  const themeColors = colorScheme === 'dark' ? darkThemeColors : lightThemeColors
  return { themeColors, chartColors, colorsWheel, alertColorsWheel }
}

export function useChartThemeConfig() {
  const { colorScheme } = useMantineColorScheme()
  const { themeColors, colorsWheel } = useChartColors()
  const overrideTheme: PartialTheme = {
    colors: {
      vizColors: colorsWheel
    },
    axes: {
      axisLine: { stroke: themeColors.gray[3] },
      tickLabel: {
        fill: themeColors.gray[6]
      },
      tickLine: {
        size: 0
      },
      axisTitle: {
        fill: themeColors.gray[9]
      },
      gridLine: {
        horizontal: {
          stroke: themeColors.gray[3]
        },
        vertical: {
          stroke: themeColors.gray[3]
        }
      }
    }
  }
  const themeConfig: Theme = mergePartial(colorScheme === 'dark' ? DARK_THEME : LIGHT_THEME, overrideTheme)

  useEffect(() => {
    if (colorScheme === 'dark' && !themes.dark.beUsed) {
      themes.dark.beUsed = true
      themes.dark.theme.use()
    }
    if (colorScheme !== 'dark' && themes.dark.beUsed) {
      themes.dark.beUsed = false
      themes.dark.theme.unuse()
    }
  }, [colorScheme])

  return {
    themeConfig
  }
}
