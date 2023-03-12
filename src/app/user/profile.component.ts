import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TOASTR_TOKEN, IToastr } from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html' ,
  styles: [ 'em {float: right; color: #e05c65; padding-left: 10px} .error input {background-color: #e3c3c5} .error ::-webkit-input-placeholder {color: #999} .error ::-moz-placeholder {color:  #999}']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  constructor(private router: Router, private authservice: AuthService, @Inject(TOASTR_TOKEN) private toastr: IToastr){}

  ngOnInit(): void {
    this.firstName = new FormControl(this.authservice.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authservice.currentUser.lastName, Validators.required);
   
    this.profileForm = new FormGroup ({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.touched 
  }
  
  saveProfile(formValues){
    if(this.profileForm.valid){
      this.authservice.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.toastr.success('Profile Saved');
    }  
  }
}