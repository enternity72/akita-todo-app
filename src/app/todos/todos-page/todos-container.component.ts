import { Component } from "@angular/core";
import { TodosQuery } from "../state/todos.query";
import { TodosService } from "../state/todos.service";
import { TodosStore } from "../state/todos.store";

@Component({
  selector: 'app-todos-container',
  template: '<app-todos-page></app-todos-page>',
  providers: [TodosStore, TodosQuery, TodosService]
})
export class TodosContainerComponent  {
}
