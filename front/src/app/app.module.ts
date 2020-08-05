import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SocketIoModule, SocketIoConfig } from "ngx-socket-io";
import { ChatComponent } from './components/chat/chat.component';

const config: SocketIoConfig = { url: "http://localhost:3000", options: {} };

@NgModule({
  declarations: [AppComponent, ChatComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
