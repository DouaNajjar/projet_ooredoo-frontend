import { Governorate } from "./governorate";

export class City {

    constructor(
        private id: Number,
        private name: string,
        private governorate: Governorate
    ){}

    public getGovernorate(): Governorate {
        return this.governorate;
    }
    public setGovernorate(value: Governorate) {
        this.governorate = value;
    }
    public getName(): string {
        return this.name;
    }
    public setName(value: string) {
        this.name = value;
    }
    public getId(): Number {
        return this.id;
    }
    public setId(value: Number) {
        this.id = value;
    }

}
