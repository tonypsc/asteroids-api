import fetch from 'node-fetch';

import { FetchException } from '../../domain';

abstract class FetchRepository {
	private url: string;

	constructor(url: string) {
		this.url = url;
	}

	async get() {
		const res = await fetch(this.url);
		const data = res.json();

		if (!res.ok) {
			throw new FetchException(JSON.stringify(data));
		}

		return data;
	}
}

export { FetchRepository };
