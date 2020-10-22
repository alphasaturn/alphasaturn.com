import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGainersTableComponent } from './top-gainers-table.component';

describe('TopGainersTableComponent', () => {
  let component: TopGainersTableComponent;
  let fixture: ComponentFixture<TopGainersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopGainersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopGainersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
