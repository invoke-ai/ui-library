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
  invokePurple: PaletteSteps;
  invokePurpleAlpha: PaletteSteps;
};

const brandColors = {
  base: { H: 220, S: 12 },
  working: { H: 47, S: 42 },
  gold: { H: 40, S: 70 },
  warning: { H: 28, S: 42 },
  ok: { H: 113, S: 42 },
  error: { H: 0, S: 42 },
  invokeYellow: { H: 66, S: 92 },
  invokeBlue: { H: 200, S: 76 },
  invokeGreen: { H: 110, S: 69 },
  invokeRed: { H: 16, S: 92 },
  invokePurple: { H: 260, S: 58 },
};

export const getArbitraryBaseColor = (lightness: number) =>
  `hsl(${brandColors.base.H} ${brandColors.base.S}% ${lightness}%)`;

export const colors: ThemeColors = {
  base: generateColorPalette(brandColors.base.H, brandColors.base.S),
  baseAlpha: generateColorPalette(brandColors.base.H, brandColors.base.S, true),
  working: generateColorPalette(brandColors.working.H, brandColors.working.S),
  workingAlpha: generateColorPalette(brandColors.working.H, brandColors.working.S, true),
  gold: generateColorPalette(brandColors.gold.H, brandColors.gold.S),
  goldAlpha: generateColorPalette(brandColors.gold.H, brandColors.gold.S, true),
  warning: generateColorPalette(brandColors.warning.H, brandColors.warning.S),
  warningAlpha: generateColorPalette(brandColors.warning.H, brandColors.warning.S, true),
  ok: generateColorPalette(brandColors.ok.H, brandColors.ok.S),
  okAlpha: generateColorPalette(brandColors.ok.H, brandColors.ok.S, true),
  error: generateColorPalette(brandColors.error.H, brandColors.error.S),
  errorAlpha: generateColorPalette(brandColors.error.H, brandColors.error.S, true),
  invokeYellow: generateColorPalette(brandColors.invokeYellow.H, brandColors.invokeYellow.S),
  invokeYellowAlpha: generateColorPalette(brandColors.invokeYellow.H, brandColors.invokeYellow.S, true),
  invokeBlue: generateColorPalette(brandColors.invokeBlue.H, brandColors.invokeBlue.S),
  invokeBlueAlpha: generateColorPalette(brandColors.invokeBlue.H, brandColors.invokeBlue.S, true),
  invokeGreen: generateColorPalette(brandColors.invokeGreen.H, brandColors.invokeGreen.S),
  invokeGreenAlpha: generateColorPalette(brandColors.invokeGreen.H, brandColors.invokeGreen.S, true),
  invokeRed: generateColorPalette(brandColors.invokeRed.H, brandColors.invokeRed.S),
  invokeRedAlpha: generateColorPalette(brandColors.invokeRed.H, brandColors.invokeRed.S, true),
  invokePurple: generateColorPalette(brandColors.invokePurple.H, brandColors.invokePurple.S),
  invokePurpleAlpha: generateColorPalette(brandColors.invokePurple.H, brandColors.invokePurple.S, true),
};
