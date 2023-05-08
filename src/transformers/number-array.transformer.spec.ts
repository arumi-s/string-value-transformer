import { NumberArrayTransformer } from './number-array.transformer';

describe('NumberArrayTransformer', () => {
	const expectedTransformedArray = {
		'[3,7.4,2.4]': `{3,7.4,2.4}`,
		'[1,-1,{},[]]': `{1,-1,{},[]}`,
		'[0]': `{0}`,
		null: ``,
	};

	let transformer: NumberArrayTransformer;

	beforeEach(() => {
		transformer = new NumberArrayTransformer();
	});

	describe('from', () => {
		it('should return null if passed value is not valid', () => {
			const invalidValue = 'abc';
			expect(transformer.from(invalidValue)).toBeNull();
		});

		it('should return null if passed value is not a string', () => {
			const invalidValue = 10;
			expect(transformer.from(invalidValue as any as string)).toBeNull();
		});

		it('should return array from value with valid format', () => {
			Object.keys(expectedTransformedArray).forEach((key) => {
				expect(transformer.from(expectedTransformedArray[key] as any as string)).toStrictEqual(JSON.parse(key));
			});
		});
	});

	describe('to', () => {
		it('should convert array to string with correct format', () => {
			Object.keys(expectedTransformedArray).forEach((key) => {
				expect(transformer.to(JSON.parse(key) as number[])).toStrictEqual(expectedTransformedArray[key]);
			});
		});
	});
});
