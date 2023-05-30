import { InvalidArgumentError } from '../../shared/domain';
import { StringDateValue } from '../../shared/domain/StringDateValue';

class AsteroidPeriod {
	private initialDate: StringDateValue;
	private endDate: StringDateValue;
	private validLength: number;

	constructor(
		initialDate: StringDateValue,
		endDate: StringDateValue,
		validLength?: number
	) {
		this.initialDate = initialDate;
		this.endDate = endDate;
		this.validLength = validLength ?? 7;
		this.validate();
	}

	validate() {
		// calculate miliseconds in days for valid period length
		// add 1 to include last period day
		const milisecsInWeek = (this.validLength + 1) * 24 * 60 * 60 * 1000;

		const iDate = this.initialDate.getDate().getTime();
		const eDate = this.endDate.getDate().getTime();

		if (eDate < iDate) {
			throw new InvalidArgumentError('Invalid period');
		}

		if (eDate - iDate > milisecsInWeek) {
			throw new InvalidArgumentError(
				`Period must not exceed ${this.validLength} days`
			);
		}
	}

	private dateToString(date: Date) {
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		return `${date.getFullYear()}-${month}-${date
			.getDate()
			.toString()
			.padStart(2, '0')}`;
	}

	getInitialDateString() {
		return this.dateToString(this.initialDate.getDate());
	}

	getEndDateString() {
		return this.dateToString(this.endDate.getDate());
	}
}

export { AsteroidPeriod };
