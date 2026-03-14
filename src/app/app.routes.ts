import { Routes } from '@angular/router';
import { Destinatii } from '../destinatii/destinatii';
import { DetaliiDestinatie } from './detalii-destinatie/detalii-destinatie';
import { PaginaObiectiv } from './pagina-obiectiv/pagina-obiectiv';

export const routes: Routes = [
  { path: '', component: Destinatii }, // Nivel 1: Lista orașe
  { path: 'oras/:numeOras', component: DetaliiDestinatie }, // Nivel 2: Pagina orașului
  { path: 'oras/:numeOras/:obiectiv', component: PaginaObiectiv } // Nivel 3: Detalii monument
];