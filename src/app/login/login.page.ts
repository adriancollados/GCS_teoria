import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, MinLengthValidator, MinValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: any;
  cardShow: boolean = false;
  email: any;
  password: any;
 
  constructor(private form: FormBuilder) {
    this.login = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(6)]]
    })
   }

  ngOnInit() {
  }

  doLogin(){
    if(this.login.dirty && this.login.valid){
      this.cardShow = true;
      this.email = this.login.value.email;
      console.log(this.login);
    }
  }

}
