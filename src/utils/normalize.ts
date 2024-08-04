import { Dimensions, PixelRatio } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const width = Math.min(SCREEN_WIDTH, SCREEN_HEIGHT);
const height = Math.max(SCREEN_HEIGHT, SCREEN_WIDTH);
// based on iPhone normalize(8)'s scale
const wscale: number = width / 360;
const hscale: number = height / 640;

export default function normalize(size: number, based: 'width' | 'height' = 'width') {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  return PixelRatio.roundToNearestPixel(newSize);
}
