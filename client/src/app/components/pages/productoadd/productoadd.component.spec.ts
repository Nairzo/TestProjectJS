import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoaddComponent } from './productoadd.component';

describe('ProductoaddComponent', () => {
  let component: ProductoaddComponent;
  let fixture: ComponentFixture<ProductoaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
