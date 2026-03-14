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
      titlu: 'Transfăgărășan',
      descriere: 'Cel mai spectaculos drum din lume, șerpuind printre munții Făgăraș.',
      imagine: 'https://images.unsplash.com/photo-1570138531109-ec36940843cc?q=80&w=800'
    },
    {
      titlu: 'Sighișoara',
      descriere: 'O cetate medievală locuită, plină de istorie, culoare și străduțe pietruite.',
      imagine: 'https://images.unsplash.com/photo-1628169223381-872f260388d7?q=80&w=800'
    },
    {
      titlu: 'Delta Dunării',
      descriere: 'Un paradis al naturii, locul unde Dunărea întâlnește Marea Neagră.',
      imagine: 'https://images.unsplash.com/photo-1547463690-671408889423?q=80&w=800'
    }
  ];
}