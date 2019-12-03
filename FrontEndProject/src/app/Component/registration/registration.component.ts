import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  pwdFormControl = new FormControl('', Validators.required);
  emailFormControl = new FormControl('', [Validators.required, Validators.email,]);
  confirmFormControl = new FormControl('', Validators.required);
  firstName = new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]*')]);
  lastName = new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z ]*')]);

  constructor( private router: Router) { }

  ngOnInit() {
  }
  userRegistration() {
    var userBody =
    {
      FirstName: this.firstName.value,
      LastName: this.lastName.value,
      UserName: this.emailFormControl.value,
      Password: this.pwdFormControl.value,
      Confirm: this.confirmFormControl.value,
    };
    console.log(userBody);
  }

}
