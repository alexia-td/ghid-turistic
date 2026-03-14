import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaObiectiv } from './pagina-obiectiv';

describe('PaginaObiectiv', () => {
  let component: PaginaObiectiv;
  let fixture: ComponentFixture<PaginaObiectiv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaObiectiv],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaObiectiv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
