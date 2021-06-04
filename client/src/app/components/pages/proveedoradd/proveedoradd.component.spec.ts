import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoraddComponent } from './proveedoradd.component';

describe('ProveedoraddComponent', () => {
  let component: ProveedoraddComponent;
  let fixture: ComponentFixture<ProveedoraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveedoraddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedoraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
