import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.page.html',
  styleUrls: ['./tasklist.page.scss'],
})
export class TasklistPage implements OnInit {

  tasks: any[] = [
    { title: "Implement user authentication and authorization", completed: true },
    { title: "Create database models and design database schema", completed: false },
    { title: "Build RESTful APIs for CRUD operations", completed: false },
    { title: "Implement server-side validation and error handling", completed: false },
    { title: "Integrate third-party APIs or services", completed: true },
    { title: "Develop front-end UI components and user interfaces", completed: false },
    { title: "Implement data caching and optimization techniques", completed: false },
    { title: "Write unit tests and perform test-driven development (TDD)", completed: true },
    { title: "Optimize application performance and scalability", completed: true },
    { title: "Implement real-time features using web sockets", completed: false },
    { title: "Configure and deploy the application on a cloud platform", completed: false },
    { title: "Monitor and troubleshoot application issues", completed: false },
    { title: "Collaborate with designers and UX/UI teams", completed: true },
    { title: "Conduct code reviews and provide feedback", completed: false },
    { title: "Stay updated with the latest technologies and industry trends", completed: false },
    { title: "Prepare breakfast", completed: false },
    { title: "Do the laundry", completed: false },
    { title: "Go grocery shopping", completed: true },
    { title: "Clean the house", completed: false },
    { title: "Pay bills", completed: true },
    { title: "Exercise for 30 minutes", completed: true },
    { title: "Read a book", completed: false },
    { title: "Attend a meeting", completed: false },
    { title: "Prepare dinner", completed: false },
    { title: "Take a walk", completed: true },
    { title: "Call a friend", completed: false },
    { title: "Watch a movie", completed: true },
    { title: "Water the plants", completed: false },
    { title: "Write in a journal", completed: true },
    { title: "Organize workspace", completed: true }
  ];
  

  markAsCompleted(task: any) {
    task.completed = true;
  }

  // tasks: string[] = [
  //   'Implement user authentication and authorization',
  //   'Create database models and design database schema',
  //   'Build RESTful APIs for CRUD operations',
  //   'Implement server-side validation and error handling',
  //   'Integrate third-party APIs or services',
  //   'Develop front-end UI components and user interfaces',
  //   'Implement data caching and optimization techniques',
  //   'Write unit tests and perform test-driven development (TDD)',
  //   'Optimize application performance and scalability',
  //   'Implement real-time features using web sockets',
  //   'Configure and deploy the application on a cloud platform',
  //   'Monitor and troubleshoot application issues',
  //   'Collaborate with designers and UX/UI teams',
  //   'Conduct code reviews and provide feedback',
  //   'Stay updated with the latest technologies and industry trends',
  // ];

  constructor() { }

  ngOnInit() {
  }

}
