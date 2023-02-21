import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  imports: [FontAwesomeModule, MatButtonModule, MatToolbarModule],
  selector: 'app-menu-panel',
  standalone: true,
  styleUrls: ['./menu-panel.component.scss'],
  template: `
    <mat-toolbar class="user-toolbar">
      <button mat-button><fa-icon icon="bell"></fa-icon></button>
      <span class="spacer">|</span>
      <button class="user-button" color="accent" mat-button>
        <fa-icon icon="face-grin-tongue"></fa-icon>
        <span class="username">{{ userName }}</span>
      </button>
    </mat-toolbar>
  `,
})
export class MenuPanelComponent {
  userName = 'Madipta';
}
