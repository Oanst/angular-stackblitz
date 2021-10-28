import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableCompComponent } from './data-table-comp.component';

describe('DataTableCompComponent', () => {
  let component: DataTableCompComponent;
  let fixture: ComponentFixture<DataTableCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTableCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
