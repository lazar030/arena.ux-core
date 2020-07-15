import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxCardHeaderComponent } from './aux-card-header.component';

describe('AuxCardHeaderComponent', () => {
  let component: AuxCardHeaderComponent;
  let fixture: ComponentFixture<AuxCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxCardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
