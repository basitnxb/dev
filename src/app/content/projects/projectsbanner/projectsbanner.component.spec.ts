import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsbannerComponent } from './projectsbanner.component';

describe('ProjectsbannerComponent', () => {
  let component: ProjectsbannerComponent;
  let fixture: ComponentFixture<ProjectsbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
