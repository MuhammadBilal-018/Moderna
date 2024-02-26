import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModernaMainComponent } from './Home/moderna-main/moderna-main.component';
import { ModernaFeaturesComponent } from './Home/moderna-features/moderna-features.component';
import { ModernaServicesComponent } from './Home/moderna-services/moderna-services.component';
import { ModernaFooterComponent } from './Home/moderna-footer/moderna-footer.component';
import { ModernaNavbarComponent } from './Home/moderna-navbar/moderna-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ModernaMainComponent,
    ModernaFeaturesComponent,
    ModernaServicesComponent,
    ModernaFooterComponent,
    ModernaNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ModernaMainComponent]
})
export class AppModule { }
