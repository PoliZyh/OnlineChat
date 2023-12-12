import type { IResponseData } from "../type";
import type { ILoginForm } from "@/views/Login/type";

export type ILoginRequestData = ILoginForm
export interface ILoginResponseData extends IResponseData {
    data: {
        token: string;
    }
}