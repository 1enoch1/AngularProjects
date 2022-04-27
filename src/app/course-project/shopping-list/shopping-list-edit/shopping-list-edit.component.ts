import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(ingredient: Ingredient){

  }

  onDeleteIngredient(ingredient: Ingredient){

  }


}
