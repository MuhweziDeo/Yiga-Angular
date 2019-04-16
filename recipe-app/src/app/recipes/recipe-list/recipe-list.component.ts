import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe [] = [
  new Recipe('dees', 'A new one', 'https://images.pexels.com/' +
    'photos/1166419/pexels-photo-1166419.jpeg?cs=srgb&dl=' +
    'avocado-cherry-tomatoes-chopping-board-1166419.jpg&fm=jpgΩ')
];
  constructor() { }

  ngOnInit() {
  }

}
