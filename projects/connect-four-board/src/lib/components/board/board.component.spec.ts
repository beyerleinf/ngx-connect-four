import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BoardComponent, BoardItemComponent} from '../';
import {ReversePipe} from '../../pipes';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [BoardComponent, BoardItemComponent, ReversePipe]});

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create drop event', () => {
    expect(component.drop).toBeTruthy();
  });

  describe('itemClick', () => {
    it('should emit the drop event with the correct index', () => {
      const spy = spyOn(component.drop, 'emit');

      component.itemClick(2);

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(2);
    });
  });
});
