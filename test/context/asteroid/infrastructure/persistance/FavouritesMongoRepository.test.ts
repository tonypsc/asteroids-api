import { AsteroidDto } from '../../../../../src/contexts/asteroid/domain';
import { Favourite } from '../../../../../src/contexts/asteroid/domain/Favourite';
import { FavouritesMongoRepository } from '../../../../../src/contexts/asteroid/infrastructure';
import { UuidValue } from '../../../../../src/contexts/shared/domain';

const testAsteroid: AsteroidDto = {
	links: {
		self: 'http://api.nasa.gov/neo/rest/v1/neo/2465633?api_key=DEMO_KEY',
	},
	id: '2465633',
	neo_reference_id: '2465633',
	name: '465633 (2009 JR5)',
	nasa_jpl_url: 'http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=2465633',
	absolute_magnitude_h: 20.48,
	estimated_diameter: {
		kilometers: {
			estimated_diameter_min: 0.2130860292,
			estimated_diameter_max: 0.4764748465,
		},
		meters: {
			estimated_diameter_min: 213.0860292484,
			estimated_diameter_max: 476.474846455,
		},
		miles: {
			estimated_diameter_min: 0.1324054791,
			estimated_diameter_max: 0.2960676518,
		},
		feet: {
			estimated_diameter_min: 699.1011681995,
			estimated_diameter_max: 1563.2377352435,
		},
	},
	is_potentially_hazardous_asteroid: true,
	close_approach_data: [
		{
			close_approach_date: '2015-09-08',
			close_approach_date_full: '2015-Sep-08 20:28',
			epoch_date_close_approach: 1441744080000,
			relative_velocity: {
				kilometers_per_second: '18.127937205',
				kilometers_per_hour: '65260.5739380709',
				miles_per_hour: '40550.3827339086',
			},
			miss_distance: {
				astronomical: '0.3027469766',
				lunar: '117.7685738974',
				kilometers: '45290302.848299842',
				miles: '28142089.2239161396',
			},
			orbiting_body: 'Earth',
		},
	],
	is_sentry_object: false,
};

describe('add', () => {
	test('should return id for adding favourite', async () => {
		const newId = new UuidValue('').value;
		const newAsteroid = { ...testAsteroid, id: newId };
		const newFavourite = new Favourite(newId, newAsteroid);
		const favouritesRepository = new FavouritesMongoRepository();
		const result = await favouritesRepository.add(newFavourite);
		expect(result).toBeTruthy();
	});
});

describe('getAll', () => {
	test('should return array', async () => {
		const favouritesRepository = new FavouritesMongoRepository();
		const result = await favouritesRepository.getAll();
		expect(result.length).toBeGreaterThan(0);
	});
});

describe('getById', () => {
	test('should return asteroid for valid id', async () => {
		const favouritesRepository = new FavouritesMongoRepository();
		const result = await favouritesRepository.getById(
			'5f486955-ed81-4579-8e2c-0cb2a353d33c'
		);
		console.log(result);
		expect(result?.asteroid.id).toBe('5f486955-ed81-4579-8e2c-0cb2a353d33c');
	});
});
