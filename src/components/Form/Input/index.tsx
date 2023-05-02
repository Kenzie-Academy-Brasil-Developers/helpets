import { ForwardedRef, InputHTMLAttributes, forwardRef, } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string,
    error?: FieldError,
}

export const Input = forwardRef(({ label, error, ...rest }: IInputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <div className="flex flex-col">
        {label ? <label className="text-white mb-[0.875rem]">{label}</label> : null}
        <input ref={ref} {...rest} className="mb-[1.125rem] rounded-[20px] h-[2.25rem] border border-[#3AB8C7] pl-[0.625rem] bg-transparent autofill:bg-transparent"/>
        {error? <p>{error.message}</p> : null}
    </div>
))