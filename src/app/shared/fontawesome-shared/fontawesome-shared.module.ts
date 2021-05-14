import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {faSlideshare} from '@fortawesome/free-brands-svg-icons';
import {
  faAsterisk,
  faBell as faSolidBell,
  faCircle,
  faCloud,
  faCog,
  faEnvelopeOpen,
  faHandPointLeft,
  faMobile,
  faMoon,
  faPlay,
  faSkating,
  faSkiing,
  faSkiingNordic,
  faSmileBeam as faSmileBeanSolid,
  faSmileWink as faSmileWinkSolid,
  faSnowboarding,
  faSpinner,
  faSquare,
  faStar,
  faSun,
  faSwimmer,
  faSync,
  faBan,
  faCamera,
  faDownload,
  faCalendarAlt,
  faThLarge,
  faListAlt,
  faThList,
  faFileImport,
  faShoppingBasket, faSearchDollar,
  faCommentDollar, faUniversity, faUserTie, faHeart,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';
import {
  faEdit, faEye, faShareSquare, faSmileWink, faStar as farStar, faSquare as farSquare,
  faWindowClose, faFileWord, faFilePdf, faTrashAlt, faFileAlt, faFileExcel, faFilePowerpoint, faCheckSquare
} from '@fortawesome/free-regular-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";

@NgModule({
  declarations: [],
  imports: [
    FontAwesomeModule
  ],
  exports: [
    FontAwesomeModule
  ]
})
export class FontawesomeSharedModule {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(faEdit, farStar, faEye, faShareSquare, faSlideshare, faWindowClose,
      faSmileWinkSolid, faSmileBeanSolid, faDownload, faFileWord, faFilePdf,
      faSmileWink, faSmileBeanSolid, faEnvelopeOpen, faCloud,
      faMobile, faSquare, faSpinner, faCircle,
      faSync, faPlay, faSun, faMoon, faStar,
      faHandPointLeft, faAsterisk, faCog, faSkating,
      faSkiing, faSkiingNordic, faSnowboarding, faSwimmer,
      faSolidBell, faSolidBell, faCamera, faBan, faTrashAlt, faCalendarAlt,
      faFileAlt, faBars, faFileExcel, faFilePowerpoint, faThLarge, faListAlt, faThList,
      faFileImport, faShoppingCart, faCheckSquare, farSquare, faShoppingBasket, faSearchDollar, faCommentDollar,
      faUserTie, faUniversity, faHeart, faAngleRight,
    );
  }
}
