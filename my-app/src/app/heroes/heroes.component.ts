import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {  Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
 
  constructor(
    private router: Router,
    private heroService: CommonService) { }
 
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
 
  ngOnInit(): void {
    this.getHeroes();
  }
 
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
 
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }


}
