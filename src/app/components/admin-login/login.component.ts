import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Login } from 'src/app/entities/login.entity';

import { LoginService } from 'src/app/services/login.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'login-form',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  forms: any = [];
  loginDetails: Array<Login> = new Array();
  // loginForm: FormGroup;



  constructor(private loginService: LoginService, private formBuilder: FormBuilder) {

    // this.loginService.getAllLogins().subscribe((serverResponse: any) => {
    //   console.log('constrcutor serverResponse ', serverResponse);
    //   this.forms = serverResponse;
    // })
  }

  loginForm = new FormGroup({
    userName: new FormControl('admin', [Validators.required]),
    password: new FormControl('admin', [Validators.required])


  })




  submitLogin = () => {

    // if (this.loginForm.invalid) {
    //   return;
    // }
    // if (this.loginForm.dirty) {
    //   return;
    // }

    var login_form = {
      userName: this.loginForm.value['userName'],
      password: this.loginForm.value['password']

    };

    this.loginService.createNewLogin(login_form).subscribe((serverResponse: any) => {
      console.log('createNewLogin - serviceResponse : ', serverResponse);

      this.forms.push(serverResponse);
      var token = serverResponse;
      console.log("token -> var " , token);
      this.loginService.setToken(token);
    })

    console.log(this.loginForm.value);


  }




}







