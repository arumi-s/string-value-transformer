import { BooleanTransformer } from './boolean.transformer';

describe('BooleanTransformer', () => {
	let transformer: BooleanTransformer;

	beforeEach(() => {
		transformer = new BooleanTransformer();
	});

	describe('from', () => {
		it('should return a boolean from a given BooleanString value', () => {
			expect(transformer.from('T')).toStrictEqual(true);
			expect(transformer.from('F')).toStrictEqual(false);
			expect(transformer.from('X')).toStrictEqual(false);
			expect(transformer.from('')).toStrictEqual(false);
		});
	});

	describe('to', () => {
		it('should return a BooleanString from a given boolean value', () => {
			expect(transformer.to(true)).toStrictEqual('T');
			expect(transformer.to(false)).toStrictEqual('F');
		});
	});
});
