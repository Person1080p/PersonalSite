import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VertNavbarComponent } from './vert-navbar/vert-navbar.component';
import { TextBodyComponent } from './text-body/text-body.component';

@NgModule({
  declarations: [
    AppComponent,
    VertNavbarComponent,
    TextBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
