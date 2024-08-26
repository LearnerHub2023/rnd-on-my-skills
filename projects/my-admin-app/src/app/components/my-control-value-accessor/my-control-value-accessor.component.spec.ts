import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyControlValueAccessorComponent } from './my-control-value-accessor.component';

describe('MyControlValueAccessorComponent', () => {
  let component: MyControlValueAccessorComponent;
  let fixture: ComponentFixture<MyControlValueAccessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyControlValueAccessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyControlValueAccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
