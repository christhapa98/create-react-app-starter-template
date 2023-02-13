import React from 'react'

export default function Button({ title, color, onClick, type, icon }) {
    return (
        <button
            type={type ?? "submit"}
            onClick={onClick ?? null}
            className={`py-2 px-4 flex items-center justify-center gap-3 ${color ?? "bg-indigo-600"} hover:${color ?? "bg-indigo-700"} focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg`}
        >
            {icon}
            {title}
        </button>
    );
}
