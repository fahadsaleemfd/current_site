//import { colors } from './color-preset.js';
import defaultColors from '@elegantstack/solid-ui-theme/src/colors'
import colors from '@elegantstack/solid-ui-theme/src/color-preset'


//Primary
const alpha = {
  alphaLighter: '#E3DA76',
  alphaLight: '#BAB361',
  alpha: '#918C4C',
  alphaDark: '#635F34',
  alphaDarker: '#403D21'
}

// Secondary
const beta = {
  betaLighter: '#E376A3',
  betaLight: '#BA6186',
  beta: '#914C69',
  betaDark: '#633347',
  betaDarker: '#40212E'
}

// Reserved
const gamma = {}

// Reserved
const psi = {}

// Neutral
const omega = {
  omegaLighter: '#74D0E3',
  omegaLight: '#62B1C1',
  omega: '#335C64',
  omegaDark: '#1D3439',
  omegaDarker: '#2E545B'
}

export default {
  ...defaultColors,
  text: "#000000",
  article: "#335B63",
  heading: "#213B40",

  ...alpha,
  ...beta,
  ...gamma,
  ...psi,
  ...omega,

  successLight: "#4BBF9E",
  success: "#2D735F",
  errorLight: "#D95D41",
  error: "#B54E36",

  white: "#F1FBFB",
  background: `#f8f8f8`,
  contentBg: "#F1FBFB",
  headerBg: `transparent`,
  headerActiveBg: "#F1FBFB",
  headerActiveColor: "#2E545B",
  footerBg: "#F1FBFB",

  mute: "#daeaed",
  highlight: "#d9f9ff",

  modes: { 
    ...defaultColors.modes,
    accessibleColor: {
      // Alpha (primary)
      alphaLighter:"#E3DA76",
      alphaLight:"#BAB361",
      alpha:"#918C4C",
      alphaDark:"#635F34",
      alphaDarker:"#403D21",
      // Beta (secondary)
      betaLighter:"#E376A3",
      betaLight:"#BA6186",
      beta:"#914C69",
      betaDark:"#633347",
      betaDarker:"#40212E",
      // Omega (neutrals)
      omegaLighter:"#74D0E3",
      omegaLight:"#62B1C1",
      omega:"#3B6466",
      omegaDark:"#1D3828",
      omegaDarker:"#29DSC"
  },
    orangeRose: {
      // Alpha (primary)
      alphaLighter: colors.orange[100],
      alphaLight: colors.orange[300],
      alpha: colors.orange[500],
      alphaDark: colors.orange[600],
      alphaDarker: colors.orange[800],
      // beta (secondary)
      betaLighter: colors.rose[100],
      betaLight: colors.rose[300],
      beta: colors.rose[500],
      betaDark: colors.rose[600],
      betaDarker: colors.rose[800]
    },
    greenBlue: {
      // Alpha (primary)
      alphaLighter: colors.blue[100],
      alphaLight: colors.blue[300],
      alpha: colors.blue[500],
      alphaDark: colors.blue[600],
      alphaDarker: colors.blue[800],
      // beta (secondary)
      betaLighter: colors.lime[100],
      betaLight: colors.lime[300],
      beta: colors.lime[500],
      betaDark: colors.lime[700],
      betaDarker: colors.lime[800]
    },
    orangeBlue: {
      // Alpha (primary)
      alphaLighter: colors.blue[100],
      alphaLight: colors.blue[300],
      alpha: colors.blue[500],
      alphaDark: colors.blue[600],
      alphaDarker: colors.blue[800],
      // beta (secondary)
      betaLighter: colors.orange[100],
      betaLight: colors.orange[300],
      beta: colors.orange[500],
      betaDark: colors.orange[600],
      betaDarker: colors.orange[800]
    },
    blueBlack: {
      // Alpha (primary)
      alphaLighter: colors.blueGray[200],
      alphaLight: colors.blueGray[300],
      alpha: colors.blueGray[700],
      alphaDark: colors.blueGray[800],
      alphaDarker: colors.blueGray[900],
      // beta (secondary)
      betaLighter: colors.lightBlue[100],
      betaLight: colors.lightBlue[300],
      beta: colors.lightBlue[400],
      betaDark: colors.lightBlue[600],
      betaDarker: colors.lightBlue[800]
    },
    greenViolet: {
      // Alpha (primary)
      alphaLighter: colors.violet[100],
      alphaLight: colors.violet[300],
      alpha: colors.violet[500],
      alphaDark: colors.violet[600],
      alphaDarker: colors.violet[800],
      // beta (secondary)
      betaLighter: colors.green[100],
      betaLight: colors.green[300],
      beta: colors.green[500],
      betaDark: colors.green[600],
      betaDarker: colors.green[800]
    },
    purpleIndigo: {
      // Alpha (primary)
      alphaLighter: colors.indigo[100],
      alphaLight: colors.indigo[300],
      alpha: colors.indigo[500],
      alphaDark: colors.indigo[600],
      alphaDarker: colors.indigo[800],
      // beta (secondary)
      betaLighter: colors.purple[100],
      betaLight: colors.purple[300],
      beta: colors.purple[500],
      betaDark: colors.purple[600],
      betaDarker: colors.purple[800]
    },
    redBlue: {
      // Alpha (primary)
      alphaLighter: colors.blue[100],
      alphaLight: colors.blue[300],
      alpha: colors.blue[500],
      alphaDark: colors.blue[600],
      alphaDarker: colors.blue[800],
      // beta (secondary)
      betaLighter: colors.red[100],
      betaLight: colors.red[300],
      beta: colors.red[600],
      betaDark: colors.red[700],
      betaDarker: colors.red[800]
    }
  }
}
