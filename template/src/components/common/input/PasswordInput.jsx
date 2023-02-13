import React, { useState } from "react";
import { TextInputLabel } from "./TextInput"
import TextFieldError from "../TextField/TextFieldError";
import { eye, eyeSlash } from "../icons";

export default function PasswordField({
    label,
    name,
    value,
    onChange,
    required,
    className,
    errors
}) {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(state => !state);

    return (
        <div className="w-full">
            <div className="relative z-0">
                <input
                    id={name}
                    value={value ?? ""}
                    type={show ? "text" : "password"}
                    onChange={onChange}
                    name={name}
                    disabled={disabled}
                    required={required}
                    placeholder={"********"}
                    className="w-full h-10 pr-12 text-gray-900 placeholder-transparent border border-gray-400 focus:border-gray-400 peer rounded-md px-2 focus:border-purple-600 focus:outline-none"
                />
                {label && (
                    <TextFieldLabel label={label} name={name} />
                )}

                <div className="p-2 h-full border-l border-stone-900 flex items-center justify-center absolute top-0 right-0" onClick={handleToggle}>
                    {
                        show ? eye : eyeSlash
                    }
                </div>

            </div>
            {errors && <TextFieldError error={errors} />}
        </div>
    );
}
