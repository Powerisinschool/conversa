export interface User {
    id: any;
    username: string;
    password: string;
}

export interface AuthToken {
    user: User,
    token: any
}
