import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCoursePages } from './panel-course.pages';

describe('PanelCoursePages', () => {
  let component: PanelCoursePages;
  let fixture: ComponentFixture<PanelCoursePages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelCoursePages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelCoursePages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
