import { v4 } from 'uuid';
import { StringValueObject } from './StringValueObject';

class UuidValue extends StringValueObject {
	constructor(id: string) {
		if (!id) id = v4();
		super(id);
	}
}

export { UuidValue };
