import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ConnectFourBoardModule} from 'connect-four-board';

import {AppComponent} from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [ConnectFourBoardModule],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
