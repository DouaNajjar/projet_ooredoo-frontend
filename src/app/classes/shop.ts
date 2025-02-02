export class Shop {
    constructor(
        private code_dst: string,
        private name: string
    ){}

    public getName(): string {return this.name;}
    public setName(value: string) {this.name = value;}

    public getCode_dst(): string {return this.code_dst;}
    public setCode_dst(value: string) {this.code_dst = value;}

}