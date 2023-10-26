import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdataItemComponent } from './updata-item.component';

describe('UpdataItemComponent', () => {
  let component: UpdataItemComponent;
  let fixture: ComponentFixture<UpdataItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdataItemComponent]
    });
    fixture = TestBed.createComponent(UpdataItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
