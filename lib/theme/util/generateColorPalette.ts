import type { PaletteSteps } from '../colors';

/**
 * Generate a color palette based on a given hue and saturation.
 * @param  {String | Number} H Hue of the color (0-360)
 * @param  {String | Number} L Saturation of the color (0-100)
 * @param  {Boolean} alpha Whether or not to generate this palette as a transparency palette
 */
export function generateColorPalette(H: string | number, S: string | number, alpha = false) {
  H = String(H);
  S = String(S);

  const colorSteps = Array.from({ length: 21 }, (_, i) => i * 50);

  const lightnessSteps = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 59, 64, 68, 73, 77, 82, 86, 95, 100];

  const p = colorSteps.reduce((palette, step, index) => {
    // We know this is a number.
    const A = alpha ? (lightnessSteps[index] as number) / 100 : 1;

    // Lightness should be 50% for alpha colors
    const L = alpha ? 50 : lightnessSteps[colorSteps.length - 1 - index];

    // We know this is a key of PaletteSteps.
    palette[step as keyof PaletteSteps] = `hsl(${H} ${S}% ${L}% / ${A})`;

    return palette;

    // We know this will eventually be a valid PaletteSteps object.
  }, {} as PaletteSteps);

  return p;
}
