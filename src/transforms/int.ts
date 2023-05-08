import { ValueTransform } from './interface';

export const TransformInt: ValueTransform<number> = ({ value }) =>
	Math.min(Math.max(parseInt(value as string, 10) || 0, Number.MIN_SAFE_INTEGER), Number.MAX_SAFE_INTEGER);
