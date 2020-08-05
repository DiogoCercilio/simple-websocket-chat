import { Component, OnInit, Input } from "@angular/core";
import { ChatService } from "../../services/chat.service";

@Component({
  selector: "app-chat",
  templateUrl: "chat.component.html",
  styleUrls: ["chat.component.scss"],
})
export class ChatComponent implements OnInit {
  @Input() position: string;
  @Input() width: string;
  @Input() height: string;

  public userName: string;
  public users: number = 0;
  public message: string = "";
  public messages: any[] = [];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.userName = prompt("Qual é o seu nome?");
    this.chatService.receiveChat().subscribe((message: any) => {
      this.messages.push(message);
    });

    this.chatService.getUsers().subscribe((users: number) => {
      this.users = users;
    });
  }

  addChat() {
    this.messages.push({ user: this.userName, message: this.message });
    this.chatService.sendChat(this.userName, this.message);
    this.message = "";
  }
}
