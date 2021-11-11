const TOKEN_KEY = 'jwt';

export const login = () => {
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
}

export const deleteToken = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    } else {
        return false;
    }
}