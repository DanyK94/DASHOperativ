import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAsset } from './new-asset';

describe('NewAsset', () => {
  let component: NewAsset;
  let fixture: ComponentFixture<NewAsset>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAsset],
    }).compileComponents();

    fixture = TestBed.createComponent(NewAsset);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
