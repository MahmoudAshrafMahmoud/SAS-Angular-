import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksstudentComponent } from './booksstudent.component';

describe('BooksstudentComponent', () => {
  let component: BooksstudentComponent;
  let fixture: ComponentFixture<BooksstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
