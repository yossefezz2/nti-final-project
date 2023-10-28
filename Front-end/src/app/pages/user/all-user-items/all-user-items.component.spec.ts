import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUserItemsComponent } from './all-user-items.component';

describe('AllUserItemsComponent', () => {
  let component: AllUserItemsComponent;
  let fixture: ComponentFixture<AllUserItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllUserItemsComponent]
    });
    fixture = TestBed.createComponent(AllUserItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
