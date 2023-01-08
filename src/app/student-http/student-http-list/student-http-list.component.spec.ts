import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHttpListComponent } from './student-http-list.component';

describe('StudentHttpListComponent', () => {
  let component: StudentHttpListComponent;
  let fixture: ComponentFixture<StudentHttpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentHttpListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentHttpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
