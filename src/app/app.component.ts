import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/tabs/home', icon: 'home' },
    { title: 'Search', url: '/tabs/search', icon: 'search' },
    { title: 'Add task', url: '/tabs/addtask', icon: 'add' },
    { title: 'List of tasks', url: '/tabs/tasklist', icon: 'list' },
    { title: 'Progress', url: '/tabs/progress', icon: 'trending-up' },
    { title: 'Deleted', url: '/folder/trash', icon: 'trash' },
  ];
  public labels = ['Important tasks', 'Urgent tasks', 'Annex tasks', 'Tasks Done','Notes', 'Reminder', 'Calls', 'Meeting'];
}
