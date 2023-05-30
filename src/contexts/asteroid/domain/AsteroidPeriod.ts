import { InvalidArgumentError } from '../../shared/domain';

class AsteroidPeriod {
	private initialDate: Date;
	private endDate: Date;

	constructor(initialDate: string, endDate: string) {
		this.validate(initialDate, endDate);
		this.initialDate = new Date(initialDate);
		this.endDate = new Date(endDate);
	}

	validate(initialDate: string, endDate: string) {
		const milisecsInWeek = 8 * 24 * 60 * 60 * 1000;

		var iDate = Date.parse(initialDate);
		var eDate = Date.parse(endDate);

		if (isNaN(iDate) || isNaN(eDate)) {
			throw new InvalidArgumentError('Invalid date format');
		}

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
		return this.dateToString(this.initialDate);
	}

	getEndDateString() {
		return this.dateToString(this.endDate);
	}
}

export { AsteroidPeriod };
