import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meniu } from './meniu';

describe('Meniu', () => {
  let component: Meniu;
  let fixture: ComponentFixture<Meniu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Meniu],
    }).compileComponents();

    fixture = TestBed.createComponent(Meniu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
