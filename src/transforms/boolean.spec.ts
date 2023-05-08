import { TransformBoolean } from './boolean';

describe('TransformBoolean', () => {
	it('should return null when null is input', () => {
		expect(TransformBoolean({ value: null })).toBeNull();
	});

	it('should return true when true is input', () => {
		expect(TransformBoolean({ value: true })).toStrictEqual(true);
	});

	it("should return true when 'true' is input", () => {
		expect(TransformBoolean({ value: 'true' })).toStrictEqual(true);
	});

	it("should return true when '1' is input", () => {
		expect(TransformBoolean({ value: '1' })).toStrictEqual(true);
	});

	it("should return true when 'on' is input", () => {
		expect(TransformBoolean({ value: 'on' })).toStrictEqual(true);
	});

	it("should return true when 'yes' is input", () => {
		expect(TransformBoolean({ value: 'yes' })).toStrictEqual(true);
	});

	it("should return true when 'T' is input", () => {
		expect(TransformBoolean({ value: 'T' })).toStrictEqual(true);
	});

	it('should return false when anything else is input', () => {
		expect(TransformBoolean({ value: 'TEST' })).toStrictEqual(false);
	});
});
