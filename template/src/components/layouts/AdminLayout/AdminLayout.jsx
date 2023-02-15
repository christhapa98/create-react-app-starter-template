import React, { useState } from 'react'
import Sidebar from './Sidebar'

export default function AdminLayout({ children }) {
    const [minimize, setMinimize] = useState(true);
    return (
        <div>
            <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white ">
                <Sidebar minimize={minimize} setMinimize={setMinimize} />
                <main className={`flex flex-col mt-16 pt-4 p-8 lg:mt-0 px-12 ${minimize ? "lg:ml-24 minimized" : "lg:ml-64"} transition-all duration-300`}>
                    {children}
                </main>
            </div>
        </div>
    )
}
