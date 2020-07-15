import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxCardContentComponent } from './aux-card-content.component';

describe('AuxCardContentComponent', () => {
  let component: AuxCardContentComponent;
  let fixture: ComponentFixture<AuxCardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuxCardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
