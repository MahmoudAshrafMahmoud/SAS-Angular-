import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesstudentComponent } from './coursesstudent.component';

describe('CoursesstudentComponent', () => {
  let component: CoursesstudentComponent;
  let fixture: ComponentFixture<CoursesstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
