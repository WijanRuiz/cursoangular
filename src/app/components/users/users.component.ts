import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
  users: any[] = [
    {id: 1, name: 'Carlos', age: 35},
    {id: 2, name: 'Carmen', age: 17},
    {id: 3, name: 'Carolina', age: 25}
  ];

  ngOnInit(): void {
  }

}
