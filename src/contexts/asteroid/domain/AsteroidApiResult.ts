import { AsteroidDto } from './AsteroidDto';

interface AsteroidApiResult {
	links: {
		next: string;
		previous: string;
		self: string;
	};
	element_count: number;
	near_earth_objects: Record<string, AsteroidDto[]>;
}

export { AsteroidApiResult };
