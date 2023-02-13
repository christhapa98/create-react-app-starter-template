import React from 'react'
import TextFieldError from '../TextField/TextFieldError'

export default function Select({ options, onChange, name, label, value, errors, disabled = false }) {
    return (
        <div className='relative flex flex-col'>
            <select name={name} onChange={onChange} disabled={disabled} className="w-full h-10 text-gray-900 placeholder-transparent border border-gray-400 focus:border-gray-500 peer rounded-md px-2 focus:border-purple-600 focus:outline-none" >
                <option value={""} selected={value === ""}>
                    Select {label}
                </option>
                {options && options.map((item, index) => {
                    return <option key={index} value={item.id ?? item.value} selected={(item.id || item.value || "").toString() === (value || "").toString()}>
                        {item.nameEng || item.name || item.wardNo}
                    </option>
                })}
            </select>
            <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:pt-1 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 left-1" >{label}</label>
            <TextFieldError error={errors} />
        </div>
    )
}
