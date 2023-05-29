import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.page.html',
  styleUrls: ['./addtask.page.scss'],
})
export class AddtaskPage implements OnInit {

  newTask: any = {
    title: '',
    time: 0
  };

  addTask() {
    // Perform any additional logic, such as saving the task to a database
    console.log('New Task:', this.newTask);
    
    // Reset the newTask object after adding the task
    this.newTask = {
      title: '',
      time: 0
    };
  }

  constructor() { }

  ngOnInit() {
  }

}
