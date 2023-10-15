import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


// import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  userId: string = "";
  user: any = [];

  formData: FormGroup = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    tel: new FormControl(''),
    password: new FormControl(''),
  });

  // constructor(
  //   private profileService: ProfileService,
  // ) {
  //   let item = JSON.parse(localStorage.getItem('user')!) || [];
  //   this.userId = item.user.user_id;
  //   this.getProfile()
  // }


  // getProfile() {
  //   this.profileService.getProfile(this.userId).subscribe(profile => {
  //     this.formData.patchValue(profile);
  //   });
  // }
}
