import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../student';
import { ActivatedRoute } from '@angular/router';
import { StudentHttpService } from '../student-http.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  editedStudent: Student = new Student(1, "", "", "", false);
  isSubmitting = false;
  isSuccess = false;

  constructor(private activatedRoute: ActivatedRoute, private httpService: StudentHttpService) {

    this.activatedRoute.params.subscribe(data => {
      let id = data["id"];
      console.log("Id w url " + id);

      this.httpService.getStudent(id)
        .subscribe(data => {
          this.editedStudent = data;
        })
    })
  }

  editStudent(student : Student){
    this.httpService.putStudent(student)
    .pipe(delay(2000))
      .subscribe(_ => {
        alert("Zaktualizowano studenta!");
        this.isSuccess = true;
        this.isSubmitting = false;
      });
  }

}
