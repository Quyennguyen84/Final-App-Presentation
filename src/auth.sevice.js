const AUTH_API = '${BASE_API_URL}/auth';
const USER_API = '${BASE_API_URL}/user';
const register = (FormData) => _post('{AUTH_API}/register',formData);
const login = (FormData) => _post('${AUTH_API}/login', formData);
console logout = () =>{
    clearStorage('isAuth');
    clearStorage('access_token');
    clearStorage('refresh_token');
}