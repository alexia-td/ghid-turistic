import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { DateTuristiceService } from '../date-turistice'; // Importă Service-ul

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalii-destinatie.html',
  styleUrl: './detalii-destinatie.css'
})
export class DetaliiDestinatie implements OnInit {
  orasSelectat: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dateService: DateTuristiceService // Injectează Service-ul
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('numeOras');
    if (id) {
      this.orasSelectat = this.dateService.getOrasDupaId(id);
    }
  }

  mergiInapoi() {
    this.location.back();
  }
}