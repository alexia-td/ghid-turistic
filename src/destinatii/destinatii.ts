import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Important pentru liste!
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-destinatii',
  standalone: true,
  imports: [CommonModule, RouterModule], // Adăugăm CommonModule aici
  templateUrl: './destinatii.html',
  styleUrl: './destinatii.css'
})
export class Destinatii {
  // Aici creăm lista noastră de destinații (un "Array" de obiecte)
  listaDestinatii = [
    {
      id: 'paris',
      titlu: 'Paris',
      descriere: 'Orașul Luminilor și al iubirii.',
      imagine: 'imagini/paris.png'
    },
    {
      id: 'lyon',
      titlu: 'Lyon',
      descriere: 'Capitala gastronomiei franceze.',
      imagine: 'imagini/lyon.png'
    },
    {
      id: 'nice',
      titlu: 'Nice',
      descriere: 'Perla Coastei de Azur.',
      imagine: 'imagini/nice.png'
    }
  ];
}