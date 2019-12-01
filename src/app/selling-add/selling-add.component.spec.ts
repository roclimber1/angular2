import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingAddComponent } from './selling-add.component';

describe('SellingAddComponent', () => {
  let component: SellingAddComponent;
  let fixture: ComponentFixture<SellingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
