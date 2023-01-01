import http from './http'

// 用户登录
export function UserLogin(data) {
    return http.post('/auth/login', data)
}

// 用户注册
export function UserRegister(data) {
    return http.post('/auth/register', data)
}