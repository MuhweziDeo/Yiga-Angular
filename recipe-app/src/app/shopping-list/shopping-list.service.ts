import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';



export  class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient [] =  [new Ingredient('Tomatos', 300),
    new Ingredient('eggs', 900)];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    return this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    return this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
