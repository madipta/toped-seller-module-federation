import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListItemComponent } from './list-item.component';

@Component({
  imports: [CommonModule, FontAwesomeModule, ListItemComponent],
  selector: 'ui-chat-list',
  standalone: true,
  styleUrls: ['./list.component.scss'],
  template: `
    <div class="header">
      <h1>Chat</h1>
      <div>
        <button class="broadcast-button">
          <fa-icon icon="bullhorn"></fa-icon>
        </button>
        <button class="setting-button">
          <fa-icon icon="gear"></fa-icon>
        </button>
      </div>
    </div>
    <div class="search">
      <div class="wrapper">
        <input type="search" placeholder="Cari pengguna" />
        <button class="search-button">
          <fa-icon icon="search"></fa-icon>
        </button>
      </div>
      <button class="slider-button">
        <fa-icon icon="sliders"></fa-icon>
      </button>
    </div>
    <div class="list">
      <ui-chat-list-item></ui-chat-list-item>
      <ui-chat-list-item></ui-chat-list-item>
      <ui-chat-list-item></ui-chat-list-item>
      <ui-chat-list-item></ui-chat-list-item>
      <ui-chat-list-item></ui-chat-list-item>
      <ui-chat-list-item></ui-chat-list-item>
      <ui-chat-list-item></ui-chat-list-item>
      <ui-chat-list-item></ui-chat-list-item>
      <ui-chat-list-item></ui-chat-list-item>
      <ui-chat-list-item></ui-chat-list-item>
      <ui-chat-list-item></ui-chat-list-item>
      <ui-chat-list-item></ui-chat-list-item>
      <ui-chat-list-item></ui-chat-list-item>
    </div>
  `,
})
export class ChatListComponent {}
