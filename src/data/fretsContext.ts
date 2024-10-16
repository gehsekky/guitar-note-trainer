import { NUM_FRETS } from '@/app/constants';

export const fretsContext = Array.from({ length: NUM_FRETS }, (_, i) => i);
