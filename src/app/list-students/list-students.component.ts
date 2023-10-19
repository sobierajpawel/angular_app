import { Component } from '@angular/core';
import { Student } from '../student';


@Component({
  selector: 'list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent {
    students : Student[] = [];
    isTableVisible : boolean = true;
    buttonText : string = "Wyświetl listę";

    constructor(){
      this.students.push(new Student(1,
        "Janek Kowalski", "kowalski@test.pl", "132", true));
      this.students.push(new Student(2,"Adam Kowalski",
        "adam@o2.pl", "13321132", false));
      this.students.push(new Student(3,"Adam Kowalski",
        "adam@o2.pl", "13321132", true));
      this.students.push(new Student(4,"Adam Kowalski",
        "adam@o2.pl", "13321132", false));
    }

    changeStudentsShowing(){
      this.isTableVisible = !this.isTableVisible;

      if (this.isTableVisible){
        this.buttonText = "Wyświetl listę";
      } else {
        this.buttonText = "Wyświetl tabelę";
      }
    }
}
