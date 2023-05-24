import { Injectable, NotFoundException } from '@nestjs/common';
import { Message } from 'src/interfaces/message.interface';
import { AuthToken, User } from 'src/interfaces/user.interface';
import { CreateUserDto, LoginUserDto, SendMessageDto } from './dto';
import { Conversation } from 'src/interfaces/conversation.interface';

@Injectable()
export class MessagingService {
    private users: User[] = [];
    private messages: Message[] = [];

    async registerUser(createUserDto: CreateUserDto): Promise<any> {
        // Logic to register a new user
        const newUser: User = {
            id: generateUniqueId(),
            username: createUserDto.username,
            password: createUserDto.password,
        };
        this.users.push(newUser);
        console.log(newUser);
        return {
            message: "User registered successfully",
            user: {
                id: newUser.id,
                username: newUser.username
            }
        };
    }

    async loginUser(loginUserDto: LoginUserDto): Promise<any> {
        // Logic to authenticate and generate an access token for the user
        const user = this.users.find(
            (u) =>
                u.username === loginUserDto.username &&
                u.password === loginUserDto.password,
        );
        if (!user) {
            throw new NotFoundException('Invalid credentials');
        }
        const token = generateAccessToken(user.id);
        return {
            message: "Login successful",
            user: {
                id: user.id,
                username: user.username
            },
            token: token
        };
    }

    async sendMessage(sendMessageDto: SendMessageDto): Promise<any> {
        // Logic to send a message
        const newMessage: Message = {
            id: generateUniqueId(),
            senderId: sendMessageDto.senderId,
            receiverId: sendMessageDto.receiverId,
            message: sendMessageDto.message,
            timestamp: new Date().toISOString(),
        };
        this.messages.push(newMessage);
        return {
            message: newMessage.message,
            messageId: newMessage.id
        };
    }

    async getConversation(conversationId: string): Promise<Conversation> {
        // Logic to retrieve a conversation based on its ID
        const conversation: Conversation = {
            conversationId,
            messages: this.messages.filter((m) => m.id === conversationId),
        };
        return conversation;
    }
}

function generateUniqueId() {
    return `user-id`;
}

function generateAccessToken(id: any) {
    return `access-token`;
}

