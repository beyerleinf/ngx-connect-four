import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

/**
 * This component represents a single item in a connect four grid.
 *
 * @export
 */
@Component({selector: 'cfb-board-item', templateUrl: './board-item.component.html', styleUrls: ['./board-item.component.css']})
export class BoardItemComponent implements OnChanges {
  /**
   * Indicates which player this item belongs to.
   * `1` for Player 1, `2` for Player 2.
   * `0` or anything else if the item is not owned by anyone.
   *
   * @default 0
   * @memberof BoardItemComponent
   */
  @Input() ownedBy: number = 0;

  /**
   * A hex representation of the color of the first player.
   * This can only be in hex format. Values like `red` or `blue` will not work.
   * When the value is invalid it will use its default value.
   *
   * It has been verified that the verification of the hex input will be
   * guaranteed to work with all of the web safe colors.
   *
   * @default '#FFFF00'
   * @see https://websafecolors.info/color-chart
   * @memberof BoardItemComponent
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
   * @default '#FF0000'
   * @see https://websafecolors.info/color-chart
   * @memberof BoardItemComponent
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
   * @default '#0000FF'
   * @see https://websafecolors.info/color-chart
   * @memberof BoardItemComponent
   */
  @Input() backgroundColor: string = '#0000FF';

  /**
   * Custom classes you can apply to the border of each item.
   * Note that you are not able to change `background-color` this way.
   * Use `backgroundColor` to do this.
   *
   * @memberof BoardItemComponent
   */
  @Input() customBorderClasses: string[];

  /**
   * Custom classes you can apply to the chip of each item.
   * Note that you are not able to change `background-color` this way.
   * Use `playerOneColor` and `playerTwoColor` to do this.
   *
   * @memberof BoardItemComponent
   */
  @Input() customChipClasses: string[];

  /**
   * Creates an instance of BoardItemComponent.
   * @memberof BoardItemComponent
   */
  constructor() {}

  /**
   * This life cycle hook gets called when any input property binding changes.
   *
   * @param changes The changes that occurred.
   * @memberof BoardItemComponent
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['playerOneColor'].currentValue) {
      if (!this.validateHexColor(changes['playerOneColor'].currentValue)) {
        console.warn(changes['playerOneColor'].currentValue, 'is not a valid color. Using #FFFF00 instead.');
        this.playerOneColor = '#FFFF00';
      }
    }

    if (changes['playerTwoColor'].currentValue) {
      if (!this.validateHexColor(changes['playerTwoColor'].currentValue)) {
        console.warn(changes['playerTwoColor'].currentValue, 'is not a valid color. Using #FF0000 instead.');
        this.playerTwoColor = '#FF0000';
      }
    }

    if (changes['backgroundColor'].currentValue) {
      if (!this.validateHexColor(changes['backgroundColor'].currentValue)) {
        console.warn(changes['backgroundColor'].currentValue, 'is not a valid color. Using #0000FF instead.');
        this.backgroundColor = '#0000FF';
      }
    }
  }

  /**
   * Gets the color of the circle or disc based on `ownedBy`.
   *
   * @returns The circle or disc based on `ownedBy`.
   * @memberof BoardItemComponent
   */
  getItemColor(): string {
    if (this.ownedBy === 1) {
      return this.playerOneColor;
    } else if (this.ownedBy === 2) {
      return this.playerTwoColor;
    } else {
      return 'white';
    }
  }

  /**
   * Checks if the given string is a valid hex color.
   * Works for `#FFFFFF` or `#FFF` formated hex strings.
   *
   * @param color The color to test.
   * @see https://websafecolors.info/color-chart
   */
  validateHexColor(color: string): boolean {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
  }
}
