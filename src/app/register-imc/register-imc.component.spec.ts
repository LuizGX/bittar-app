import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterImcComponent } from './register-imc.component';

describe('RegisterImcComponent', () => {
  let component: RegisterImcComponent;
  let fixture: ComponentFixture<RegisterImcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterImcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
