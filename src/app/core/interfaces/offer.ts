import { IBase } from "./base";
import { ILoad } from "./load";
import { ITruck } from "./truck";
import { IUser } from "./user";

export interface IOffer extends IBase {
    text: string;
    owner: IUser;
    loadId: ILoad;
    truckId: ITruck;
}