import { ConfigType } from '../types';
import { defaults } from '../defaults';

const environment: ConfigType = {
	dbHostName: 'mongodb://localhost/asteroid-test',
	asteroidsApi: process.env.ASTEROIDS_API,
};

export { environment };
