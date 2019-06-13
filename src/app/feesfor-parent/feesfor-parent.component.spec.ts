import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeesforParentComponent } from './feesfor-parent.component';

describe('FeesforParentComponent', () => {
  let component: FeesforParentComponent;
  let fixture: ComponentFixture<FeesforParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeesforParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeesforParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
