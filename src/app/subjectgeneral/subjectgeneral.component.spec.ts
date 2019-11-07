import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubjectgeneralComponent } from './subjectgeneral.component';









registerForm: FormGroup;



describe('SubjectgeneralComponent', () => {
  let component: SubjectgeneralComponent;
  let fixture: ComponentFixture<SubjectgeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectgeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectgeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
