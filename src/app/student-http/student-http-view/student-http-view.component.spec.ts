import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHttpViewComponent } from './student-http-view.component';

describe('StudentHttpViewComponent', () => {
  let component: StudentHttpViewComponent;
  let fixture: ComponentFixture<StudentHttpViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentHttpViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentHttpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
