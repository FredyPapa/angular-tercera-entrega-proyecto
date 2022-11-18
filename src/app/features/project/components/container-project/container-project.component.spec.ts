import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { ContainerProjectComponent } from './container-project.component';

describe('ContainerProjectComponent', () => {
  let component: ContainerProjectComponent;
  let fixture: ComponentFixture<ContainerProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerProjectComponent ],
      imports:[
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
