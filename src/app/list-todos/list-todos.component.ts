import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from '@angular/router';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}

}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {


  todos: Todo[];

  message : string;

  constructor(private todoService: TodoDataService,
              private router: Router) { }

  ngOnInit() {
    this.refseshToDos();
  }

  refseshToDos() {
    this.todoService.retriveAllToDos('in28minutes').subscribe(
      response => {
        this.todos = response
      }
    );
  }

  deleteToDo(id) {
    this.todoService.deleteToDo('in28minutes', id).subscribe(
      response => {
        this.message = `delete of ${id} pass!`;
        this.refseshToDos();
      }
    )
  }

  updateToDo(id) {
    this.router.navigate(['todos', id]);
  }

  addToDo() {
    this.router.navigate(['todos', -1]);
  }
}
