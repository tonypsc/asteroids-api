import { ConfigType } from '../types';
import { defaults } from '../defaults';

const environment: ConfigType = {
	dbHostName: process.env.DB_HOST,
	asteroidsApi: process.env.ASTEROIDS_API,
	maxPeriodDays: process.env.MAX_PERIOD_DAYS
		? parseInt(process.env.MAX_PERIOD_DAYS)
		: defaults.maxPeriodDays,
};

export { environment };
