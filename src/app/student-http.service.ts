import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {
  private url = "https://jsonplaceholder.typicode.com/users";

  constructor(private httpClient: HttpClient) { }

  getStudents() {
    return this.httpClient.get<any[]>(this.url)
      .pipe(map(data => data.map(item =>
        new Student(item.id, item.name, item.email, item.phone, false))));
  }

  // Metodę dodającą studenta -> wysyłającą request typu POST
  postStudent(student: Student) {
    return this.httpClient.post<Student>(this.url, student);
  }
}
