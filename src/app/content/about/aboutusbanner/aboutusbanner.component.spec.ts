import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusbannerComponent } from './aboutusbanner.component';

describe('AboutusbannerComponent', () => {
  let component: AboutusbannerComponent;
  let fixture: ComponentFixture<AboutusbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
