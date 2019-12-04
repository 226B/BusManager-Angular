import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseContentOverviewComponent } from './base-content-overview.component';

describe('BaseContentOverviewComponent', () => {
  let component: BaseContentOverviewComponent;
  let fixture: ComponentFixture<BaseContentOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseContentOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseContentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
