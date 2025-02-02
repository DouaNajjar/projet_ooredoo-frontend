import { Adresse } from "./adresse";
import { Person } from "./person"
import { Role } from "./role"

export class User extends Person {

    constructor(
        private username: string,
        private password: string,
        private role: Role,
        CIN: Number,
        firstname: string,
        lastname: string,
        address: Adresse
    ){super(CIN, firstname, lastname, address);}

    public getRole(): Role {
        return this.role
    }
    public setRole(value: Role) {
        this.role = value
    }
    public getPassword(): string {
        return this.password
    }
    public setPassword(value: string) {
        this.password = value
    }
    public getUsername(): string {
        return this.username
    }
    public setUsername(value: string) {
        this.username = value
    }


}
