export class Governorate {
  constructor(
    public id: Number,
    public name: string, 
  ) { }

  public getId():Number{return this.id;}
  public setId(value:Number){this.id=value;}
  
  public getName():string{return this.name;}
  public setName(value:string){this.name=value;}
}