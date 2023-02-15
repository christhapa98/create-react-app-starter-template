import React, { createContext } from 'react'
import AdminLayout from '../components/layouts/AdminLayout/AdminLayout';

export const AppContext = createContext({});

export default function AdminContextComponent({ children }) {
    return (
        <AppContext.Provider value={{}}>
            <AdminLayout>
                {children}
            </AdminLayout>
        </AppContext.Provider>
    )
}
