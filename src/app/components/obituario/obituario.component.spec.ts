import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObituarioComponent } from './obituario.component';

describe('ObituarioComponent', () => {
  let component: ObituarioComponent;
  let fixture: ComponentFixture<ObituarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObituarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObituarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
