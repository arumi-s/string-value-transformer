import { ValueTransformer } from './interface';

export type BooleanString = 'T' | 'F';

export class BooleanTransformer implements ValueTransformer<boolean> {
	from(value: string): boolean {
		return value === 'T';
	}

	to(value: boolean): BooleanString {
		return value ? 'T' : 'F';
	}
}
