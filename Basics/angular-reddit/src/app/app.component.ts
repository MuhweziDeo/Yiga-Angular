import { Component} from '@angular/core';

import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	articles: Article[];
  title = 'angular-reddit';
  message: string;

  constructor() {
  	this.articles =  [
new Article('Angular', 'http://angular.io', 3),
new Article('Fullstack', 'http://fullstack.io', 2),
new Article('Angular Homepage', 'http://angular.io', 1),
];
  }

addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
	if(title.value || link.value != ""){
		this.articles.push(new Article(title.value, link.value));
		link.value="";
		title.value ="";
	}
	setTimeout(()=>{
		this.message ="";
	},5000)

	this.message = `${title.name} and ${link.name} are required`;


return false; 
}
sortedArticles():Article[]{
	return this.articles.sort((a:Article, b:Article) => b.votes - a.votes);
}



}
