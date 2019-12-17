import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusOverviewComponent } from './bus-overview.component';

describe('BusOverviewComponent', () => {
  let component: BusOverviewComponent;
  let fixture: ComponentFixture<BusOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
