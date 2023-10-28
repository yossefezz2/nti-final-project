import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllusersItemsComponent } from './allusers-items.component';

describe('AllusersItemsComponent', () => {
  let component: AllusersItemsComponent;
  let fixture: ComponentFixture<AllusersItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllusersItemsComponent]
    });
    fixture = TestBed.createComponent(AllusersItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
