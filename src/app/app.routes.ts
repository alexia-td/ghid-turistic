import { Routes } from '@angular/router';
import { Destinatii } from '../destinatii/destinatii';
import { DetaliiDestinatie } from './detalii-destinatie/detalii-destinatie';

export const routes: Routes = [
  { path: '', component: Destinatii },
  { path: 'detalii', component: DetaliiDestinatie }
];