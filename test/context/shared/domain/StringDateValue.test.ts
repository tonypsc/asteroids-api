import {
	InvalidArgumentError,
	StringDateValue,
} from '../../../../src/contexts/shared/domain';

describe('constructor', () => {
	test('should throw (Invalid date format) for empty date', () => {
		expect(() => new StringDateValue('')).toThrowError('Invalid date format');
	});

	test('should throw (Invalid date format) for non date', () => {
		expect(() => new StringDateValue('non-date')).toThrowError(
			'Invalid date format'
		);
	});
});

describe('getDate', () => {
	test('should return date object for 2015-09-01', () => {
		const stringDateValue = new StringDateValue('2015-09-01');
		expect(stringDateValue.getDate().getFullYear()).toBe(2015);
		expect(stringDateValue.getDate().getMonth()).toBe(8);
		expect(stringDateValue.getDate().getDate()).toBe(1);
	});
});
