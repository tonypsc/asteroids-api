import { ValueObject } from './ValueObject';
import { InvalidArgumentError } from './exceptions/InvalidArgumentError';

class StringDateValue extends ValueObject<string> {
	private stringDate: string;
	constructor(stringDate: string) {
		super(stringDate);
		// Add time value for date only date strings to avoid time zone bugs
		this.stringDate = stringDate.includes('T')
			? stringDate
			: stringDate + 'T00:00';
		this.validate();
	}

	private validate() {
		var milisecs = Date.parse(this.stringDate);

		if (isNaN(milisecs)) {
			throw new InvalidArgumentError('Invalid date format');
		}
	}

	getDate() {
		return new Date(this.stringDate);
	}
}

export { StringDateValue };
