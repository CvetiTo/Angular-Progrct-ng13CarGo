import { IBase } from "./base";
import { IUser } from "./user";

export interface ILoad<T = string> extends IBase {
    loading: string;
    unloading: string;
    startingFrom: string;
    tons: Number;
    price: Number;
    offers: T[];
    owner: IUser;
}