export interface CreateUserDto {
    username: string;
    password: string;
}

export interface LoginUserDto {
    username: string;
    password: string;
}

export interface SendMessageDto {
    senderId: any;
    receiverId: any;
    message: string;
}
