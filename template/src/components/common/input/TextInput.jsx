import InputError from "./InputError";

export default function TextInput({ placeholder, label, name, disabled, onChange, type, required, errors, value }) {
    let inputValue = type === "date" ? value && value.includes("T") ? value.split("T")[0] : value : value;
    return (
        <div className="w-full">
            <div className="relative z-0">
                <input
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

export const TextInputLabel = ({ label, name }) => {
    return (
        <label
            htmlFor={name}
            className="absolute text-sm rounded text-black dark:text-black duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-indigo-600 peer-focus:dark:text-black peer-placeholder-shown:scale-500 peer-placeholder-shown:pt-1 peer-placeholder-shown:top1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
        >
            {label}
        </label>
    );
};
