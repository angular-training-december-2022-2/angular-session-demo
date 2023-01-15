import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHttpAddComponent } from './student-http-add.component';

describe('StudentHttpAddComponent', () => {
  let component: StudentHttpAddComponent;
  let fixture: ComponentFixture<StudentHttpAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentHttpAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentHttpAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
