import { Adresse } from "./adresse";

export class Person {

    constructor(
        private CIN: Number,
        private firstname: string,
        private lastname: string,
        private address: Adresse
    ){}

    public getCIN(): Number {
        return this.CIN;
    }
    public setCIN(value: Number) {
        this.CIN = value;
    }
    public getFirstname(): string {
        return this.firstname;
    }
    public setFirstname(value: string) {
        this.firstname = value;
    }
    public getLastname(): string {
        return this.lastname;
    }
    public setLastname(value: string) {
        this.lastname = value;
    }
    public getAddress(): Adresse {
        return this.address;
    }
    public setAddress(value: Adresse) {
        this.address = value;
    }



}
