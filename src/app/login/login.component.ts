
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private userServices:UserService, private router: Router) {
    if(localStorage.getItem("stat")==="1"){
      this.router.navigate([""]);
    }
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  get f() { return this.loginForm.controls; }
  login ()
  {this.submitted=true;
    console.log(this.loginForm.value);
    if(this.loginForm.invalid)
    {
      return ;
    }
    this.userServices.login(this.loginForm.value).subscribe(res=>{
      console.log("res of login",res)
      if(res["statuts"]!="error"){
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
        localStorage.setItem("state","1");
        localStorage.setItem('userconnecte', JSON.stringify(res))

        this.router.navigate([""])
      }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        })
      }
    },error=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      })
    })
  }
}

