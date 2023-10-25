import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStudentsComponent } from './list-students/list-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
  // localhost:4200/students -> ListStudentsComponent
  {path: "students" , component: ListStudentsComponent},
  // localhost:4200/add-student -> AddStudentComponent
  { path: "add-student", component: AddStudentComponent},

  // localhost:4200/edit-student/3 -> EditStudentComponent - 3
  // localhost:4200/edit-student/7 -> EditStudentComponent - 7
  { path: "edit-student/:id", component: EditStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
