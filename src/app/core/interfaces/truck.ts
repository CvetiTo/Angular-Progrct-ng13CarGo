import { IBase } from "./base";
import { IUser } from "./user";

export interface ITruck<T = string> extends IBase {
    loading: string;
    unloading: string;
    startingFrom: number;
    validUntil: number;
    type: string;
    tons: number;
    price: number;
    offers: T[];
    owner: IUser;
}