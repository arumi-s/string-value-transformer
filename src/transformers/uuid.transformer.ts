import { ValueTransformer } from './interface';

export class UUIDTransformer implements ValueTransformer<string | null> {
	from(value: string | null): string | null {
		return value != null ? value.replace(/-/g, '') : value;
	}

	to(value: string | null) {
		return value;
	}
}
