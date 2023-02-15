import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminContextComponent from '../context/AdminContext'

import Home from '../pages/Home'
import Login from '../pages/Login'
// Admin routes
import Dashboard from '../pages/admin/Dashboard'
import Users from '../pages/admin/Users'
import Settings from '../pages/admin/Settings'

import { adminBaseRoute, clientBaseRoute } from '../constants/sidebarItems'

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            {/* Admin routes */}
            <Route path={adminBaseRoute + "*"} element={
                <AdminContextComponent>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </AdminContextComponent>
            } />
            {/* Client routes */}
            <Route path={clientBaseRoute + "*"} element={
                <AdminContextComponent>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </AdminContextComponent>
            } />
        </Routes>
    )
}
