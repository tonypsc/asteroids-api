import { AsteroidDto } from './AsteroidDto';

interface FavouritesRepository {
	add(asteroid: AsteroidDto): Promise<string>;
	getById(id: string): Promise<AsteroidDto>;
}
