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

  // Metoda pobierająca liste studentów z backendu
  getStudents() {
    return this.httpClient.get<any[]>(this.url)
      .pipe(map(data => data.map(item =>
        new Student(item.id, item.name, item.email, item.phone, false))));
  }

  //Metoda pobierająca danego studenta o określonym id
  getStudent(id: number) {
    // https://jsonplaceholder.typicode.com/users/{id}
    let studenturl = this.url + "/" + id;

    return this.httpClient.get<any>(studenturl)
      .pipe(map(item =>
        new Student(item.id, item.name, item.email, item.phone, false)));
  }

  // Metodę dodającą studenta -> wysyłającą request typu POST
  postStudent(student: Student) {
    return this.httpClient.post<Student>(this.url, student);
  }

  // Metode aktualizującą studenta -> wysyłąnie żądanie typu PUT
  putStudent(student: Student) {
    let studenturl = this.url + "/" + student.id;

    return this.httpClient.put<Student>(studenturl, student);
  }
}
