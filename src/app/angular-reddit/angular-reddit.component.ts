import { Component, OnInit } from '@angular/core';
import {Article} from '../article/article.model';

@Component({
  selector: 'app-angular-reddit',
  templateUrl: './angular-reddit.component.html',
  styleUrls: ['./angular-reddit.component.scss']
})
export class AngularRedditComponent implements OnInit {

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 6', 'http://angular.io', 3),
      new Article('weShareFiles', 'http://weSellFiles.com', 10),
      new Article('Angular Homepage', 'http://angular.io', 2),
    ];
  }


  ngOnInit() {
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): Boolean {
    this.articles.push(new Article(title.value, link.value, 0));
    console.log(`Adding article Title: ${title.value} and link: ${link.value}` );
    return false;
  }
  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => a.votes - b.votes);
  }
}
