import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesteacherComponent } from './coursesteacher.component';

describe('CoursesteacherComponent', () => {
  let component: CoursesteacherComponent;
  let fixture: ComponentFixture<CoursesteacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesteacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
