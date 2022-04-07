import { Component, OnInit } from '@angular/core';
import { ToDos } from './+state/todo.service';
import { ToDoStatus } from './+state/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private toDosService: ToDos) {}

  ngOnInit(): void {
    this.fetchToDos();
  }

  fetchToDos(): void {
    this.toDosService.getToDos().subscribe((toDos) => {
      const secondPendingToDo = toDos.filter(
        (toDo) => toDo.status === ToDoStatus.pending
      )[1];
      console.log(secondPendingToDo);
    });
  }
}
