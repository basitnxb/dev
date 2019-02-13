import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusareaComponent } from './aboutusarea.component';

describe('AboutusareaComponent', () => {
  let component: AboutusareaComponent;
  let fixture: ComponentFixture<AboutusareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutusareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutusareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
