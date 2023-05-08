import { JsonTransformer } from './json.transformer';

describe('JsonTransformer', () => {
	let transformer: JsonTransformer<any>;

	beforeEach(() => {
		transformer = new JsonTransformer();
	});

	describe('from', () => {
		it('should return a object when given a json string', () => {
			const json = `{"a":"prop"}`;

			expect(transformer.from(json)).toStrictEqual({ a: 'prop' });
		});

		it('should return the same string when given a non json string', () => {
			expect(transformer.from('abc123')).toStrictEqual('abc123');
		});

		it('should return null if given null', () => {
			expect(transformer.from(null)).toBe(null);
		});
	});

	describe('to', () => {
		it('should return instanceToPlain to transform the instance', () => {
			const obj = { a: 'prop' };

			expect(transformer.to(obj)).toStrictEqual(`{"a":"prop"}`);
		});

		it('should return the same string when given a string', () => {
			expect(transformer.to('abc123')).toStrictEqual('abc123');
		});

		it('should return null if given null', () => {
			expect(transformer.to(null)).toBe(null);
		});
	});
});
