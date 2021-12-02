import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users;
  p = 1;
  query;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    //this.getAll();
  }
/*getAll(){
    this.userService.getAll().subscribe(res =>{
      console.log("res of user",res);
      this.users=res;
    });
}*/
}
