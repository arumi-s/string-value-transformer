import { ValueTransformer } from './interface';

export class JsonTransformer<Type = Record<any, unknown>> implements ValueTransformer<Type | string | null> {
	from(value: string | null): Type | string | null {
		return value == null ? null : value.startsWith('{') && value.endsWith('}') ? (JSON.parse(value) as Type) : value;
	}

	to(value: Type | string | null) {
		return value == null ? null : typeof value === 'string' ? value : JSON.stringify(value);
	}
}
