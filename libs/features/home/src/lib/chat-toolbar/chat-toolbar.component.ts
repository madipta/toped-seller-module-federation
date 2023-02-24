import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  imports: [FontAwesomeModule, MatButtonModule],
  selector: 'ui-chat-toolbar',
  standalone: true,
  styleUrls: ['chat-toolbar.component.scss'],
  template: `
    <button mat-button>
      <fa-icon icon="message"></fa-icon>
      <span class="chat-text">Chat</span>
    </button>
    <button mat-button><fa-icon icon="wheelchair"></fa-icon></button>
    <span class="spacer">|</span>
    <button mat-button><fa-icon icon="star"></fa-icon></button>
  `
})
export class ChatToolbarComponent {}
