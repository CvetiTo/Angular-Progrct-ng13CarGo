import { IBase } from "./base";
import { ILoad } from "./load";
import { IUser } from "./user";

export interface IOffer extends IBase {
    text: string;
    owner: IUser;
    loadId: ILoad;
}