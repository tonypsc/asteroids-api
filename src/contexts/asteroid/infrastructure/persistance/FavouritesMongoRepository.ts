import { MongoRepository } from '../../../shared/infrastructure';
import { Favourites } from '../../domain/Favourites';

class FavouritesMongoRepository extends MongoRepository<Favourites> {
	moduleName(): string {
		return 'favourites';
	}
}

export { FavouritesMongoRepository };
