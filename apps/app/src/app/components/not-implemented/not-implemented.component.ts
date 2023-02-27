import { Component } from '@angular/core';

@Component({
  selector: 'app-not-implemented',
  standalone: true,
  styles: [
    `
      :host {
        display: block;
        padding: 16px 32px;
      }

      h2 {
        font-size: 2rem;
      }
    `,
  ],
  template: `
    <h2>Not implemented yet!</h2>
    <p>may never be applied, just to practice the angular material module federation</p>
  `,
})
export class NotImplementedComponent {}
