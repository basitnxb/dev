import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundbannerComponent } from './notfoundbanner.component';

describe('NotfoundbannerComponent', () => {
  let component: NotfoundbannerComponent;
  let fixture: ComponentFixture<NotfoundbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotfoundbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
