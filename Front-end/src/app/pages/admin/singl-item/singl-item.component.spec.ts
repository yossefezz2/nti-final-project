import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglItemComponent } from './singl-item.component';

describe('SinglItemComponent', () => {
  let component: SinglItemComponent;
  let fixture: ComponentFixture<SinglItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglItemComponent]
    });
    fixture = TestBed.createComponent(SinglItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
