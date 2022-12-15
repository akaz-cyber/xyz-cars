import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcarsComponent } from './detailcars.component';

describe('DetailcarsComponent', () => {
  let component: DetailcarsComponent;
  let fixture: ComponentFixture<DetailcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
