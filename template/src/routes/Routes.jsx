import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import AdminContextComponent from '../context/AdminContext'

import Home from '../pages/Home'
import Login from '../pages/Login'
// Admin routes
import Dashboard from '../pages/admin/Dashboard'
import Users from '../pages/admin/Users'
import Settings from '../pages/admin/Settings'

import { checkSession } from "../services/session/session.service"

import { adminBaseRoute, clientBaseRoute } from '../constants/sidebarItems'

export default function MainRoutes() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const location = useLocation();

    const checkPath = () => {
        if (checkSession("session") && location.pathname.includes("/admin")) navigate(location.pathname)
    }

    useEffect(() => {
        if (checkSession("session")) {
            setIsLoggedIn(true);
            navigate("/admin/dashboard")
        }
        else navigate("/")
    }, [])

    useEffect(() => {
        checkPath();
    }, [location.pathname]);

    return (
        <Routes>
            <Route path="/" element={<Login />} />
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
