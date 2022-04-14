import { IBase } from "./base";
export interface IUser extends IBase {
    loads: string[];
    trucks: string[];
    offers:string[];
    email: string;
    password: string;
    username: string;
    telephone: string;
}