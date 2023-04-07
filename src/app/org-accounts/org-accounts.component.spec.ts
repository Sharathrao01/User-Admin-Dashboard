import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAccountsComponent } from './org-accounts.component';

describe('OrgAccountsComponent', () => {
  let component: OrgAccountsComponent;
  let fixture: ComponentFixture<OrgAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgAccountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
