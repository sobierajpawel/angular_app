import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../student';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent{
    @Input()
    isSubmitting = false;
    isValidationErrorOccured = false;
    @Input()
    student : Student = new Student(1, "", "", "", false);
    @Output()
    submitStudentEvent : EventEmitter<Student> = new EventEmitter<Student>();

    setDefaultValues() {
      this.student = new Student(1, "Adam Nowak", "nowak@test.pl",
        "32132113232", false);
    }

    submitForm(form : NgForm){
      this.isValidationErrorOccured = false;

      if (form.valid == false){
        this.isValidationErrorOccured = true;
        return;
      }
      this.isSubmitting = true;

      this.submitStudentEvent.emit(this.student);
    }
}
