import { Component } from '@angular/core';

import { Router } from '@angular/router';

import lists from '../json_files/side-nav.json'; 
import { ImageConfig } from '@angular/common';



@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})


export class SideNavComponent {

  public sideNavList:{id:number,icon:ImageConfig,route:any,name:string}[] = lists;

  

selectedMenu:string | undefined;

  constructor(private router: Router){}

  // getDetails(details:string):any {
  //   this.router.navigate(['/details']);


    goTo(data:string):any{
      this.selectedMenu = data

    }
}
