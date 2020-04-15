import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioIncripcionComponent } from './formulario-incripcion.component';

describe('FormularioIncripcionComponent', () => {
  let component: FormularioIncripcionComponent;
  let fixture: ComponentFixture<FormularioIncripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioIncripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioIncripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
