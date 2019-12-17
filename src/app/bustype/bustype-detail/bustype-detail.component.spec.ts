import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BustypeDetailComponent } from './bustype-detail.component';

describe('BustypeDetailComponent', () => {
  let component: BustypeDetailComponent;
  let fixture: ComponentFixture<BustypeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BustypeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BustypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
