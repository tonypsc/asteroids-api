import { Favourite } from './Favourite';

interface FavouritesRepository {
	add(asteroid: Favourite): Promise<string>;
	getAll(): Promise<Favourite[]>;
	getById(id: string): Promise<Favourite | null>;
}

export { FavouritesRepository };
