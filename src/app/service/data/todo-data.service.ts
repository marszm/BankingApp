import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';
import {API_URL} from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private  http: HttpClient) { }

  retriveAllToDos(username) {
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
  }

  deleteToDo(username, id) {
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
  }

  retriveToDo(username, id) {
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
  }

  updateToDo(username, id, todo) {
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo);
  }

  createToDo(username, todo) {
    return this.http.post(`${API_URL}/users/${username}/todos`, todo);
  }

}
