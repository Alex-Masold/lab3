import { IBase } from "@/shared/types";

export interface IUser extends IBase {
    name: string,
    email: string,
    dataCreated: string | Date
}