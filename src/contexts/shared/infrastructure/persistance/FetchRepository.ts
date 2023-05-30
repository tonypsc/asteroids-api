import fetch from 'node-fetch';

import { FetchException } from '../../domain';

abstract class FetchRepository {
	async get(url: string) {
		const res = await fetch(url);
		const data = res.json();

		if (!res.ok) {
			throw new FetchException(JSON.stringify(data));
		}

		return data;
	}
}

export { FetchRepository };
