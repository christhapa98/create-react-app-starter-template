import { dashboard, settings, users } from "../components/common/icons";

export const adminBaseRoute = "/admin/";
export const clientBaseRoute = "/client/";

export const adminSidebarItems = [
    { name: "Dashboard", link: adminBaseRoute, icon: dashboard },
    { name: "User", link: adminBaseRoute + "users", icon: users },
    { name: "Settings", link: adminBaseRoute + "settings", icon: settings },
]

export const clientNavbarItems = [
    { name: "Home", link: "", icon: "" },
    { name: "About", link: "", icon: "" },
    { name: "Contact", link: "", icon: "" },
]