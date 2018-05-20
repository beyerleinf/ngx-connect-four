import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {BoardComponent, BoardItemComponent} from './components';
import {ReversePipe} from './pipes';

@NgModule({
  imports: [CommonModule],
  declarations: [BoardComponent, BoardItemComponent, ReversePipe],
  exports: [BoardComponent, BoardItemComponent]
})
export class ConnectFourBoardModule {
}
