export class HttpException extends Error {
	private code: number;

	constructor(code: number, message: string) {
		super(message);

		this.code = code;
	}

	public getCode() {
		return this.code;
	}

	public getMessage() {
		return this.message;
	}

	public getStack() {
		return this.stack;
	}
}
