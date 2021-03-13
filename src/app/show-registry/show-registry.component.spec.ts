import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRegistryComponent } from './show-registry.component';

describe('ShowRegistryComponent', () => {
  let component: ShowRegistryComponent;
  let fixture: ComponentFixture<ShowRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
