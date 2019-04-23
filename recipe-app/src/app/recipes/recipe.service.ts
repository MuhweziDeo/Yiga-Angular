import { Recipe } from './recipes.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
// injecting a service into a service
export class RecipeService {
  recipeSelected =  new EventEmitter<Recipe>();
  private recipes: Recipe [] = [
    new Recipe('dees', 'A new one',
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' +
      'avocado-cherry-tomatoes-chopping-board-1166419.jpg&fm=jpgΩ', [new Ingredient(
        'Ingredient1', 4000
      ), new Ingredient(
        'Ingredient3', 40002
      )]),
    new Recipe('dee2', 'A new one 2', 'https://images.pexels.com/' +
      'photos/1166419/pexels-photo-1166419.jpeg?cs=srgb&dl=' +
      'avocado-cherry-tomatoes-chopping-board-1166419.jpg&fm=jpgΩ',
      [new Ingredient(
        'Ingredient3', 5000
      ), new Ingredient(
        'Ingredient4', 6000
      )]
    )
  ];
  constructor(private slService: ShoppingListService) {

  }
  getRecipes() {
    // @ts-ignore
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
