import { Injectable } from "@angular/core";
import { Socket } from "ngx-socket-io";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  constructor(private socket: Socket) {}

  sendChat(user, message) {
    this.socket.emit("chat", { user, message });
  }

  isWriting(user) {
    this.socket.emit("writing", { user });
  }

  receiveIsWriting() {
    return this.socket.fromEvent("writing");
  }

  receiveChat() {
    return this.socket.fromEvent("chat");
  }

  getUsers() {
    return this.socket.fromEvent("users");
  }
}
