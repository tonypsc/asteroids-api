import { defaults } from '../defaults';
import { ConfigType } from '../types';

const environment: ConfigType = {
	dbHostName: process.env.DB_HOST,
	asteroidsApi: process.env.ASTEROIDS_API,
	maxPeriodDays: process.env.MAX_PERIOD_DAYS
		? parseInt(process.env.MAX_PERIOD_DAYS)
		: defaults.maxPeriodDays,
};

export { environment };
