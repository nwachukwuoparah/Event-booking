import { UseFormRegister } from "react-hook-form"

export interface inputType {
    type: string;
    placeholder: string;
    name: any
    register: UseFormRegister<any>
    errors: any
}

export interface buttonType {
    handleClick?: () => void
    children: string;
    type: string;
    style?: any;
    isLoading?: boolean
    disabled?: boolean
}