import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DeveloperService } from './developer.service';

describe('DeveloperService', () => {
  let httpClientSpy:{get:jasmine.Spy};
  let service: DeveloperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    httpClientSpy=jasmine.createSpyObj('HttpClient',['get']);
    service = new DeveloperService(httpClientSpy as any);
    //service = TestBed.inject(DeveloperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

