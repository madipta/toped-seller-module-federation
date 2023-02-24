import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  imports: [CommonModule, FontAwesomeModule],
  selector: 'ui-chat-list-item',
  standalone: true,
  styleUrls: ['./list-item.component.scss'],
  template: `
    <div class="chat-list-icon">
      <fa-icon color="accent" icon="user-circle"></fa-icon>
    </div>
    <div class="chat-list-info">
      <h2>{{ name }}</h2>
      <p>{{ lastMessage }}</p>
    </div>
    <div class="chat-list-date">{{ date }}</div>
  `,
})
export class ListItemComponent {
  @HostBinding('class.chat-list-item') baseCss = true;
  @Input() date = 'today';
  @Input() lastMessage = 'last message';
  @Input() name = 'user name';
}
