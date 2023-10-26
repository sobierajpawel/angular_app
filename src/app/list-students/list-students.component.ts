import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentHttpService } from '../student-http.service';
import { delay } from 'rxjs';


@Component({
  selector: 'list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent {
  students: Student[] = [];
  copyStudents: Student[] = [];
  isTableVisible: boolean = true;
  buttonText: string = "Wyświetl listę";
  isDataReady = false;
  isErrorOccured = false;
  searchPhrase = "";
  removedStudent = "";

  constructor(private studentHttpService: StudentHttpService) {
    // this.students.push(new Student(1,
    //   "Janek Kowalski", "kowalski@test.pl", "132", true));
    // this.students.push(new Student(2,"Adam Kowalski",
    //   "adam@o2.pl", "13321132", false));
    // this.students.push(new Student(3,"Adam Kowalski",
    //   "adam@o2.pl", "13321132", true));
    // this.students.push(new Student(4,"Adam Kowalski",
    //   "adam@o2.pl", "13321132", false));
    console.log("Przed wywołaniem subscribe");



    //Wywołanie httpService w celu pobrania studentów 
    // i subskrybowanie się na odpowiedź oraz przypisanie 
    // przychodzących danych do zmiennej students
    // next -> obsługa pozytywnej odpowiedzi
    // error -> obsługi błędu
    this.studentHttpService.getStudents()
      .pipe(delay(2000))
      .subscribe({
        next: data => {
          console.log("Wewnątrz subscribe");
          console.log(data);
          this.students = data;
          this.copyStudents = data;
          this.isDataReady = true;
        },
        error: err => {
          this.isErrorOccured = true;
          this.isDataReady = true;
        }
      });

    console.log("Po wywołaniem subscribe");
  }

  changeStudentsShowing() {
    this.isTableVisible = !this.isTableVisible;

    if (this.isTableVisible) {
      this.buttonText = "Wyświetl listę";
    } else {
      this.buttonText = "Wyświetl tabelę";
    }
  }

  search() {
    console.log(this.searchPhrase);

    //Zaczyna się od 
    // this.students = this.copyStudents.filter
    //   (x => x.fullName.toLowerCase()
    //     .startsWith(this.searchPhrase.toLowerCase()));

    // Zawiera
    this.students = this.copyStudents.filter
        (x => x.fullName.toLowerCase()
          .includes(this.searchPhrase.toLowerCase()) ||
          x.email.toLowerCase()
          .includes(this.searchPhrase.toLowerCase()));
  }


  delete(id : number){
    this.studentHttpService.deleteStudent(id)
      .subscribe(()=>{
        let student = this.students.find(x=>x.id === id);
        if (student){
          this.removedStudent = student.fullName;
        }      
      
        this.students = this.students.filter(x=>x.id !== id);
      });
  }
}
