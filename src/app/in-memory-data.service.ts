import { InMemoryDbService } from 'angular-in-memory-web-api';
import Heroes from './models/Heroes';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      new Heroes( 11, 'Mr. Nice'),
      new Heroes( 12, 'Narco'),
      new Heroes( 13, 'Bombasto'),
      new Heroes( 14,  'Celeritas'),
      new Heroes(  15,  'Magneta' ),
      new Heroes(  16,  'RubberMan'),
      new Heroes( 17, 'Dynama'),
      new Heroes( 18, 'Dr IQ'),
      new Heroes( 19,  'Magma' ),
      new Heroes( 20, 'Tornado' )
    ]
    return { heroes };

  }
  genId(heroes: Heroes[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id))+ 1 : 11;
  }

  constructor() { }
}
