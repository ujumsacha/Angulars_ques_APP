import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  formualireAuth !: FormGroup
  constructor(private fb: FormBuilder, private router: Router) {

    this.formualireAuth = fb.group({
      email : ['', [Validators.required, Validators.pattern("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+[@][a-zA-Z_]+[.][a-zA-Z]{2,3}") ]],
      passWord : ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  ngOnInit(): void {
  }

  login(){
    console.log("this.formualireAuth :: ", this.formualireAuth);
    console.log("this.formualireAuth :: ", this.formualireAuth.value);

    if (this.formualireAuth.value.email === "test@gmail.com" && this.formualireAuth.value.passWord === "test") {
      console.log("true");
      this.router.navigate(["/dashbord"])
    }
  }
}
