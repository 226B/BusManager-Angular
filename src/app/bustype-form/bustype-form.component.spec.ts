import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BustypeFormComponent } from './bustype-form.component';

describe('BustypeFormComponent', () => {
  let component: BustypeFormComponent;
  let fixture: ComponentFixture<BustypeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BustypeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BustypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
