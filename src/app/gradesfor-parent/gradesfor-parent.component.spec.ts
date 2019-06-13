import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesforParentComponent } from './gradesfor-parent.component';

describe('GradesforParentComponent', () => {
  let component: GradesforParentComponent;
  let fixture: ComponentFixture<GradesforParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradesforParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradesforParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
