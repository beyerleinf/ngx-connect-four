import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectFourBoardComponent } from './connect-four-board.component';

describe('ConnectFourBoardComponent', () => {
  let component: ConnectFourBoardComponent;
  let fixture: ComponentFixture<ConnectFourBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectFourBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectFourBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
