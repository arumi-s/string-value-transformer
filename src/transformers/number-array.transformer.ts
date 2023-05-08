import { ValueTransformer } from './interface';

export class NumberArrayTransformer implements ValueTransformer<number[] | null> {
	from(value: string): number[] | null {
		if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
			try {
				return JSON.parse(`[${value.substring(1, value.length - 1)}]`) as number[];
			} catch (e: unknown) {}
		}

		return null;
	}

	to(value: number[] | null) {
		if (Array.isArray(value)) {
			const json = JSON.stringify(value);
			return `{${json.substring(1, json.length - 1)}}`;
		}

		return '';
	}
}
