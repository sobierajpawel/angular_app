import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentsComponent } from './list-students/list-students.component';
import { AddStudentComponent } from './add-student/add-student.component';

const routes: Routes = [
  // localhost:4200/students -> ListStudentsComponent
  {path: "students" , component: ListStudentsComponent},
  // localhost:4200/add-student -> AddStudentComponent
  { path: "add-student", component: AddStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
