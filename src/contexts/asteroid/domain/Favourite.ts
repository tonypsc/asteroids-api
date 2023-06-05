import { AggregateRoot } from '../../shared/domain';
import { AsteroidDto } from './AsteroidDto';

class Favourite extends AggregateRoot {
	_id?: string;
	asteroid: AsteroidDto;

	constructor(_id: string, asteroid: AsteroidDto) {
		super();
		this._id = _id;
		this.asteroid = asteroid;
	}
}

export { Favourite };
