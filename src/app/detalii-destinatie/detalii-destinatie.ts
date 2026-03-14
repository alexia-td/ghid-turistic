import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalii-destinatie',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalii-destinatie.html',
  styleUrl: './detalii-destinatie.css'
})
export class DetaliiDestinatie implements OnInit {
  numeDestinatie: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Aici citim "numele" din bara de adrese
    this.numeDestinatie = this.route.snapshot.paramMap.get('nume');
  }
}