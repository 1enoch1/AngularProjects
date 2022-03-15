import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeBookComponent } from './recipe-book.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RecipeBookComponent, RecipeDetailComponent, RecipeItemComponent],
  exports:[RecipeBookComponent, RecipeDetailComponent, RecipeItemComponent]
})
export class RecipeBookModule { }
