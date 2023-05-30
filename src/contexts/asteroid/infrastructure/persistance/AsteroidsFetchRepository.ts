import { NonEmptyStringValue } from '../../../shared/domain';
import { FetchRepository } from '../../../shared/infrastructure';
import { AsteroidDto } from '../../domain/AsteroidDto';
import { AsteroidRepository } from '../../domain/AsteroidRepository';

class AsteroidFetchRepository
	extends FetchRepository
	implements AsteroidRepository
{
	constructor(apiUrl: NonEmptyStringValue) {
		super(apiUrl.value);
	}

	getByDate(initialDate: string, endDate: string) {
		return [];
	}

	getById(id: string) {
		return {} as AsteroidDto;
	}
}
