import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BustypeOverviewComponent } from './bustype-overview.component';

describe('BustypeOverviewComponent', () => {
  let component: BustypeOverviewComponent;
  let fixture: ComponentFixture<BustypeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BustypeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BustypeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
