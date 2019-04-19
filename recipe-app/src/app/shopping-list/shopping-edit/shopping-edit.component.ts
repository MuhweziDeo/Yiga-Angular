import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') inputElementRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
 @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredient = new Ingredient(
    this.inputElementRef.nativeElement.value,
    this.amountInputRef.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
  }


}
