import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AccountServices } from 'src/app/services/accountServices';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationComponent } from 'src/app/navbar/confirmation/confirmation.component';
// import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user:any;
  status: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<SigninComponent>,
    private accountSerivces: AccountServices,
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.userForm();
  }

  userForm() {
    this.user = this.formBuilder.group({
      username: '',
      password: ''
    })
  }

  toRegister() {
    // this.dialog.open(RegisterComponent, {
    //   maxWidth: '600px'
    // })
    this.router.navigate(['/register']);
    this.dialogRef.close();
  }

  async signin() {
    const res = await this.accountSerivces.signin(this.user.value);
    if (res.status != 200) { this.status = true; }
    if (res.status == 200) { this.accountSerivces.login = true; this.dialogRef.close(); 
      this.dialog.open(ConfirmationComponent, {
        panelClass: 'myapp-no-padding-dialog',
        data: {
            message: "Login Success!",
            type: 'primary'
          }
      });
    }
  }
}
