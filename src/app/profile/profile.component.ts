import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  fullName:string = 'sharath Rao';
  userName = '';


  ngOnInit() {
    this.userName = this.getShortName(this.fullName)
  }

  getShortName(fullName: string): string { 
    if (fullName !== '') {
      return fullName.split(' ').map(n => n[0]).join(''); 
    }
    return '';
  }
}
