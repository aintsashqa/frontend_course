import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent implements OnInit {

  @Input() contacts: any;

  constructor() { }

  ngOnInit(): void {
  }

}
