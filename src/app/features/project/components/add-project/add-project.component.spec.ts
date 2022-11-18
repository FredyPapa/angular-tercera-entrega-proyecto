import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddProjectComponent } from './add-project.component';

describe('Pruebas Unitarias del Componente Agregar Proyecto', () => {
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectComponent ],
      imports:[
        HttpClientModule,
        ReactiveFormsModule,
        SharedModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea el componente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene válido si ingresó la descripción, fecha de inicio y fecha de fin',()=>{
    const formProject = component.formProject;
    const description = formProject.controls['description'];
    const startDate = formProject.controls['startDate'];
    const finishDate = formProject.controls['finishDate'];
    //
    description.setValue('Descripción');
    startDate.setValue(new Date('01/11/2022'));
    finishDate.setValue(new Date('30/11/2022'));
    //
    expect(formProject.valid).toBeTrue();
  });
});
