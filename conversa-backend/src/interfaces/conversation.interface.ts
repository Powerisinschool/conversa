import { Message } from "./message.interface";

export interface Conversation {
    conversationId: any;
    messages: Message[];
}