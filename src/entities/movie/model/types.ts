import { IBase } from "@/shared/types";

export interface IMovie extends IBase {
    name: string,
    startTime: string | Date
    duration: string
}