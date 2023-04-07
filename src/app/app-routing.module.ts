import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ApiUsagesComponent } from './api-usages/api-usages.component';
import { MySubscriptionComponent } from './my-subscription/my-subscription.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { OrgAccountsComponent } from './org-accounts/org-accounts.component';
import { ApiDetailsComponent } from './api-details/api-details.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'', redirectTo: 'profile', pathMatch:'full'},

  
  {path:'details', component: DetailsComponent},
  {path:'accounts',component:AccountDetailsComponent},
  {path: 'api-usages', component:ApiUsagesComponent},
  {path:'my-subscription', component:MySubscriptionComponent},
  // {path: 'dashboard',component: MainPageComponent},
  {path:'my-profile',component:MyProfileComponent},
  {path: 'organization',component:MainPageComponent},
  {path: 'client-details', component:ClientDetailsComponent},
  {path: 'profile', component: MainProfileComponent},
  {path: 'org-details', component: OrgAccountsComponent},
  {path: 'api-details', component: ApiDetailsComponent},
  {path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
