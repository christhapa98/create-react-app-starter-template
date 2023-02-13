import React from 'react'

export default function InputError({ error }) {
    return (
        <p className='text-red-500 text-xs pt-2'>{error}</p>
    )
}
