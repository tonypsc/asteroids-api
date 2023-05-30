import { AsteroidDto } from './AsteroidDto';

interface AsteroidRepository {
	getByDate(initialDate: string, endDate: string): Promise<AsteroidDto[]>;
	getById(id: string): Promise<AsteroidDto>;
}

export { AsteroidRepository };
