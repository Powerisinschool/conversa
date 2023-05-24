import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MessagingService } from './messaging.service';
import { CreateUserDto, LoginUserDto, SendMessageDto } from './dto';

@Controller('api/messaging')
export class MessagingController {
    constructor(private readonly messagingService: MessagingService) { }

    @Post('register') // Route: POST /api/messaging/register
    async registerUser(@Query() createUserDto: CreateUserDto) {
        // Call the service to handle user registration
        return this.messagingService.registerUser(createUserDto);
    }

    @Post('login') // Route: POST /api/messaging/login
    async loginUser(@Query() loginUserDto: LoginUserDto) {
        return this.messagingService.loginUser(loginUserDto);
    }

    @Post('messages') // Route for sending messages
    async sendMessage(@Query() sendMessageDto: SendMessageDto) {
        return this.messagingService.sendMessage(sendMessageDto);
    }

    @Get('conversations/:conversationId') // Route for retrieving conversation
    async getConversation(@Param('conversationId') conversationId: string) {
        return this.messagingService.getConversation(conversationId);
    }
}
