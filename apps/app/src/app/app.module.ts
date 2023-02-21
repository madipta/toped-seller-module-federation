import { NgModule } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faBell,
  faBoxArchive,
  faBullhorn,
  faCamera,
  faChartLine,
  faCirclePlus,
  faComments,
  faFaceGrinTongue,
  faFileLines,
  faGaugeHigh,
  faGear,
  faGraduationCap,
  faHome,
  faMessage,
  faMobileScreen,
  faMoon,
  faPalette,
  faPhoneVolume,
  faStar,
  faSun,
  faTv,
  faUser,
  faWheelchair,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({})
export class AppModule {
  constructor(fl: FaIconLibrary) {
    fl.addIcons(
      faBell,
      faBoxArchive,
      faBullhorn,
      faCamera,
      faChartLine,
      faCirclePlus,
      faComments,
      faFaceGrinTongue,
      faFileLines,
      faGaugeHigh,
      faGear,
      faGraduationCap,
      faHome,
      faMessage,
      faMobileScreen,
      faMoon,
      faPalette,
      faPhoneVolume,
      faStar,
      faSun,
      faTv,
      faUser,
      faWheelchair
    );
  }
}
