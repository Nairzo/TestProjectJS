import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioaddComponent } from './inventarioadd.component';

describe('InventarioaddComponent', () => {
  let component: InventarioaddComponent;
  let fixture: ComponentFixture<InventarioaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
