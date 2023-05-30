import { AsteroidDto } from './AsteroidDto';

interface AsteroidRepository {
	getByDate(initialDate: string, endDate: string): AsteroidDto[];
	getById(id: string): AsteroidDto;
}

export { AsteroidRepository };
