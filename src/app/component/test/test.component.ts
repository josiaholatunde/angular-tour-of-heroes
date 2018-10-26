import { Component, OnInit } from '@angular/core';
import Heroes from '../../models/Heroes';
import { HeroService } from '../../hero.service';
import { MessageService } from '../../services/message.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  currentHero: Heroes; //present hero in the for loop
 heroes: Heroes[];
 error: boolean;
  constructor(private heroesService: HeroService,private messageService: MessageService) {
    this.error = false;
  }
  resetError() {
    console.log("Yo");
    this.error = false;

  }
  handleClick = (hero: Heroes) => {
    this.messageService.addMessage({title:"Hero Clicked"});
    this.currentHero = hero;
  }
  deleteHero(hero: Heroes) {
    this.heroes = this.heroes.filter(presentHero => presentHero.id !== hero.id);
    this.heroesService.deleteHero(hero).subscribe();
  }
  addHero(name: string) {
    const userName = name.trim();
    if ( userName.length > 0)
    {
      this.heroesService.addHero({name} as Heroes).subscribe(hero => this.heroes
        .push(hero));

    } else {
      this.error = !this.error;
    }
  }

  getHeroes() {
     this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }

}
