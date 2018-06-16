import {Pipe, PipeTransform} from '@angular/core';

/**
 * This pipe can be used to reverse arrays.
 *
 * @export
 */
@Pipe({name: 'reverse', pure: false})
export class ReversePipe implements PipeTransform {
  /**
   * Transforms the given array.
   *
   * @param  values The array to transform.
   * @returns The given array in reverse order. Returns an empty array when
   * values is undefined or null.
   * @memberof ReversePipe
   */
  transform(values: any[]): any[] {
    if (values && values !== null) {
      return values.reverse();
    }

    return [];
  }
}
