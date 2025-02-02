import { Client } from "./client";
import { ClientType } from "./client-type";
import { Offer } from "./offer";
import { PaymentType } from "./payment-type";
import { Shop } from "./shop";
import { Status } from "./status";
import { User } from "./user";

export class Transaction {

    constructor(
        private id: Number,
        private client: Client,
        private user: User,
        private offer: Offer,
        private dateTransaction: Date,
        private status: Status,
        private payment_type: PaymentType,
        private client_type: ClientType,
        private kit_code: string,
        private shop: Shop
    ){}

    public getId(): Number {return this.id;}
    public setId(value: Number): void {this.id = value;}

    public getClient(): Client {return this.client;}
    public setClient(value: Client): void {this.client = value;}

    public getUser(): User {return this.user;}
    public setUser(value: User): void {this.user = value;}

    public getOffer(): Offer {return this.offer;}
    public setOffer(value: Offer): void {this.offer = value;}

    public getDateTransaction(): Date {return this.dateTransaction;}
    public setDateTransaction(value: Date): void {this.dateTransaction = value;}

    public getStatus(): Status {return this.status;}
    public setStatus(value: Status): void {this.status = value;}

    public getPaymentType(): PaymentType {return this.payment_type;}
    public setPaymentType(value: PaymentType): void {this.payment_type = value;}

    public getClientType(): ClientType {return this.client_type;}
    public setClientType(value: ClientType): void {this.client_type = value;}

    public getKitCode(): string {return this.kit_code;}
    public setKitCode(value: string): void {this.kit_code = value;}

    public getShop(): Shop {return this.shop;}
    public setShop(value: Shop): void {this.shop = value;}
}

