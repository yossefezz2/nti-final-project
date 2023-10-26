import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemUserComponent } from './add-item-user.component';

describe('AddItemUserComponent', () => {
  let component: AddItemUserComponent;
  let fixture: ComponentFixture<AddItemUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddItemUserComponent]
    });
    fixture = TestBed.createComponent(AddItemUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
