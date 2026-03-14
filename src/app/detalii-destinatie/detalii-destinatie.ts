import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common'; // Am adăugat Location aici

@Component({
  selector: 'app-detalii-destinatie',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalii-destinatie.html',
  styleUrl: './detalii-destinatie.css'
})
export class DetaliiDestinatie implements OnInit {
  numeDestinatie: string | null = '';

  // Adăugăm location în constructor
  constructor(
    private route: ActivatedRoute,
    private location: Location 
  ) {}

  ngOnInit() {
    this.numeDestinatie = this.route.snapshot.paramMap.get('nume');
  }

  // Creăm o funcție care să ne ducă înapoi
  mergiInapoi() {
    this.location.back();
  }
}