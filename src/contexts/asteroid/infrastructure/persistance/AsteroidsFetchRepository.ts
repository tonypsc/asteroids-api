import { NonEmptyStringValue } from '../../../shared/domain';
import { FetchRepository } from '../../../shared/infrastructure';
import { AsteroidApiResult } from '../../domain';
import { AsteroidDto } from '../../domain/AsteroidDto';
import { AsteroidRepository } from '../../domain/AsteroidRepository';

class AsteroidFetchRepository
	extends FetchRepository
	implements AsteroidRepository
{
	private baseUrl: string;
	private apiKey: string;

	constructor(baseUrl: NonEmptyStringValue, apiKey: string) {
		super();
		this.baseUrl = baseUrl.value;
		this.apiKey = apiKey;
	}

	/**
	 * Calls the api to get the list of asteroids
	 * @param initialDate
	 * @param endDate
	 * @returns
	 */
	async getByDate(initialDate: string, endDate: string) {
		const result = (await this.get(
			`${this.baseUrl}?start_date=${initialDate}&end_date=${endDate}&api_key=${this.apiKey}`
		)) as AsteroidApiResult;

		// create a plain array of asteroids, removing date key
		const asteroids = Object.keys(result.near_earth_objects).reduce(
			(asteroids, date) => {
				const dateAsteroids = result.near_earth_objects[date];
				return [...asteroids, ...dateAsteroids];
			},
			new Array<AsteroidDto>()
		);

		return asteroids;
	}

	/**
	 * Calls the api to get the detail of an asteroid
	 * @param id
	 * @returns
	 */
	async getById(id: string) {
		const result = await this.get(
			`${this.baseUrl}/${id}?api_key=${this.apiKey}`
		);
		return result as AsteroidDto;
	}
}

export { AsteroidFetchRepository };
