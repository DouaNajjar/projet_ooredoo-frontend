import { City } from "./city";
import { Governorate } from "./governorate";

export class Adresse {

    constructor(
        private id: Number,
        private houseNumber: number,
        private street: string,
        private city: City,
    ) { }

    public getHouseNumber(): number { return this.houseNumber; }
    public setHouseNumber(value: Number) { this.id = value; }

    public getId(): Number { return this.id; }
    public setId(value: Number) { this.id = value; }

    public getStreet(): string { return this.street }
    public setStreet(value: string) { this.street = value; }

    public getCity(): City {return this.city;}
    public setCity(value: City) {this.city = value;}

}
