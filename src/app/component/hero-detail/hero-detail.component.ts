import { Component, OnInit, Input } from '@angular/core';
import Heroes from '../../models/Heroes';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../hero.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  currentHero: Heroes;

  constructor(private heroesService: HeroService,private route: ActivatedRoute, private location: Location) {}
  updateHero(hero: Heroes) {
    this.heroesService.updateHero(hero).subscribe(hero => this.location.back());
  }
  getHero() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroesService.getHero(id).subscribe(hero => this.currentHero = hero);
    console.log(this.currentHero);
  }
  goBack() {
    this.location.back();
  }
  ngOnInit() {
    this.getHero();
  }

}
