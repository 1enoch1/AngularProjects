import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-edit/shopping-list-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  exports: [ShoppingListComponent, ShoppingListEditComponent]
})
export class ShoppingListModule { }
