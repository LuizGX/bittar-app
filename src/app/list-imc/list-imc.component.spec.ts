import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImcComponent } from './list-imc.component';

describe('ListImcComponent', () => {
  let component: ListImcComponent;
  let fixture: ComponentFixture<ListImcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListImcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListImcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
