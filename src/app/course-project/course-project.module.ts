import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseProjectComponent } from './course-project.component';
import { RecipeBookModule } from './recipe-book/recipe-book.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [CourseProjectComponent, HeaderComponent],
  imports: [
    CommonModule,
    RecipeBookModule,
    ShoppingListModule
  ],
  exports: [CourseProjectComponent]
})
export class CourseProjectModule { }
