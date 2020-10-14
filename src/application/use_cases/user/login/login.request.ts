import { Auth } from "src/domain/auth.domain";

export interface LoginRequest {
    username: string;
    password: string;
}

export function LoginRequestMapper(loginRequest: LoginRequest): Auth {
    const auth: Auth = {
        username: loginRequest.username,
        password: loginRequest.password,
    }

    return auth
}