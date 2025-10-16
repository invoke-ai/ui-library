import { PaletteSteps } from '../colors';
/**
 * Generate a color palette based on a given hue and saturation.
 * @param  {String | Number} H Hue of the color (0-360)
 * @param  {String | Number} L Saturation of the color (0-100)
 * @param  {Boolean} alpha Whether or not to generate this palette as a transparency palette
 */
export declare function generateColorPalette(H: string | number, S: string | number, alpha?: boolean): PaletteSteps;
