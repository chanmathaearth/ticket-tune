import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  formData: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  login() {
    let values = this.formData.value;
    this.authService.login(values).subscribe({
      next: (res : any) => { 
        localStorage.setItem("user", JSON.stringify(res));
        this.router.navigate(['/']);
      },
      error: err => { 
        console.log(err);
      }
    })
  }

}
