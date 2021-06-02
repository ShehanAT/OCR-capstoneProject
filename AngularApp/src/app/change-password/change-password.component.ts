import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  selectedUser: User;
  changePasswordForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder 
  ) { }

  ngOnInit() {
    this.setupForm();
  }

  setupForm(){
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: new FormControl(this.selectedUser.password),
      newPassword: new FormControl(),
      confirmPassword: new FormControl(),
    });
  }

  get password() { return this.changePasswordForm.get('newPassword'); }

  onSubmit(){
    this.userService.changePassword(this.selectedUser, this.password.value).subscribe(user => {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      window.location.reload();
    },(error) => {
      console.log(error);
    }
    );
  }

}
