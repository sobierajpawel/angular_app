import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
    title : string = "Student-manager-application";
    new_title = "";

    onClickBtn(){
      this.title = "Changed title";
    }
}
