import { TestBed, inject } from '@angular/core/testing';

import { ConnectFourBoardService } from './connect-four-board.service';

describe('ConnectFourBoardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectFourBoardService]
    });
  });

  it('should be created', inject([ConnectFourBoardService], (service: ConnectFourBoardService) => {
    expect(service).toBeTruthy();
  }));
});
