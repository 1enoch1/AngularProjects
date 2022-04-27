import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeBookComponent } from './recipe-book.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecipeBookComponent, RecipeDetailComponent, RecipeListComponent, RecipeItemComponent],
  exports:[RecipeBookComponent, RecipeDetailComponent, RecipeListComponent, RecipeItemComponent]
})
export class RecipeBookModule { }
