import { IconCopy01 } from '../../icons/index.js'
import { TypographyProps, TooltipProps } from '../../primitive/index.js'
import { Box, CopyButton, Typography, Tooltip, BoxProps, ActionIcon } from '../../primitive/index.js'
import { mergeSxList } from '../../utils/index.js'

export interface FormCopyTextProps extends BoxProps {
  value: string
  timeout?: number
  onClick?: () => void
  valueProps?: TypographyProps
  tooltipProps?: TooltipProps
  size?: number
}

export const FormCopyText = ({
  timeout = 3000,
  value,
  valueProps,
  tooltipProps,
  size = 16,
  ...props
}: FormCopyTextProps) => {
  return (
    <CopyButton value={value} timeout={timeout}>
      {({ copied, copy }) => (
        <Box
          sx={mergeSxList([
            (theme) => ({
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 12,
              paddingRight: 8,
              height: 40,
              borderRadius: theme.defaultRadius,
              backgroundColor: theme.colors.carbon[2],
              border: `1px solid ${theme.colors.carbon[5]}`
            }),
            props.sx
          ])}
          {...props}
        >
          <Typography
            variant="body-lg"
            c="carbon.8"
            sx={mergeSxList([
              () => ({
                flex: '1',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                marginRight: 8
              }),
              valueProps?.sx
            ])}
            {...valueProps}
          >
            {value}
          </Typography>
          <Tooltip label={copied ? 'Copied' : 'Copy'} withArrow {...tooltipProps}>
            <ActionIcon aria-label="Copy" color="carbon.8" variant="transparent" onClick={copy}>
              <IconCopy01
                size={size}
                onClick={() => {
                  copy()
                  props.onClick?.()
                }}
              />
            </ActionIcon>
          </Tooltip>
        </Box>
      )}
    </CopyButton>
  )
}
