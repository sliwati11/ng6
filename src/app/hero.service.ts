import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hero} from './hero';
import {element} from 'protractor';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private http: HttpClient) {}

  getHeroes() {
    return this.http.get<Hero[]>('https://api.hotslogs.com/Public/Data/Heroes');
  }
  /**getHero(name: string){

    let erg: Hero[] ;

    erg = this.http.get<Hero[]>('https://api.hotslogs.com/Public/Data/Heroes');
    forEach( erg, function(value, key)
    {
      console.log(key, value);
     /**if (value. == name)
      {
        return 1;
      }
    });


  }**/
}
