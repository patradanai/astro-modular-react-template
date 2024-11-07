export interface IHTTPResponse<T> {
	status: number;
	code: string;
	message: string;
	data: T;
}

export interface IHttpGraphResponse<T> {
	data: T;
}

export type WrapperResponse<T> = IHTTPResponse<T>;

export type WrapperGraphResponse<T> = IHttpGraphResponse<T>;
