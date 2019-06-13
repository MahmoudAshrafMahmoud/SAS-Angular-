import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksstudentComponent } from './tasksstudent.component';

describe('TasksstudentComponent', () => {
  let component: TasksstudentComponent;
  let fixture: ComponentFixture<TasksstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
