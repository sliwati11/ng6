import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Article } from './article.model';
import {InputDecorator} from '@angular/core/src/metadata/directives';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;


  constructor() {
    // this.article wird jetzt von der Eingabe ausgefüllt
    // Wir brauchen nix mehr im Contruktor
  }

  ngOnInit() {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }
}
