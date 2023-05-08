import { TransformFloat } from './float';

describe('TransformFloat', () => {
	it('should convert strings to floats', () => {
		expect(TransformFloat({ value: '1.23' })).toStrictEqual(1.23);
		expect(TransformFloat({ value: '2.45' })).toStrictEqual(2.45);
		expect(TransformFloat({ value: '3.67' })).toStrictEqual(3.67);
	});

	it('should convert booleans to 0', () => {
		expect(TransformFloat({ value: true })).toStrictEqual(0);
		expect(TransformFloat({ value: false })).toStrictEqual(0);
	});

	it('should convert objects to 0', () => {
		expect(TransformFloat({ value: {} })).toStrictEqual(0);
		expect(TransformFloat({ value: [] })).toStrictEqual(0);
	});

	it('should convert undefined to 0', () => {
		expect(TransformFloat({ value: undefined })).toStrictEqual(0);
	});

	it('should convert null to 0', () => {
		expect(TransformFloat({ value: null })).toStrictEqual(0);
	});
});
