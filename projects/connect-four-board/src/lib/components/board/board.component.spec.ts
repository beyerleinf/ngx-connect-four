import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BoardComponent, BoardItemComponent} from '../';
import {ReversePipe} from '../../pipes';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({declarations: [BoardComponent, BoardItemComponent, ReversePipe]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
