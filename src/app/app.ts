import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meniu } from '../meniu/meniu';
import { Hero } from '../hero/hero';
import { Destinatii } from '../destinatii/destinatii';

@Component({
  selector: 'app-root',
  standalone: true,
  // Am pus doar "Meniu" aici
  imports: [RouterOutlet, Meniu, Hero, Destinatii], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  title = 'ghid-turistic';
}