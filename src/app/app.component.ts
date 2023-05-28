import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/pages/tabs/home', icon: 'home' },
    { title: 'Search', url: '/pages/tabs/', icon: 'search' },
    { title: 'Add task', url: '/pages/tabs/', icon: 'add' },
    { title: 'List of tasks', url: '/pages/tabs/', icon: 'list' },
    { title: 'Progress', url: '/pages/tabs/', icon: 'trending-up' },
    { title: 'Deleted', url: '/folder/trash', icon: 'trash' },
  ];
  public labels = ['Important tasks', 'Urgent tasks', 'Annex tasks', 'Tasks Done','Notes', 'Reminder', 'Calls', 'Meeting'];
}
