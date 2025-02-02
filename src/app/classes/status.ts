export class Status {

    constructor(
        private id: Number,
        private name: string
    ) { }

    public getName(): string {return this.name;}
    public setName(value: string) {this.name = value;}
    
    public getId(): Number {return this.id;}
    public setId(value: Number) {this.id = value;}

}
