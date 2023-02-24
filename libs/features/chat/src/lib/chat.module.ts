import { NgModule } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faBullhorn,
  faCirclePlus,
  faEllipsisVertical,
  faFaceSmile,
  faGear,
  faPaperPlane,
  faSearch,
  faSliders,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({})
export class ChatModule {
  constructor(fl: FaIconLibrary) {
    fl.addIcons(
      faBullhorn,
      faCirclePlus,
      faEllipsisVertical,
      faFaceSmile,
      faGear,
      faPaperPlane,
      faSearch,
      faSliders,
      faUserCircle
    );
  }
}
