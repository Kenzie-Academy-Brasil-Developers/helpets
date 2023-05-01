import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label?: string,
    error?: FieldError,
}

export const Textarea = forwardRef(({label, error, ...rest}: ITextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => (
    <div>
        {label? <label>{label}</label> : null}
        <textarea ref={ref} {...rest} />
        {error? <p>{error.message}</p> : null}
    </div>
))