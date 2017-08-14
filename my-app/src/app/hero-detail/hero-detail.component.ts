import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { CommonService } from '../common.service';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero;
  // @Input() hero: Hero;

  constructor(
  		 private heroService: CommonService,
		 private route: ActivatedRoute,
		 private location: Location
		) { }

  // detail() :void {
  // 	alert(this.hero);
  // }

ngOnInit(): void {
  this.route.paramMap
    .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
    .subscribe(hero => this.hero = hero);
}

goBack(): void {
  this.location.back();
}	


	
}
