import {Component} from '@angular/core';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  board = [[1, 0, 2], [0, 0, 0]];

  itemDropped(column: number): void {
    console.log('Chip drop in column', column);
  }
}
