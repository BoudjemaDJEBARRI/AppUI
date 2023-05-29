import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor() { }
  // searchTerm!: string;
  // searchResults: any[] = [];

  // myDataArray: any[] = [
  //   { name: 'Task 1' },
  //   { name: 'Task 2' },
  //   { name: 'Task 3' },

  // ];

  // onSearch() {
  //   this.searchResults = this.myDataArray.filter(item => item.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  // }

  // Exemple 2
  public data = [
    "Implement user authentication and authorization",
    "Create database models and design database schema",
    "Build RESTful APIs for CRUD operations",
    "Implement server-side validation and error handling",
    "Integrate third-party APIs or services",
    "Develop front-end UI components and user interfaces",
    "Implement data caching and optimization techniques",
    "Write unit tests and perform test-driven development (TDD)",
    "Optimize application performance and scalability",
    "Implement real-time features using web sockets",
    "Configure and deploy the application on a cloud platform",
    "Monitor and troubleshoot application issues",
    "Collaborate with designers and UX/UI teams",
    "Conduct code reviews and provide feedback",
    "Stay updated with the latest technologies and industry trends",
    "Prepare breakfast",
    "Do the laundry",
    "Go grocery shopping",
    "Clean the house",
    "Pay bills",
    "Exercise for 30 minutes",
    "Read a book",
    "Attend a meeting",
    "Prepare dinner",
    "Take a walk",
    "Call a friend",
    "Watch a movie",
    "Water the plants",
    "Write in a journal",
    "Organize workspace"
  ];
  public results = [...this.data];

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }

  ngOnInit() {
  }

}
