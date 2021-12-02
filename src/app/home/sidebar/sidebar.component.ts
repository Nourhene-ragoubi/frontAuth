import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
user;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user=JSON.parse((localStorage.getItem('userconnecte')))
  }

  gotoclient(){
    this.router.navigate( ['/clientlist']);
}
  logout(){
    localStorage.setItem("state","0");
    this.router.navigate(["login"])
  }

}
