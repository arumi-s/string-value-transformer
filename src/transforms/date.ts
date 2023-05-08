import { ValueTransform } from './interface';

export const TransformDate: ValueTransform<string | Date> = (a) => (a.value == null || +a.value === 0 ? '' : (a.value as string | Date));
