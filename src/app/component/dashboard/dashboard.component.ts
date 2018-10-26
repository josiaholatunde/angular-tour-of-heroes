import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../hero.service';
import Heroes from '../../models/Heroes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Heroes[];
  constructor(private heroesService: HeroService) {
    this.heroes = [];
  }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() {
    this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1,5));
  }

}
