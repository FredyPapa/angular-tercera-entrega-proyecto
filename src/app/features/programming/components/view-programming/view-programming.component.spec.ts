import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { Programming } from '../../../../models/programming';

import { ViewProgrammingComponent } from './view-programming.component';

describe('ViewProgrammingComponent', () => {
  let component: ViewProgrammingComponent;
  let fixture: ComponentFixture<ViewProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProgrammingComponent ],
      imports:[
        HttpClientModule,
        SharedModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
