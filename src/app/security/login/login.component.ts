import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../../core/auth.service';
import {NotificationService} from '../../core/notification.service';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private notification: NotificationService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    })
  }

  login() {
    this.auth.login(this.loginForm.value.email,
                    this.loginForm.value.password)
      .subscribe((user) => {
        this.notification.notify(`Olá, ${user.name}`);
        return user
      }, (response) => {
        this.notification.notify(`Usuário ou senha inválidos`)
      })
  }
}
