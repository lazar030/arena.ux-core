import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxLayoutComponent } from './aux-layout.component';

describe('AuxLayoutComponent', () => {
  let component: AuxLayoutComponent;
  let fixture: ComponentFixture<AuxLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
