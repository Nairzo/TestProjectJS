import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoeditComponent } from './productoedit.component';

describe('ProductoeditComponent', () => {
  let component: ProductoeditComponent;
  let fixture: ComponentFixture<ProductoeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
