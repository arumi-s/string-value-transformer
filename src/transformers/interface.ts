export interface ValueTransformer<T> {
	from(value: any): T;

	to(value: T): any;
}
