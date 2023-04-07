import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUsagesComponent } from './api-usages.component';

describe('ApiUsagesComponent', () => {
  let component: ApiUsagesComponent;
  let fixture: ComponentFixture<ApiUsagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiUsagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUsagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
