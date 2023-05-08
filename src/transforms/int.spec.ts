import { TransformInt } from './int';

describe('TransformInt', () => {
	it('should return 0 when value is undefined', () => {
		expect(TransformInt({ value: undefined })).toStrictEqual(0);
	});

	it('should return 0 with empty string', () => {
		expect(TransformInt({ value: '' })).toStrictEqual(0);
	});

	it('should return integer when value is stringified number', () => {
		expect(TransformInt({ value: '10' })).toStrictEqual(10);
	});

	it('should return integer when value is stringified non integer number', () => {
		expect(TransformInt({ value: '4.12' })).toStrictEqual(4);
	});

	it('should return Number.MIN_SAFE_INTEGER when value is less than Number.MIN_SAFE_INTEGER', () => {
		expect(TransformInt({ value: '-9007199254740992' })).toStrictEqual(Number.MIN_SAFE_INTEGER);
	});

	it('should return Number.MAX_SAFE_INTEGER when value is greater than Number.MAX_SAFE_INTEGER', () => {
		expect(TransformInt({ value: '9007199254740992' })).toStrictEqual(Number.MAX_SAFE_INTEGER);
	});
});
