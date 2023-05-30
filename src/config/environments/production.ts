import { ConfigType } from '../types';

const environment: ConfigType = {
	dbHostName: process.env.DB_HOST,
	asteroidsApi: process.env.ASTEROIDS_API,
};

export { environment };
