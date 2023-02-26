import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export interface IReply {
  user: "seller" | "customer";
  date: string;
  text: string;
}

export interface IThread {
  customer: string;
  date: string;
  item: string;
  seller: string;
  topic: string;
  replies: IReply[];
};

@Component({
  imports: [CommonModule, FontAwesomeModule, MatCardModule],
  selector: 'ui-thread',
  standalone: true,
  styleUrls: ['./thread.component.scss'],
  template: `
    <mat-card class="outer" *ngFor="let thread of threads">
      <mat-card-header>
        <h3>{{ thread.item }}</h3>
      </mat-card-header>
      <mat-card-content>
        <div class="starter">
          <div class="photo">
            <fa-icon icon="user-circle"></fa-icon>
          </div>
          <div class="info">
            <div class="user">{{ thread.customer }} {{ thread.date }}</div>
            <div class="topic">{{ thread.topic }}</div>
          </div>
        </div>
        <div class="replies">
          <div [class]="reply.user + '-reply'" *ngFor="let reply of thread.replies">
            <div class="photo">
              <fa-icon icon="user-circle"></fa-icon>
            </div>
            <div class="info">
              <div class="user">{{ reply.user === "customer" ? thread.customer : thread.seller }} {{ reply.date }}</div>
              <div class="content">{{ reply.text }}</div>
            </div>
          </div>
        </div>
        <div class="reply-input">
          <textarea placeholder="Balas diskusi"></textarea>
        </div>
      </mat-card-content>
    </mat-card>
  `,
})
export class ThreadComponent {
  @HostBinding('class.thread') baseCss = true;
  @Input() threads!: IThread[];
}
