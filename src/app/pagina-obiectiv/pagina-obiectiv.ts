import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { DateTuristiceService } from '../date-turistice';

@Component({
  selector: 'app-pagina-obiectiv',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pagina-obiectiv.html',
  styleUrl: './pagina-obiectiv.css'
})
export class PaginaObiectiv implements OnInit {
  obiectiv: any;
  numeOras: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private dateService: DateTuristiceService,
    private location: Location
  ) {}

  ngOnInit() {
    // 1. Citim parametrii din URL (/oras/:numeOras/:obiectiv)
    this.numeOras = this.route.snapshot.paramMap.get('numeOras');
    const idObiectiv = this.route.snapshot.paramMap.get('obiectiv');

    // 2. Căutăm datele monumentului folosind Service-ul
    if (this.numeOras && idObiectiv) {
      this.obiectiv = this.dateService.getObiectiv(this.numeOras, idObiectiv);
    }
  }

  mergiInapoi() {
    this.location.back();
  }
}