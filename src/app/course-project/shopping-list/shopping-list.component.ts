import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  
  constructor() { }

  ngOnInit() {
  }

  addIngredient(ingredient: Ingredient){
    ingredient = new Ingredient(
      'test', 2
    );
    this.ingredients.push(ingredient);
  }

  deleteIngredient(id: number){
    const index = id++;
    this.ingredients.splice(index, -1);
  }

}
