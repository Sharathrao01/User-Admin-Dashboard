import { Component } from '@angular/core';
import { DetailsComponent } from '../details/details.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {

  constructor(public router:Router) {}

 

  redirect:any = 'details';


}
