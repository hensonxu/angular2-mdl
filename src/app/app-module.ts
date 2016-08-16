import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MdlModule } from './../components/index';
import { RouterModule } from '@angular/router';
import { Angular2MdlAppComponent, Home } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { ButtonDemo } from './button/button.component';
import { BadgeDemo } from './badge/badge.component';
import { CardDemo } from './card/card.component';
import { IconDemo } from './icon/icon.component';
import { ShadowDemo } from './shadow/shadow.component';
import { LoadingDemo } from './loading/loading.component';
import { ListDemo } from './list/list.component';
import {
  LayoutDemo,
  Layout0Demo,
  Layout1Demo,
  Layout2Demo,
  Layout3Demo
} from './layout/layout.component';
import { MenuDemo } from './menus/menu.component';
import { ToggleDemo } from './toggle/toggle.component';
import { TooltipDemo } from './tooltip/tooltip.component';
import { SliderDemo } from './slider/slider.component';
import { SnackbarDemo } from './snackbar/snackbar.component';
import { TableDemo } from './tables/table.component';
import { TabsDemo } from './tabs/tabs.component';
import { TextFieldDemo } from './textfield/textfield.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MdlModule,
    RouterModule
  ],
  providers: [
    APP_ROUTER_PROVIDERS,
  ],
  declarations: [
    Home,
    ButtonDemo,
    BadgeDemo,
    CardDemo,
    IconDemo,
    ShadowDemo,
    LoadingDemo,
    ListDemo,
    LayoutDemo,
    Layout0Demo,
    Layout1Demo,
    Layout2Demo,
    Layout3Demo,
    MenuDemo,
    ToggleDemo,
    TooltipDemo,
    SliderDemo,
    SnackbarDemo,
    TableDemo,
    TabsDemo,
    TextFieldDemo,
    Angular2MdlAppComponent
  ],
  bootstrap: [
    Angular2MdlAppComponent
  ],
})
export class Angular2MdlAppModule {

  constructor(private appRef: ApplicationRef) { }

  public ngDoBootstrap() {
    this.appRef.bootstrap(Angular2MdlAppComponent);
  }
}