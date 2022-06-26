import { NgModule } from '@angular/core';

import {BootstrapIconsModule} from 'ng-bootstrap-icons'
import {Alarm,Plus} from 'ng-bootstrap-icons/icons'

const icons = {
 Alarm,
 Plus
}

@NgModule({
  imports: [
    BootstrapIconsModule.pick(icons)
  ],
  exports:[
    BootstrapIconsModule
  ]
})
export class IconsModule { }
