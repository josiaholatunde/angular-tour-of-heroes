import { Injectable } from '@angular/core';
import { Message } from '../models/Message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[];

  constructor() {
    this.messages=[];
  }

  addMessage(message: Message) {
    this.messages.push(message);
  }

  clearMessages() {
    this.messages = [];
  }

}
