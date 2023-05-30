import { ConfigType } from '../types';

const environment: ConfigType = {
	dbHostName: 'mongodb://localhost/asteroid-test',
	asteroidsApi: process.env.ASTEROIDS_API,
	maxPeriodDays: 7,
};

export { environment };
