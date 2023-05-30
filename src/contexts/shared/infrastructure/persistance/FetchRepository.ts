import fetch from 'node-fetch';

import {
	AggregateRoot,
	FetchException,
	NonEmptyStringValue,
} from '../../domain';

abstract class FetchRepository<T extends AggregateRoot> {
	private url: string;

	constructor(url: NonEmptyStringValue) {
		this.url = url.value;
	}

	async get() {}
}

export { FetchRepository };
