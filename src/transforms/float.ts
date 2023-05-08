import { ValueTransform } from './interface';

export const TransformFloat: ValueTransform<number> = ({ value }) => parseFloat(value as string) || 0;
