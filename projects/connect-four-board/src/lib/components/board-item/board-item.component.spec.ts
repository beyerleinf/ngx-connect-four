import {SimpleChange} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BoardItemComponent} from './board-item.component';

describe('ConnectFourGridItemComponent', () => {
  let component: BoardItemComponent;
  let fixture: ComponentFixture<BoardItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [BoardItemComponent]});

    fixture = TestBed.createComponent(BoardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnChanges', () => {
    it('should call console.warn twice when validateHexColor returns false', () => {
      const spy = spyOn(console, 'warn').and.callFake(() => {});
      spyOn(component, 'validateHexColor').and.returnValue(false);

      component.playerOneColor = 'SomeRandomColor';
      component.playerTwoColor = 'SomeRandomColor';

      component.ngOnChanges({
        playerOneColor: new SimpleChange(null, component.playerOneColor, true),
        playerTwoColor: new SimpleChange(null, component.playerTwoColor, true)
      });

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledTimes(2);
    });

    it('should set playerOneColor to #FFFF00 when validateHexColor returns false', () => {
      spyOn(console, 'warn').and.callFake(() => {});
      spyOn(component, 'validateHexColor').and.returnValue(false);

      component.playerOneColor = 'SomeRandomColor';
      component.playerTwoColor = 'SomeRandomColor';

      component.ngOnChanges({
        playerOneColor: new SimpleChange(null, component.playerOneColor, true),
        playerTwoColor: new SimpleChange(null, component.playerTwoColor, true)
      });

      expect(component.playerOneColor).toBe('#FFFF00');
    });

    it('should set playerTwoColor to #FF0000 when validateHexColor returns false', () => {
      spyOn(console, 'warn').and.callFake(() => {});
      spyOn(component, 'validateHexColor').and.returnValue(false);

      component.playerOneColor = 'SomeRandomColor';
      component.playerTwoColor = 'SomeRandomColor';

      component.ngOnChanges({
        playerOneColor: new SimpleChange(null, component.playerOneColor, true),
        playerTwoColor: new SimpleChange(null, component.playerTwoColor, true)
      });

      expect(component.playerTwoColor).toBe('#FF0000');
    });

    it('should leave colors at set value when validateHexColor returns true', () => {
      spyOn(console, 'warn').and.callFake(() => {});
      spyOn(component, 'validateHexColor').and.returnValue(true);

      component.playerOneColor = 'SomeRandomColor';
      component.playerTwoColor = 'SomeRandomColor';

      component.ngOnChanges({
        playerOneColor: new SimpleChange(null, component.playerOneColor, true),
        playerTwoColor: new SimpleChange(null, component.playerTwoColor, true)
      });

      expect(component.playerOneColor).toBe('SomeRandomColor');
      expect(component.playerTwoColor).toBe('SomeRandomColor');
    });
  });

  describe('getItemColor', () => {
    it('should return playerOneColor when player is 1', () => {
      component.playerOneColor = '#FFDDAA';
      component.ownedBy = 1;

      expect(component.getItemColor()).toBe('#FFDDAA');
    });

    it('should return playerTwoColor when player is 2', () => {
      component.playerTwoColor = '#AADDFF';
      component.ownedBy = 2;

      expect(component.getItemColor()).toBe('#AADDFF');
    });

    it('should return "white" when player is 0', () => {
      component.ownedBy = 0;

      expect(component.getItemColor()).toBe('white');
    });

    it('should return "white" when player is not 0, 1 or 2', () => {
      component.ownedBy = 192;

      expect(component.getItemColor()).toBe('white');
    });
  });

  describe('validateHexColor', () => {
    const sixCharColors = ['00', '33', '66', '99', 'cc', 'ff'];
    const threeCharColors = ['0', '3', '6', '9', 'c', 'f'];

    it('should return false when color is any random string', () => {
      expect(component.validateHexColor(Math.random().toString(36))).toBeFalsy();
    });

    for (let i = 0; i < sixCharColors.length; i++) {
      for (let j = 0; j < sixCharColors.length; j++) {
        for (let k = 0; k < sixCharColors.length; k++) {
          it(`should return true for #${sixCharColors[i] + sixCharColors[j] + sixCharColors[k]} of web safe colors`, () => {
            expect(component.validateHexColor('#' + sixCharColors[i] + sixCharColors[j] + sixCharColors[k])).toBeTruthy();
          });
        }
      }
    }

    for (let i = 0; i < threeCharColors.length; i++) {
      for (let j = 0; j < threeCharColors.length; j++) {
        for (let k = 0; k < threeCharColors.length; k++) {
          it(`should return true for #${threeCharColors[i] + threeCharColors[j] + threeCharColors[k]} of web safe colors`, () => {
            expect(component.validateHexColor('#' + threeCharColors[i] + threeCharColors[j] + threeCharColors[k])).toBeTruthy();
          });
        }
      }
    }
  });
});
