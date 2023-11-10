import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListingPageComponent } from './components/listing-page/listing-page.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { HomePageComponent } from './components/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ListingPageComponent,
    RightSidebarComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
