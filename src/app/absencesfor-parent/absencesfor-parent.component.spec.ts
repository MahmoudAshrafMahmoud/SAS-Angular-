import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsencesforParentComponent } from './absencesfor-parent.component';

describe('AbsencesforParentComponent', () => {
  let component: AbsencesforParentComponent;
  let fixture: ComponentFixture<AbsencesforParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsencesforParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsencesforParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
