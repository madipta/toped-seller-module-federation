import { Component } from '@angular/core';
import { HomeComponent } from '@/ui/features/home';

@Component({
  imports: [HomeComponent],
  selector: 'home-entry',
  standalone: true,
  template: ` <ui-home></ui-home> `,
})
export class RemoteEntryComponent {}
