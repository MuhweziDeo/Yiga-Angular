import { Recipe } from './recipes.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected =  new EventEmitter<Recipe>();
  private recipes: Recipe [] = [
    new Recipe('dees', 'A new one', 'https://images.pexels.com/' +
      'photos/1166419/pexels-photo-1166419.jpeg?cs=srgb&dl=' +
      'avocado-cherry-tomatoes-chopping-board-1166419.jpg&fm=jpgΩ'),
    new Recipe('dee2', 'A new one 2', 'https://images.pexels.com/' +
      'photos/1166419/pexels-photo-1166419.jpeg?cs=srgb&dl=' +
      'avocado-cherry-tomatoes-chopping-board-1166419.jpg&fm=jpgΩ')
  ];

  getRecipes() {
    // @ts-ignore
    return this.recipes.slice();
  }
}
