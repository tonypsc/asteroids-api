import { MongoClient, Collection, Document } from 'mongodb';

import { config } from '../../../../config';
import { AggregateRoot } from '../../domain/AggregateRoot';

export abstract class MongoRepository<T extends AggregateRoot> {
	private _client: MongoClient;

	constructor() {
		this._client = new MongoClient(config.dbHostName ?? 'localhost');
	}

	protected abstract moduleName(): string;

	protected collection(): Collection {
		return this._client.db().collection(this.moduleName());
	}

	protected async find<D extends Document>(): Promise<D[]> {
		await this._client.connect();
		const collection = this.collection();
		const criteria: Partial<D> = {};
		return await collection.find<D>({}).toArray();
	}

	protected async findOne<D>(criteria: Partial<Document>): Promise<D | null> {
		await this._client.connect();
		const collection = this.collection();
		return await collection.findOne<D>(criteria);
	}

	protected async persist(id: string, aggregate: T): Promise<string> {
		await this._client.connect();
		const collection = this.collection();

		const result = await collection.updateOne(
			{ _id: id },
			{ $set: aggregate },
			{ upsert: true }
		);

		return result.upsertedId ? result.upsertedId.toString() : id;
	}
}
