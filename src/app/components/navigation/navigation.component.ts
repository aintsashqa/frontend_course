import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() totalContacts: number = 0;
  @Input() favoriteContacts: number = 0;
  @Output() onPageChanging: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.onPageChanging.emit('CONTACTS_LIST');
  }

  public handleOnLinkClick(event: Event, name: string) {
    event.preventDefault();
    this.onPageChanging.emit(name);
  }

}
