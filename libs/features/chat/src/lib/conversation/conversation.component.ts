import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  imports: [CommonModule, FontAwesomeModule],
  selector: 'ui-chat-conversation',
  standalone: true,
  styleUrls: ['./conversation.component.scss'],
  template: `
    <div class="header">
      <div class="sender-icon">
        <fa-icon icon="user-circle"></fa-icon>
      </div>
      <div class="sender-info">
        <h2>{{ sender }}</h2>
        <p>{{ lastActive }}</p>
      </div>
      <button class="menu">
        <fa-icon icon="ellipsis-vertical"></fa-icon>
      </button>
    </div>
    <div class="warning">
      Mohon berhati-hati dengan <a href="#">chat spam dan modus penipuan</a>.
      Jika kamu mendapat chat mencurigakan, laporkan segera.
    </div>
    <div class="main">
      <div class="guest-message">
        <div class="wrapper">
          Hai, barang ini ready? <span class="time">06:37</span>
        </div>
      </div>
      <div class="host-message">
        <div class="wrapper">ready gan! <span class="time">07:24</span></div>
      </div>
    </div>
    <div class="footer">
      <div class="input-wrapper">
        <button><fa-icon icon="face-smile"></fa-icon></button>
        <input type="text" placeholder="Tulis pesan..." />
        <button><fa-icon icon="circle-plus"></fa-icon></button>
      </div>
      <button class="send-messsage"><fa-icon icon="paper-plane"></fa-icon></button>
    </div>
  `,
})
export class ConversationComponent {
  @HostBinding('class.chat-conversation') baseCss = true;
  @Input() sender = 'Wiwik';
  @Input() lastActive = 'Terakhir online 34 menit lalu';
}
