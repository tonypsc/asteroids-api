import { InvalidArgumentError } from '../../shared/domain';
import { StringDateValue } from '../../shared/domain/StringDateValue';

class AsteroidPeriod {
	private initialDate: StringDateValue;
	private endDate: StringDateValue;

	constructor(initialDate: StringDateValue, endDate: StringDateValue) {
		this.initialDate = initialDate;
		this.endDate = endDate;
		this.validate();
	}

	validate() {
		const milisecsInWeek = 8 * 24 * 60 * 60 * 1000;

		const iDate = this.initialDate.getDate().getTime();
		const eDate = this.endDate.getDate().getTime();

		if (eDate < iDate) {
			throw new InvalidArgumentError('Invalid period');
		}

		if (eDate - iDate > milisecsInWeek) {
			throw new InvalidArgumentError('Period must not exceed 7 days');
		}
	}

	private dateToString(date: Date) {
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		return `${date.getFullYear}-${month}-${date.getDate()}`;
	}

	getInitialDateString() {
		return this.dateToString(this.initialDate.getDate());
	}

	getEndDateString() {
		return this.dateToString(this.endDate.getDate());
	}
}

export { AsteroidPeriod };
