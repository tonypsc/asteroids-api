import { MongoRepository } from '../../../shared/infrastructure';
import { Favourite } from '../../domain/Favourite';
import { FavouritesRepository } from '../../domain/FavouritesRepository';

class FavouritesMongoRepository
	extends MongoRepository<Favourite>
	implements FavouritesRepository
{
	moduleName(): string {
		return 'favourites';
	}

	async add(asteroid: Favourite) {
		return this.persist('', asteroid);
	}

	async getAll(): Promise<Favourite[]> {
		return this.getAll();
	}

	async getById(id: string): Promise<Favourite> {
		return this.getById(id);
	}
}

export { FavouritesMongoRepository };
