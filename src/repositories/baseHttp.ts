// RequestInit omit body
type Options = Omit<RequestInit, 'body'>;

export class BaseHttp {
	private baseUrl = '';
	private options: Options = {};

	constructor(baseUrl: string, options: Options = {}) {
		this.baseUrl = baseUrl;
		this.options = {
			headers: {
				'Content-Type': 'application/json',
				accept: 'application/json',
			},
			...options,
		};
	}

	async get(url: string) {
		return fetch(`${this.baseUrl}${url}`).then((res) => res.json());
	}

	async post(url: string, data: any) {
		return fetch(`${this.baseUrl}${url}`, {
			...this.options,
			method: 'POST',
			body: JSON.stringify(data),
		}).then((res) => {
			if (res.ok) {
				return res.json();
			}
			throw new Error('Something went wrong');
		});
	}

	async put(url: string, data: any) {
		return fetch(`${this.baseUrl}${url}`, {
			...this.options,
			method: 'PUT',
			body: JSON.stringify(data),
		}).then((res) => res.json());
	}

	async delete(url: string) {
		return fetch(`${this.baseUrl}${url}`, {
			...this.options,
			method: 'DELETE',
		}).then((res) => res.json());
	}

	async patch(url: string, data: any) {
		return fetch(`${this.baseUrl}${url}`, {
			...this.options,
			method: 'PATCH',
			body: JSON.stringify(data),
		}).then((res) => res.json());
	}
}
