import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpticaComponent } from './optica.component';

describe('OpticaComponent', () => {
  let component: OpticaComponent;
  let fixture: ComponentFixture<OpticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
