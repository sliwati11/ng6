import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';
import {forEach} from '@angular/router/src/utils/collection';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  hero: Observable<Hero[]>;
  constructor(private heroService: HeroService) {
    this.hero = this.heroService.getHeroes();
  }

  ngOnInit() {
    this.hero.subscribe( evt => console.log('Salwa'));
  }



}
