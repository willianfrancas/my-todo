import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFieldErrorComponent } from './control-field-error.component';

describe('ControlFieldErrorComponent', () => {
  let component: ControlFieldErrorComponent;
  let fixture: ComponentFixture<ControlFieldErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlFieldErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlFieldErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
