import { UuidValue } from '../../../shared/domain';
import { MongoRepository } from '../../../shared/infrastructure';
import { AsteroidDto } from '../../domain';
import { Favourite } from '../../domain/Favourite';
import { FavouritesRepository } from '../../domain/FavouritesRepository';

class FavouritesMongoRepository
	extends MongoRepository<Favourite>
	implements FavouritesRepository
{
	moduleName(): string {
		return 'favourites';
	}

	async add(favourite: Favourite) {
		return this.persist(favourite._id!, favourite);
	}

	async getAll(): Promise<Favourite[]> {
		return this.find();
	}

	async getById(id: string): Promise<Favourite | null> {
		return this.findOne<Favourite>({ _id: id });
	}
}

export { FavouritesMongoRepository };
