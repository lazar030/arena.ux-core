import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaUXComponent } from './arena-ux.component';

describe('ArenaUXComponent', () => {
  let component: ArenaUXComponent;
  let fixture: ComponentFixture<ArenaUXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArenaUXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArenaUXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
