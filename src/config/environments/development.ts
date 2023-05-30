import { ConfigType } from '../types';
import { defaults } from '../defaults';

const environment: ConfigType = {
	dbHostName: process.env.DB_HOST,
};

export { environment };
