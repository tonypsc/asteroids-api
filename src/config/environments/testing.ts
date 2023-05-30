import { ConfigType } from '../types';

const environment: ConfigType = {
	dbHostName: 'mongodb://localhost/asteroid-test',
	asteroidsApi: process.env.ASTEROIDS_API,
};

export { environment };
