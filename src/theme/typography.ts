import { TypographyOptions } from '@mui/material/styles/createTypography'
import ThemeConstants from './constants'
import { pxToRem } from './helpers'
import { TypographyOptionsType } from './theme'

const {
  htmlFontSize,
  fontFamily,
  fontSize,
  fontWeightLight, //300
  fontWeightRegular, //400
  fontWeightMedium, //500
  fontWeightSemiBold, //600
  fontWeightBold, //700
} = ThemeConstants

const typography: TypographyOptionsType = {
  htmlFontSize,
  fontFamily,
  fontSize,
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontWeightSemiBold,
  fontWeightBold,
  h1: {
    fontWeight: fontWeightBold,
    fontSize: pxToRem(39.6),
    lineHeight: '51.48px',
    textTransform: 'none',
    '@media (max-width:1279px)': {
      fontSize: pxToRem(37.8),
      lineHeight: '45.36px',
    },
  },
  h2: {
    fontWeight: fontWeightBold,
    fontSize: pxToRem(30.8),
    lineHeight: '40.04px',
    textTransform: 'none',
    '@media (max-width:1279px)': {
      fontSize: pxToRem(29.4),
      lineHeight: '35.28px',
    },
  },
  h3: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(266.4),
    lineHeight: '34.32px',
    textTransform: 'none',
    '@media (max-width:1279px)': {
      fontSize: pxToRem(25.2),
      lineHeight: '30.24px',
    },
  },
  h4: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(22),
    lineHeight: '28.6px',
    textTransform: 'none',
    '@media (max-width:1279px)': {
      fontSize: pxToRem(21),
      lineHeight: '25.2px',
    },
  },
  h5: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(19.8),
    lineHeight: '25.74px',
    textTransform: 'none',
    '@media (max-width:1279px)': {
      fontSize: pxToRem(18.9),
      lineHeight: '22.68px',
    }
  },
  h6: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(17.53),
    lineHeight: '22.79px',
    textTransform: 'none',
    '@media (max-width:1279px)': {
      fontSize: pxToRem(16.74),
      lineHeight: '20.09px',
    }
  },

  subtitle1: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(16.43),
    lineHeight: '21.36px',
    textTransform: 'none',
    '@media (max-width:1279px)': {
      fontSize: pxToRem(15.69),
      lineHeight: '18.83px',
    },
  },
  subtitle2: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(13.2),
    lineHeight: '17.16px',
    textTransform: 'none',
    '@media (max-width:1279px)': {
      fontSize: pxToRem(12.6),
      lineHeight: '15.12px',
    }
  },
  body1: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(15.4),
    lineHeight: '20.02px',
    textTransform: 'none',
    '@media (max-width:1279px)': {
      fontSize: pxToRem(14.7),
      lineHeight: '17.64px',
    },
  },
  body2: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(14.43),
    lineHeight: '18.76px',
    textTransform: 'none',
    '@media (max-width:1279px)': {
      fontSize: pxToRem(13.78),
      lineHeight: '16.54px',
    },
  },
  button: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(16.5),
    lineHeight: '21.45px',
    textTransform: 'uppercase',
    '@media (max-width:1279px)': {
      fontSize: pxToRem(15.75),
      lineHeight: '18.9px',
    },
  },
  caption: {
    fontWeight: fontWeightRegular,
    fontSize: pxToRem(13.2),
    lineHeight: '17.16px',
    textTransform: 'none',
    '@media (max-width:1279px)': {
      fontSize: pxToRem(12.6),
      lineHeight: '15.12px',
    },
  },
  overline: {
    fontWeight: fontWeightMedium,
    fontSize: pxToRem(11),
    lineHeight: '14.3px',
    textTransform: 'none',
    '@media (max-width:1279px )': {
      fontSize: pxToRem(10.5),
      lineHeight: '12.6px',
    },
  },
}

export default typography
