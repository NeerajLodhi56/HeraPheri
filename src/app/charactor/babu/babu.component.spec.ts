import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabuComponent } from './babu.component';

describe('BabuComponent', () => {
  let component: BabuComponent;
  let fixture: ComponentFixture<BabuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
