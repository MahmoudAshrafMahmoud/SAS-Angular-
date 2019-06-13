import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesstudentComponent } from './gradesstudent.component';

describe('GradesstudentComponent', () => {
  let component: GradesstudentComponent;
  let fixture: ComponentFixture<GradesstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradesstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
