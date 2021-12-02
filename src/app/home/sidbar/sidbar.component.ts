import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
