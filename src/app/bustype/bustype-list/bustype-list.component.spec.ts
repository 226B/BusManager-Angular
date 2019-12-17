import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BustypeListComponent } from './bustype-list.component';

describe('BustypeListComponent', () => {
  let component: BustypeListComponent;
  let fixture: ComponentFixture<BustypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BustypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BustypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
