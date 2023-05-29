import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  messages: any[] = [
    { title: 'Message 1 : Good morning, thank...', read: true },
    { title: 'Message 2 : Follow the link abo...', read: false },
    { title: 'Message 3 : Hello Nap, hope you...', read: true },
    { title: 'Message 4 : I would like to kno...', read: false },
    { title: 'Message 5 : Is there any tasks ...', read: true },
    { title: 'Message 6 : Follow the link abo...', read: false },
    { title: 'Message 7 : Hello Nap, hope you...', read: true },
    { title: 'Message 8 : I would like to kno...', read: false },
    { title: 'Message 9 : Hello Nap, hope you...', read: true },
    { title: 'Message 10 : I would like to kno...', read: false },
    { title: 'Message 11 : Is there any tasks ...', read: true },
    { title: 'Message 12 : Follow the link abo...', read: false },
    { title: 'Message 13 : Good morning, thank...', read: true },
    { title: 'Message 14 : Follow the link abo...', read: false },
    { title: 'Message 15 : Hello Nap, hope you...', read: true },
    { title: 'Message 16 : I would like to kno...', read: false },
    { title: 'Message 17 : Is there any tasks ...', read: true },
  ];

  constructor() { }

  ngOnInit() {
  }

}
