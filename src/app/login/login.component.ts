import {Component} from '@angular/core';
import {SessionService} from "../session.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  err_msg = '';
  loginForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private sessionService: SessionService,
              private formBuilder: FormBuilder) {
  }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.loginForm.value);
    this.loginForm.reset();
  }
}
