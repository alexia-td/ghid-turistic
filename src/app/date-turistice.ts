import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTuristiceService {

  private dateFranta = [
    {
      id: 'paris',
      titlu: 'Paris',
      descriere: 'Orașul Luminilor și al iubirii.',
      imagine: 'imagini/paris.png',
      obiective: [
        { id: 'turnul-eiffel', nume: 'Turnul Eiffel', desc: 'Simbolul ingineriei franceze.', foto: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1000' },
        { id: 'louvre', nume: 'Muzeul Louvre', desc: 'Cel mai vizitat muzeu de artă.', foto: 'https://images.unsplash.com/photo-1597923891185-df0486049301?q=80&w=1000' }
      ]
    },
    {
      id: 'lyon',
      titlu: 'Lyon',
      descriere: 'Capitala gastronomiei franceze.',
      imagine: 'imagini/lyon.png',
      obiective: [
        { id: 'basilica', nume: 'Basilica Notre-Dame', desc: 'O biserică superbă pe deal.', foto: 'https://images.unsplash.com/photo-1583248350174-8b63ef226f33?q=80&w=1000' }
      ]
    }
  ];

  getOrase() {
    return this.dateFranta;
  }

  getOrasDupaId(id: string) {
    return this.dateFranta.find(oras => oras.id === id);
  }
  getObiectiv(idOras: string, idObiectiv: string) {
  const oras = this.getOrasDupaId(idOras);
  return oras?.obiective.find(obj => obj.id === idObiectiv);
}
}