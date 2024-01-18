import { generateColorPalette } from './util/generateColorPalette';

export type PaletteSteps = {
  0: string;
  50: string;
  100: string;
  150: string;
  200: string;
  250: string;
  300: string;
  350: string;
  400: string;
  450: string;
  500: string;
  550: string;
  600: string;
  650: string;
  700: string;
  750: string;
  800: string;
  850: string;
  900: string;
  950: string;
  1000: string;
};

export type ThemeColors = {
  base: PaletteSteps;
  baseAlpha: PaletteSteps;
  gold: PaletteSteps;
  goldAlpha: PaletteSteps;
  working: PaletteSteps;
  workingAlpha: PaletteSteps;
  warning: PaletteSteps;
  warningAlpha: PaletteSteps;
  ok: PaletteSteps;
  okAlpha: PaletteSteps;
  error: PaletteSteps;
  errorAlpha: PaletteSteps;
  invokeYellow: PaletteSteps;
  invokeYellowAlpha: PaletteSteps;
  invokeRed: PaletteSteps;
  invokeRedAlpha: PaletteSteps;
  invokeGreen: PaletteSteps;
  invokeGreenAlpha: PaletteSteps;
  invokeBlue: PaletteSteps;
  invokeBlueAlpha: PaletteSteps;
};

const BASE = { H: 220, S: 12 };
const WORKING = { H: 47, S: 42 };
const GOLD = { H: 40, S: 70 };
const WARNING = { H: 28, S: 42 };
const OK = { H: 113, S: 42 };
const ERROR = { H: 0, S: 42 };
const INVOKE_YELLOW = { H: 66, S: 92 };
const INVOKE_BLUE = { H: 200, S: 76 };
const INVOKE_GREEN = { H: 110, S: 69 };
const INVOKE_RED = { H: 16, S: 92 };

export const getArbitraryBaseColor = (lightness: number) => `hsl(${BASE.H} ${BASE.S}% ${lightness}%)`;

export const colors: ThemeColors = {
  base: generateColorPalette(BASE.H, BASE.S),
  baseAlpha: generateColorPalette(BASE.H, BASE.S, true),
  working: generateColorPalette(WORKING.H, WORKING.S),
  workingAlpha: generateColorPalette(WORKING.H, WORKING.S, true),
  gold: generateColorPalette(GOLD.H, GOLD.S),
  goldAlpha: generateColorPalette(GOLD.H, GOLD.S, true),
  warning: generateColorPalette(WARNING.H, WARNING.S),
  warningAlpha: generateColorPalette(WARNING.H, WARNING.S, true),
  ok: generateColorPalette(OK.H, OK.S),
  okAlpha: generateColorPalette(OK.H, OK.S, true),
  error: generateColorPalette(ERROR.H, ERROR.S),
  errorAlpha: generateColorPalette(ERROR.H, ERROR.S, true),
  invokeYellow: generateColorPalette(INVOKE_YELLOW.H, INVOKE_YELLOW.S),
  invokeYellowAlpha: generateColorPalette(INVOKE_YELLOW.H, INVOKE_YELLOW.S, true),
  invokeBlue: generateColorPalette(INVOKE_BLUE.H, INVOKE_BLUE.S),
  invokeBlueAlpha: generateColorPalette(INVOKE_BLUE.H, INVOKE_BLUE.S, true),
  invokeGreen: generateColorPalette(INVOKE_GREEN.H, INVOKE_GREEN.S),
  invokeGreenAlpha: generateColorPalette(INVOKE_GREEN.H, INVOKE_GREEN.S, true),
  invokeRed: generateColorPalette(INVOKE_RED.H, INVOKE_RED.S),
  invokeRedAlpha: generateColorPalette(INVOKE_RED.H, INVOKE_RED.S, true),
};
