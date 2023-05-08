import { TransformDate } from './date';

describe('TransformDate', () => {
	it('should return an empty string when value is undefined, null, or 0', () => {
		expect(TransformDate({ value: '' })).toStrictEqual('');
		expect(TransformDate({ value: undefined })).toStrictEqual('');
		expect(TransformDate({ value: null })).toStrictEqual('');
		expect(TransformDate({ value: 0 })).toStrictEqual('');
	});

	it('should return the value as a date when value is a date', () => {
		expect(TransformDate({ value: new Date('2020-02-18') })).toStrictEqual(new Date('2020-02-18'));
		expect(TransformDate({ value: new Date('2020-02-19') })).toStrictEqual(new Date('2020-02-19'));
		expect(TransformDate({ value: new Date('2020-02-20') })).toStrictEqual(new Date('2020-02-20'));
	});

	it('should return the value as a string when value is a string', () => {
		expect(TransformDate({ value: '2020-02-18' })).toStrictEqual('2020-02-18');
		expect(TransformDate({ value: '2020-02-19' })).toStrictEqual('2020-02-19');
		expect(TransformDate({ value: '2020-02-20' })).toStrictEqual('2020-02-20');
	});
});
