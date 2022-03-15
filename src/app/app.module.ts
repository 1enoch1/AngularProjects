import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseProjectModule } from './course-project/course-project.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, CourseProjectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
