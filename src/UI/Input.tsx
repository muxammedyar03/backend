import React, { ChangeEventHandler } from "react";

interface PropsType {
    placeholder?: string;
    className?: string;
    label?: string;
    type?: "number" | "text" | "checkbox" | "radio" | "tel" | "email" | "password";
    required?: boolean;
    id?: string;
    htmlFor?: string;
    value?: string | number;
    name?: string;
    bottom_label?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const CustomInput: React.FC<PropsType> = ({ placeholder = "", className = "", htmlFor, label, id, required = false, type = "text", value, name, onChange, bottom_label }) => {
    return (
        <div id={id} className="md:space-y-1 w-full">
            {label && <label htmlFor={htmlFor} className="block text-sm">{label}</label>}
            <input
                id={id}
                type={type}
                required={required}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
                className={`p-2 border rounded focus:outline-blue-300 ${className} ${bottom_label && "error_input"}`}
            />
            <label htmlFor={htmlFor} className={`text-red-500 text-xs mt-1 ${!bottom_label && "opacity-0" }`}>{bottom_label || "a"}</label>
        </div>
    );
};

export default CustomInput;
