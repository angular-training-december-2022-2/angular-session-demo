import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoParentHeaderComponent } from './demo-parent-header.component';

describe('DemoParentHeaderComponent', () => {
  let component: DemoParentHeaderComponent;
  let fixture: ComponentFixture<DemoParentHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoParentHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoParentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
