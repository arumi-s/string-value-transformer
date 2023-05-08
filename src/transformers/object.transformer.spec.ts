import * as classTransformer from 'class-transformer';

import { ObjectTransformer } from './object.transformer';

jest.mock('class-transformer');

describe('ObjectTransformer', () => {
	let transformer: ObjectTransformer<any>;

	beforeEach(() => {
		jest.clearAllMocks();
		const cls = jest.fn();
		transformer = new ObjectTransformer(cls, { enableImplicitConversion: true });
	});

	describe('from', () => {
		it('should call plainToInstance to transform the object', () => {
			const object = { a: 'prop' };

			transformer.from(object);

			expect(classTransformer.plainToInstance).toHaveBeenCalledWith(transformer.cls, object, transformer.options);
		});

		it('should return null when defaultNewInstance is false and given null', () => {
			if (transformer.options) {
				transformer.options.defaultNewInstance = false;
			}

			expect(transformer.from(null)).toBe(null);
		});

		it('should create instance when defaultNewInstance is true and given null', () => {
			if (transformer.options) {
				transformer.options.defaultNewInstance = true;
			}

			transformer.from(null);

			expect(transformer.cls).toHaveBeenCalled();
		});
	});

	describe('to', () => {
		it('should call instanceToPlain to transform the instance', () => {
			const instance = new transformer.cls({ a: 'prop' }) as object;

			transformer.to(instance);

			expect(classTransformer.instanceToPlain).toHaveBeenCalledWith(instance);
		});
	});
});
