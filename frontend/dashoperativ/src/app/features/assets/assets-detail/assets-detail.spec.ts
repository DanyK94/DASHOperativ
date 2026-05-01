import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsDetail } from './assets-detail';

describe('AssetsDetail', () => {
  let component: AssetsDetail;
  let fixture: ComponentFixture<AssetsDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetsDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetsDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
