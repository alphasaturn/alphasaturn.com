import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorOverviewTableComponent } from './sector-overview-table.component';

describe('SectorOverviewTableComponent', () => {
  let component: SectorOverviewTableComponent;
  let fixture: ComponentFixture<SectorOverviewTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectorOverviewTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectorOverviewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
