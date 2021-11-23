import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Otto Iskandardinata'},
      { id: 12, name: 'Muhammad Husni Thamrin'},
      { id: 13, name: 'BJ Habibie'},
      { id: 14, name: 'Douwes Dekker (Setiabudi)'},
      { id: 15, name: 'Cut Nyak Dhien'},
      { id: 16, name: 'Izaak Huru Doko'},
      { id: 17, name: 'Frans Kaisiepo'},
      { id: 18, name: 'Mohammad Hatta'},
      { id: 19, name: 'Abdul Kadir Raden Temenggung'},
      { id: 20, name: 'Thomas Matulessy'},
      { id: 21, name: 'Raden Dewi Sartika'},
      { id: 22, name: 'Teuku Umar'},
      { id: 23, name: 'Tuanku Imam Bondjol'},
      { id: 25, name: 'Sudirman'},
      { id: 26, name: 'Pangeran Antasari'},
      { id: 27, name: 'Mohammad Natsir'},
      { id: 28, name: 'Gatot Subroto'},
    ]
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
