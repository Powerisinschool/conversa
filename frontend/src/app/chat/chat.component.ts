import { Component } from '@angular/core';

interface Message {
  content: string;
  timestamp: string;
}

@Component({
  selector: 'conversa-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  receivedMessages: Message[] = [
    {
      content: 'Hello! How are you?',
      timestamp: '10:00 AM'
    }
    // More received messages
  ];

  sentMessages: Message[] = [
    {
      content: 'I\'m great, thanks! How about you?',
      timestamp: '10:05 AM'
    }
    // More sent messages
  ];

  newMessage: string = '';

  // sendMessage() {
  //   if (this.newMessage.trim() !== '') {
  //     const message: Message = {
  //       content: this.newMessage,
  //       timestamp: new Date().toLocaleTimeString()
  //     };
  //     this.sentMessages.push(message);
  //     this.newMessage = '';
  //   }
  // }
}
