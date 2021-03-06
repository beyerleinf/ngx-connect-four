import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * This components represents the complete board of the Connect Four game.
 *
 * @export
 */
@Component({selector: 'cfb-board', templateUrl: './board.component.html', styleUrls: ['./board.component.css']})
export class BoardComponent {
  /**
   * This event will be emitted when an item on the board is clicked.
   * The data will be the column index.
   *
   * @memberof BoardComponent
   */
  @Output() drop: EventEmitter<number>;

  /**
   * A two dimensional array of numbers representing the play board.
   * The item at `board[0][0]` will be the bottom left item.
   *
   * @memberof BoardComponent
   */
  @Input() board: number[][];

  /**
   * A hex representation of the color of the first player.
   * This can only be in hex format. Values like `red` or `blue` will not work.
   * When the value is invalid it will use its default value.
   *
   * It has been verified that the verification of the hex input will be
   * guaranteed to work with all of the web safe colors.
   *
   * See: https://websafecolors.info/color-chart
   * @default '#FFFF00'
   * @memberof BoardComponent
   */
  @Input() playerOneColor: string = '#FFFF00';

  /**
   * A hex representation of the color of the second player.
   * This can only be in hex format. Values like `red` or `blue` will not work.
   * When the value is invalid it will use its default value.
   *
   * It has been verified that the verification of the hex input will be
   * guaranteed to work with all of the web safe colors.
   *
   * See: https://websafecolors.info/color-chart
   * @default '#FF0000'
   * @memberof BoardComponent
   */
  @Input() playerTwoColor: string = '#FF0000';

  /**
   * A hex representation of the color of the item background.
   * This can only be in hex format. Values like `red` or `blue` will not work.
   * When the value is invalid it will use its default value.
   *
   * It has been verified that the verification of the hex input will be
   * guaranteed to work with all of the web safe colors.
   *
   * See: https://websafecolors.info/color-chart
   * @default '#0000FF'
   * @memberof BoardComponent
   */
  @Input() backgroundColor: string = '#0000FF';

  /**
   * Custom classes you can apply to the border of each item.
   * Note that you are not able to change `background-color` this way.
   * Use `backgroundColor` to do this.
   *
   * @memberof BoardComponent
   */
  @Input() customBorderClasses: string[];

  /**
   * Custom classes you can apply to the chip of each item.
   * Note that you are not able to change `background-color` this way.
   * Use `playerOneColor` and `playerTwoColor` to do this.
   *
   * @memberof BoardComponent
   */
  @Input() customChipClasses: string[];

  /**
   * Creates an instance of BoardComponent.
   * @memberof BoardComponent
   */
  constructor() {
    this.drop = new EventEmitter();
  }

  /**
   * The method for when an item is clicked.
   *
   * @param column The column index.
   * @memberof BoardComponent
   */
  itemClick(column: number): void {
    this.drop.emit(column);
  }
}
