import React, { createContext } from 'react'
import MainLayout from '../components/layouts/MainLayout/MainLayout';

export const AppContext = createContext({});

export default function AdminContextComponent({ children }) {
    return (
        <AppContext.Provider value={{}}>
            <MainLayout>
                {children}
            </MainLayout>
        </AppContext.Provider>
    )
}
