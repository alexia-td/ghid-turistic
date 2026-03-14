import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaliiDestinatie } from './detalii-destinatie';

describe('DetaliiDestinatie', () => {
  let component: DetaliiDestinatie;
  let fixture: ComponentFixture<DetaliiDestinatie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetaliiDestinatie],
    }).compileComponents();

    fixture = TestBed.createComponent(DetaliiDestinatie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
