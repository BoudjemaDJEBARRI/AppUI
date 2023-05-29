import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  tasks: any[] = [
    { title: 'Create database models and design database schema', progress: 20 },
    { title: 'Build RESTful APIs for CRUD operations', progress: 50 },
    { title: 'Implement server-side validation and error handling', progress: 80 },
    { title: 'Integrate third-party APIs or services', progress: 10 },
    { title: 'Develop front-end UI components and user interfaces', progress: 30 },
    { title: 'Implement data caching and optimization techniques', progress: 60 },
    { title: 'Write unit tests and perform test-driven development (TDD)', progress: 40 },
    { title: 'Optimize application performance and scalability', progress: 70 },
    { title: 'Implement real-time features using web sockets', progress: 90 },
    { title: 'Configure and deploy the application on a cloud platform', progress: 15 },
    { title: 'Monitor and troubleshoot application issues', progress: 35 },
    { title: 'Collaborate with designers and UX/UI teams', progress: 55 },
    { title: 'Conduct code reviews and provide feedback', progress: 75 },
    { title: 'Stay updated with the latest technologies and industry trends', progress: 95 },
    { title: 'Prepare breakfast', progress: 25 },
    { title: 'Do the laundry', progress: 45 },
    { title: 'Go grocery shopping', progress: 65 },
    { title: 'Clean the house', progress: 85 },
    { title: 'Pay bills', progress: 5 },
    { title: 'Exercise for 30 minutes', progress: 25 },
    { title: 'Read a book', progress: 45 },
    { title: 'Attend a meeting', progress: 65 },
    { title: 'Prepare dinner', progress: 85 },
    { title: 'Take a walk', progress: 5 },
    { title: 'Call a friend', progress: 25 },
    { title: 'Watch a movie', progress: 45 },
    { title: 'Water the plants', progress: 65 },
    { title: 'Write in a journal', progress: 85 }
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
