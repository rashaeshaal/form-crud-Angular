import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskfComponent } from './taskf.component';

describe('TaskfComponent', () => {
  let component: TaskfComponent;
  let fixture: ComponentFixture<TaskfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
