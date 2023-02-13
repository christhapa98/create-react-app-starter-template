import React from 'react'
import InputError from '../input/InputError'

export default function Radio({ options, label, name, value, onChange, disabled, errors }) {
    return (
        <div>
            <label className="absolute origin-[0]  -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500" id="radio-group">{label}</label>
            <div className="flex flex-row items-center gap-8  " role="group" aria-labelledby="radio-group">
                {options && options.map((item, index) => {
                    return <label htmlFor={name} key={index} className="inline-flex pt-2 items-center">
                        <input onChange={onChange}
                            disabled={disabled}
                            type="radio"
                            value={item.value}
                            checked={item.value === value}
                            name={name}
                            className="w-5 h-5 text-red-600" />
                        <span className="ml-2 text-gray-700">
                            {item.name}
                        </span>
                    </label>
                })}
            </div>
            <InputError error={errors} />
        </div>
    )
}