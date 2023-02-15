import React, { useContext } from 'react'
import MainLayout from '../components/layouts/MainLayout/MainLayout';

export const AppContext = useContext({});

export default function AdminContextComponent({ children }) {
    return (
        <AppContext.Provider value={{}}>
            <MainLayout>
                {children}
            </MainLayout>
        </AppContext.Provider>
    )
}
