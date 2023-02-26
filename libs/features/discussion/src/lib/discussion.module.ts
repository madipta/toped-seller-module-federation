import { NgModule } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGift, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@NgModule({})
export class DiscussionModule {
  constructor(fl: FaIconLibrary) {
    fl.addIcons(faGift, faUserCircle);
  }
}
