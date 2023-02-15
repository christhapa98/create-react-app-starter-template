import React, { useContext } from 'react'
import AdminLayout from '../components/layouts/AdminLayout/AdminLayout';

export const AppContext = useContext({});

export default function AdminContextComponent({ children }) {
    return (
        <AppContext.Provider value={{}}>
            <AdminLayout>
                {children}
            </AdminLayout>
        </AppContext.Provider>
    )
}
