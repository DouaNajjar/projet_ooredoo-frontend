import { Category } from "./category";

export class Offer {
    constructor(
        private id: Number,
        private name: string,
        private VOIP_num: Number,
        private validity_period: Number,
        private price: Number,
        private category: Category
    ) { }

    public getCategory(): Category {return this.category;}
    public setCategory(value: Category) {this.category = value;}

    public getPrice(): Number {return this.price;}
    public setPrice(value: Number) {this.price = value;}

    public getValidity_period(): Number {return this.validity_period;}
    public setValidity_period(value: Number) {this.validity_period = value;}

    public getVOIP_num(): Number {return this.VOIP_num;}
    public setVOIP_num(value: Number) {this.VOIP_num = value;}
    
    public getName(): string {return this.name;}
    public setName(value: string) {this.name = value;}
    
    public getId(): Number {return this.id;}
    public setId(value: Number) {this.id = value;}

}
