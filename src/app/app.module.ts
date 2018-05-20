import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ConnectFourBoardModule} from 'connect-four-board';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent

  ],
  imports: [BrowserModule, ConnectFourBoardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
