import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.scss'],
})
export class TaskListComponentComponent  implements OnInit {
  @Input()
  ctasks!: any[]; // Input property to receive tasks from parent component

  markAsCompleted(ctask: any) {
    ctask.completed = true;
  }

  deleteTask(index: number) {
    this.ctasks.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {}

}
