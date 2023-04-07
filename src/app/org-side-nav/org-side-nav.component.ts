import { Component } from '@angular/core';
import { Router } from '@angular/router';
import orgList from '../json_files/orgSideNav.json';

@Component({
  selector: 'app-org-side-nav',
  templateUrl: './org-side-nav.component.html',
  styleUrls: ['./org-side-nav.component.css']
})
export class OrgSideNavComponent {

  public orgNavList:{id:number,icon:string,route:any,name:string}[] = orgList;

  constructor(private router: Router){}

}
