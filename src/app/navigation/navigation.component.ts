import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
    title : string = "Student-manager-application";
    new_title = "test";

    onClickBtn(){
      this.title = "Changed title";
      let test : string = "test_1"
      if (true)
      {
        let test : string = "test_2";
        console.log(test);
      }
      console.log(test);
    }
}
