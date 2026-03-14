import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Destinatii } from './destinatii';

describe('Destinatii', () => {
  let component: Destinatii;
  let fixture: ComponentFixture<Destinatii>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Destinatii],
    }).compileComponents();

    fixture = TestBed.createComponent(Destinatii);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
