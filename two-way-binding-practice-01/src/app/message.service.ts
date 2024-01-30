import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  changeMsg(msg : string) {
    console.log("messageService actived")
    return msg;
  }
}
