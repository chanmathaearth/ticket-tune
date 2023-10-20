import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  formData: FormGroup = new FormGroup({});
  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(private fb: FormBuilder, private router: Router) { }


  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formData = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  changeProfilePicture() {
    // Trigger the hidden file input
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      // Handle the selected file, e.g., upload it to the server
      const selectedFile = inputElement.files[0];
      // You can implement an upload function here
    }
  }

  saveProfile() {
    if (this.formData.valid) {
      // Implement your save functionality here
      console.log(this.formData.value);
    }
  }

  navigateToPayment() {
    // Use the router to navigate to the payment page
    this.router.navigate(['/payment']);
  }
  
}
