import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsareaComponent } from './projectsarea.component';

describe('ProjectsareaComponent', () => {
  let component: ProjectsareaComponent;
  let fixture: ComponentFixture<ProjectsareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
