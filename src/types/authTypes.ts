import { User } from "./userTypes";


export type AuthState = {
    user: User | null
    isLoading:boolean
    success:boolean
    error:any
}