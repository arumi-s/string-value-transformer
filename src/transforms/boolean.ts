import { ValueTransform } from './interface';

export const TransformBoolean: ValueTransform<boolean> = (a) => {
	switch (a.value) {
		case null:
			return null;
		case true:
		case 'true':
		case '1':
		case 'on':
		case 'yes':
		case 'T':
			return true;
		default:
			return false;
	}
};
