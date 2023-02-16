/**
 * Check Session as per sessionKey , returns session or null;
 * Return session or null
 * @returns {string | null}
 */
export const checkSession = (sessionKey) => {
    const session = localStorage.getItem(sessionKey);
    if (session) return session
    return null;
}

/**
 * Description
 * @returns {boolean}
 */
export const clearSession = (sessionKey) => {
    localStorage.removeItem(sessionKey)
    return true;
}
