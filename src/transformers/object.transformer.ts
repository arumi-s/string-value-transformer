import { ClassConstructor, ClassTransformOptions, instanceToPlain, plainToInstance } from 'class-transformer';
import { ValueTransformer } from './interface';

export interface ObjectTransformerOptions extends ClassTransformOptions {
	defaultNewInstance?: boolean;
}

export class ObjectTransformer<Type> implements ValueTransformer<Type | null> {
	constructor(public cls: ClassConstructor<Type>, public options?: ObjectTransformerOptions) {}

	from(value: object | null): Type | null {
		if (value == null) {
			if (this.options?.defaultNewInstance) {
				return new this.cls();
			} else {
				return null;
			}
		}
		return plainToInstance<Type, object>(this.cls, value, this.options);
	}

	to(value: Type): object {
		return instanceToPlain(value);
	}
}
