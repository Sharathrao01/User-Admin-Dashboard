import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { DetailsComponent } from './details/details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { ApiUsagesComponent } from './api-usages/api-usages.component';
import { MySubscriptionComponent } from './my-subscription/my-subscription.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MainNavBarComponent } from './main-nav-bar/main-nav-bar.component';
import { OrgSideNavComponent } from './org-side-nav/org-side-nav.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { OrganizationComponent } from './organization/organization.component';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { OrgAccountsComponent } from './org-accounts/org-accounts.component';
import { ApiDetailsComponent } from './api-details/api-details.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideNavComponent,
    ProfileComponent,
    ProfileNavComponent,
    ProfileCardComponent,
    DetailsComponent,
    AccountDetailsComponent,
    ApiUsagesComponent,
    MySubscriptionComponent,
    MainPageComponent,
    MyProfileComponent,
    MainNavBarComponent,
    OrgSideNavComponent,
    ClientDetailsComponent,
    OrganizationComponent,
    MainProfileComponent,
    OrgAccountsComponent,
    ApiDetailsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
