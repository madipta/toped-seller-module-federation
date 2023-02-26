import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ChatListComponent } from './list/list.component';
import { ConversationComponent } from './conversation/conversation.component';

@Component({
  imports: [
    ChatListComponent,
    CommonModule,
    MatCardModule,
    ConversationComponent,
  ],
  selector: 'ui-chat',
  standalone: true,
  styleUrls: ['./chat.component.scss'],
  template: `
    <mat-card>
      <mat-card-content>
        <section class="list"><ui-chat-list></ui-chat-list></section>
        <section class="conversation">
          <ui-chat-conversation></ui-chat-conversation>
        </section>
      </mat-card-content>
    </mat-card>
  `,
})
export class ChatComponent {
  @HostBinding('class.chat') baseCss = true;
}
