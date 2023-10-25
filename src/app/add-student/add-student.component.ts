import { Component } from '@angular/core';
import { Student } from '../student';
import { NgForm } from '@angular/forms';
import { StudentHttpService } from '../student-http.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  // 1) Draft formularza - DONE!
  // 2) Ostylowanie formularz przy wykorzystaniu styli z Bootstrapa
  // 3) Przekazanie danych z formularza to typescript
  // 4) Obsłużyć żądanie POST - dodawanie nowego studenta do API
  // 5) Prosta walidacja
  // 6) Poinformować użytkownika o sukcesie lub błędzie operacji
  student: Student = new Student(1, "", "", "", false);
  isValidationErrorOccured = false;
  isSubmitting = false;

  constructor(private studentHttpService : StudentHttpService){

  }

  submitForm(form : NgForm) {
    this.isValidationErrorOccured = false;

    if (form.valid == false){
      this.isValidationErrorOccured = true;
      return;
    }
    this.isSubmitting = true;

    console.log(this.student);

    this.studentHttpService.postStudent(this.student)
      .subscribe(_=>{
        alert("Otrzymano odpowiedź!");
        this.isSubmitting = false;
      });
  }

  setDefaultValues() {
    this.student = new Student(1, "Adam Nowak", "nowak@test.pl",
      "32132113232", false);
  }
}
