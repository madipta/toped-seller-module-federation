import { Component } from '@angular/core';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';

@Component({
  imports: [MenuPanelComponent, SearchPanelComponent],
  selector: 'app-primary-bar',
  standalone: true,
  styleUrls: ['./primary-bar.component.scss'],
  template: `
    <header>
      <h1 class="logo">Tokopedia <span>Seller</span></h1>
      <app-search-panel></app-search-panel>
      <app-menu-panel></app-menu-panel>
    </header>
  `,
})
export class PrimaryBarComponent {}
