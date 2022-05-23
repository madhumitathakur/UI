import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Login } from 'src/app/entities/login.entity';

import { LoginService } from 'src/app/services/login.service';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'hr-login-form',
    templateUrl: './hr-login.components.html'
  })
  export class HrLoginComponent {
    forms: any = [];
    loginDetails: Array<Login> = new Array();
    // loginForm: FormGroup;
  
  
  
    constructor(private loginService: LoginService, private formBuilder: FormBuilder) {
  
      // this.loginService.getAllLogins().subscribe((serverResponse: any) => {
      //   console.log('constrcutor serverResponse ', serverResponse);
      //   this.forms = serverResponse;
      // })
    }
  
    HrloginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
  
  
    })
  
  
  
  
    submitLogin = () => {
  
      // if (this.loginForm.invalid) {
      //   return;
      // }
      // if (this.loginForm.dirty) {
      //   return;
      // }
  
      var hr_login_form = {
        userName: this.HrloginForm.value['userName'],
        password: this.HrloginForm.value['password']
  
      };
  
      this.loginService.createNewLogin(hr_login_form).subscribe((serverResponse: any) => {
        console.log('createNewLogin - serviceResponse : ', serverResponse);
  
        this.forms.push(serverResponse);
        var token = serverResponse;
        console.log("token -> var " , token);
        this.loginService.setToken(token);
      })
  
      console.log(this.HrloginForm.value);
  
  
    }
  
  
  
  
  }
  