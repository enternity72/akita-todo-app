import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosStore } from "./state/todos.store";
import { TodoComponent } from './todo.component';
import { TodosContainerComponent } from "./todos-page/todos-container.component";
import { TodosComponent } from './todos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodosFiltersComponent } from './filter/filters.component';
import { TodosPageComponent } from './todos-page/todos-page.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodosComponent, TodosFiltersComponent, TodosPageComponent, TodosContainerComponent],
  declarations: [TodoComponent, TodosComponent, TodosFiltersComponent, TodosPageComponent, TodosContainerComponent],
  entryComponents: [TodosPageComponent],
  providers:[TodosStore]
})
export class TodosModule {}
