import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { IThread, ThreadComponent } from './thread/thread.component';

@Component({
  imports: [CommonModule, MatCardModule, ThreadComponent],
  selector: 'ui-discussion',
  standalone: true,
  styleUrls: ['./discussion.component.scss'],
  template: `
    <h2>Diskusi</h2>
    <mat-card>
      <mat-card-header>
        <div class="filter">
          <p>Tampilkan:</p>
          <button>Belum direspon (0)</button>
          <button>Bermasalah (0)</button>
          <button>Dibalas Otomatis</button>
        </div>
      </mat-card-header>
      <mat-card-content>
        <ui-thread [threads]="threads"></ui-thread>
      </mat-card-content>
    </mat-card>
  `,
})
export class DiscussionComponent {
  @HostBinding('class.discussion') baseCss = true;
  threads: IThread[] = [
    {
      customer: 'Ari',
      date: 'jan 2023',
      seller: 'Abu Umair',
      item: 'Laptop Lenovo',
      topic: 'kapan ada stok 10 kotak gan?',
      replies: [
        {
          user: 'seller',
          date: 'jan 2023',
          text: 'belum tau kapan',
        },
        {
          user: 'customer',
          date: 'jan 2023',
          text: 'sekarang ada stok apa tidak?',
        },
        {
          user: 'seller',
          date: 'jan 2023',
          text: 'cuma tinggal 1 saja',
        },
      ],
    },
    {
      customer: 'Widodo',
      date: 'feb 2023',
      seller: 'Abu Umair',
      item: 'LG 20MK400H-B 19.5" HD LED Monitor HDMI',
      topic: 'kalau kirim ke aceh bisa tanpa paking kayu min?',
      replies: [
        {
          user: 'seller',
          date: 'feb 2023',
          text: 'packing kami tidak menggunakan packing kayu kak, packing kami menggunakan bubble wrap.',
        },
      ],
    },
  ];
}
