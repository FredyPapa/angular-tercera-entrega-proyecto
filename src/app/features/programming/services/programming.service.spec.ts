import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProgrammingService } from './programming.service';

describe('ProgrammingService', () => {
  let httpClientSpy:{get:jasmine.Spy};
  let service: ProgrammingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    httpClientSpy=jasmine.createSpyObj('HttpClient',['get']);
    service = new ProgrammingService(httpClientSpy as any);
    //service = TestBed.inject(ProgrammingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
