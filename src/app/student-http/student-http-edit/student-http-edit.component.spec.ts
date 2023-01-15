import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHttpEditComponent } from './student-http-edit.component';

describe('StudentHttpEditComponent', () => {
  let component: StudentHttpEditComponent;
  let fixture: ComponentFixture<StudentHttpEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentHttpEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentHttpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
