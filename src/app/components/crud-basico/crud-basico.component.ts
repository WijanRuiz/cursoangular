import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/app/data/users';
import {User} from '../../models/user';
import {Address} from '../../models/address';
import {Company} from '../../models/company';

@Component({
  selector: 'app-crud-basico',
  templateUrl: './crud-basico.component.html',
  styleUrls: ['./crud-basico.component.css']
})
export class CrudBasicoComponent implements OnInit {
  users = USERS;
  constructor() { }
  userSelected = this.users[0];
  phone = false;

  userForm = {
    name: '',
    email: '',
    phone: ''
  };

  usersFiltered = this.users;

  ngOnInit(): void {
    this.setUsersFiltered();
  }

  selectUser = (user: User) => {
    this.userSelected = user;
  }

  eliminarUsuario = (userRemove: User) => {
    this.users = this.users.filter(user => user !== userRemove);
    this.setUsersFiltered();
  }

  setUsersFiltered = () => {
    this.usersFiltered = this.phone ? this.users.filter(u => u.phone) : this.users;
  }

  addUser = () => {
    const address = new Address();
    const user = new User(24, this.userForm.name, '', this.userForm.email, address, this.userForm.phone, '', new Company());
    this.users.push(user);
    this.setUsersFiltered();
  }
}
