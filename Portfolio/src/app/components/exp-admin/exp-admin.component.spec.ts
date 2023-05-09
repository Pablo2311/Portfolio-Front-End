import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpAdminComponent } from './exp-admin.component';

describe('ExpAdminComponent', () => {
  let component: ExpAdminComponent;
  let fixture: ComponentFixture<ExpAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
