/**
 * Description
 * Return session or null
 * @returns {string | null}
 */
export const checkSession = () => {
    const session = localStorage.getItem("");
    if (session) return session
    else return null;
}

/**
 * Description
 * @returns {boolean}
 */
export const clearSession = () => {
    localStorage.removeItem("")
    return true;
}
