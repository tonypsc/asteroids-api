import { Links } from './Links';
import { CloseAproachData } from './CloseAproachData';
import { OrbitalData } from './OrbitalData';
import { EstimatedDiameter } from './EstimatedDiameter';

interface AsteroidDto {
	links: Links;
	id: string;
	neo_reference_id: string;
	name: string;
	nasa_jpl_url: string;
	absolute_magnitude_h: number;
	estimated_diameter: EstimatedDiameter;
	is_potentially_hazardous_asteroid: boolean;
	close_approach_data: [CloseAproachData];
	orbital_data?: OrbitalData;
	is_sentry_object: boolean;
}

export { AsteroidDto };
