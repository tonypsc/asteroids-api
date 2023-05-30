import { AsteroidPeriod } from '../../../../src/contexts/asteroid/domain';
import { StringDateValue } from '../../../../src/contexts/shared/domain';

describe('constructor', () => {
	test('should throw (invalid period) for a period with initial date later than end date', () => {
		const initialDate = new StringDateValue('2015-09-01');
		const endDate = new StringDateValue('2015-08-01');
		expect(() => new AsteroidPeriod(initialDate, endDate)).toThrowError(
			'Invalid period'
		);
	});

	test('should throw (Period must not exceed 7 days) for a period longer than 7 days', () => {
		const initialDate = new StringDateValue('2015-09-01');
		const endDate = new StringDateValue('2015-09-10');
		expect(() => new AsteroidPeriod(initialDate, endDate)).toThrowError(
			'Period must not exceed 7 days'
		);
	});
});

describe('getInitialDateString', () => {
	test('should return (2015-09-01) for 2015-09-01 initial date', () => {
		const initialDate = new StringDateValue('2015-09-01');
		const endDate = new StringDateValue('2015-09-04');
		const asteroidPeriod = new AsteroidPeriod(initialDate, endDate);
		expect(asteroidPeriod.getInitialDateString()).toBe('2015-09-01');
	});
});
