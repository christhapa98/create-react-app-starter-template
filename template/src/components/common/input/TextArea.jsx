import InputError from "./InputError";
import { TextInputLabel } from "./TextInput"

export default function TextArea({ placeholder, label, name, disabled, onChange, type, required, errors, value }) {
    let inputValue = type === "date" ? value && value.includes("T") ? value.split("T")[0] : value : value;
    return (
        <div className="w-full">
            <div className="relative z-0">
                <textarea
                    id={name}
                    value={inputValue}
                    type={type ?? "text"}
                    onChange={onChange}
                    name={name}
                    disabled={disabled}
                    required={required}
                    placeholder={placeholder}
                    className={`w-full h-10 text-gray-900 bg-white placeholder:text-slate-400 text-xs border ${errors ? "border-red-400" : "border-gray-400"} focus:border-indigo-600 peer rounded-md px-2 focus:outline-none`}
                />
                {label && (
                    <TextInputLabel label={label} name={name} />
                )}
            </div>
            {errors && <InputError error={errors} />}
        </div>
    );
}