import { Adresse } from "./adresse"
import { Person } from "./person"

export class Client extends Person {

    constructor(
        private SIM: string,
        CIN: Number,
        firstname: string,
        lastname: string,
        address: Adresse
    ) { super(CIN, firstname, lastname, address); }

    public getSIM(): string {
        return this.SIM;
    }
    public setSIM(value: string) {
        this.SIM = value;
    }
}
