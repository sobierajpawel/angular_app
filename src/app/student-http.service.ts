import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpService {

  constructor(private httpClient: HttpClient) { }

  getStudents() {
    let url = "https://jsonplaceholder.typicode.com/users";
    return this.httpClient.get<any[]>(url)
      .pipe(map(data => data.map(item =>
        new Student(item.id, item.name, item.email, item.phone, false))));
  }
}
