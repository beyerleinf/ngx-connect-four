import {ReversePipe} from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return array in reverse order', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform([1, 2, 3])).toEqual([3, 2, 1]);
  });

  it('should return an empty array if values is undefined', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform(undefined)).toEqual([]);
  });

  it('should return an empty array if values is null', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform(null)).toEqual([]);
  });
});
