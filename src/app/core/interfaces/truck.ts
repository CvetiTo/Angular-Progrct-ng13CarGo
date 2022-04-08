import { IBase } from "./base";
import { IUser } from "./user";

export interface ITruck<T = string> extends IBase {
    loading: string;
    unloading: string;
    startingFrom: string;
    validUntil: string;
    type: string;
    tons: Number;
    price: Number;
    offers: T[];
    owner: IUser;
}