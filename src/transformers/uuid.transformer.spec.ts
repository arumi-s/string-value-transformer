import { UUIDTransformer } from './uuid.transformer';

describe('UUIDTransformer', () => {
	let transformer: UUIDTransformer;

	beforeEach(() => {
		transformer = new UUIDTransformer();
	});

	describe('from', () => {
		it('should strips dash from given string', () => {
			expect(transformer.from('39cbe48b-fbc9-48d1-b17c-ef54e7724919')).toStrictEqual('39cbe48bfbc948d1b17cef54e7724919');
		});

		it('should return null if given null', () => {
			expect(transformer.from(null)).toBe(null);
		});
	});

	describe('to', () => {
		it('should return the same number when given a number', () => {
			expect(transformer.to(123 as any as string)).toBe(123);
		});

		it('should return the same string when given a string', () => {
			expect(transformer.to('test')).toBe('test');
		});
	});
});
