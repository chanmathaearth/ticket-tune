import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  formData: FormGroup = new FormGroup({
    first_name: new FormControl(),
    last_name: new FormControl(),
    email: new FormControl(),
    tel: new FormControl(),
    username: new FormControl(),
    password: new FormControl(),
    role: new FormControl(),
  });

  constructor(
    private router: Router,
    private messageService: MessageService,
    private authService: AuthService,
  ) { }

  submit() {
    let values = this.formData.value;
    this.authService.register(values).subscribe({
      next: (res: any) => {
        this.messageService.add({
          key: "app",
          severity: 'success',
          summary: 'Success',
        });
        this.router.navigate(['/signin']);
      },
      error: err => {
        console.log(err);
      }
    })
  }

}
