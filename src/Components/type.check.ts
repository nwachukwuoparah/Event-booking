import { UseFormRegister } from "react-hook-form"

export interface inputType {
    type: string;
    placeholder: string;
    icon?: string;
    name: any
    register: UseFormRegister<any>
    errors: any
    inputType: string
    styles?: any
    maxLength?: number
}
export interface IFormInput {
    profilePicture: string
    email: string;
    fullName: string;
    password: string;
    select: string;
}

export interface buttonType {
    handleClick?: () => void
    children: string;
    type: string;
    style?: any;
    isLoading?: boolean
    disabled?: boolean
}