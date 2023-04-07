import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSideNavComponent } from './org-side-nav.component';

describe('OrgSideNavComponent', () => {
  let component: OrgSideNavComponent;
  let fixture: ComponentFixture<OrgSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgSideNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
