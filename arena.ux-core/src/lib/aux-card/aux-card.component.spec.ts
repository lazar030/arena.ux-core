import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxCardComponent } from './aux-card.component';

describe('AuxCardComponent', () => {
  let component: AuxCardComponent;
  let fixture: ComponentFixture<AuxCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
