import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  account: any = {
    name: 'Napoleon Bonaparte',
    email: 'napoleon.bonaparte@mail.com',
    phone: '0634567890'
  };
  editAccount() {
    // Logic for editing the account details
  }

  constructor() { }

  ngOnInit() {
  }

}
